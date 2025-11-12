export const dynamic = "force-dynamic";

const HEX = /^[0-9A-F]{3,6}$/i;

type Source = (
    slug: string,
    color?: string | null,
) => {
    url: string;
    supportsColorParam: boolean;
};

const SOURCES: Source[] = [
    // Primary (may 403 on Vercel for some slugs/IPs)
    (slug, color) => ({
        url:
            color && HEX.test(color)
                ? `https://cdn.simpleicons.org/${slug}/${color}`
                : `https://cdn.simpleicons.org/${slug}`,
        supportsColorParam: true,
    }),
    // Fallback 1: jsDelivr (officially recommended by Simple Icons docs)
    // Color param not supported; we recolor locally.
    (slug) => ({
        url: `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`,
        supportsColorParam: false,
    }),
    // Fallback 2: unpkg (also recommended)
    (slug) => ({
        url: `https://unpkg.com/simple-icons@latest/icons/${slug}.svg`,
        supportsColorParam: false,
    }),
];

function recolorSvg(svg: string, color: string) {
    if (!HEX.test(color)) return svg;
    const hex = `#${color}`;
    // If there's already a fill on <svg>, replace the first one; else inject.
    if (/\bfill="/i.test(svg)) {
        return svg.replace(/\bfill="[^"]*"/i, `fill="${hex}"`);
    }
    return svg.replace(/<svg\b/i, `<svg fill="${hex}"`);
}

export async function GET(
    req: Request,
    ctx: { params: Promise<{ name: string }> },
) {
    const { name: rawName } = await ctx.params;
    const slug = (rawName || "").toLowerCase().replace(/\.svg$/i, "");

    if (!slug) {
        console.error("[icons] Missing slug in request", { rawName });
        return new Response("Invalid icon request", { status: 400 });
    }

    const url = new URL(req.url);
    const color = url.searchParams.get("color");

    let lastStatus = 0;
    let lastUrl = "";

    for (const make of SOURCES) {
        const { url, supportsColorParam } = make(slug, color);
        lastUrl = url;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    Accept: "image/svg+xml",
                    // A friendly UA can help some WAFs/CDNs treat this like a normal browser request
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
                },
                next: { revalidate: 60 * 60 * 24 * 7 }, // 1 week
            });

            if (!res.ok) {
                lastStatus = res.status;
                console.warn("[icons] upstream non-ok", {
                    slug,
                    url,
                    status: res.status,
                });
                // Try next source on 4xx/5xx
                continue;
            }

            let svg = await res.text();
            if (color && HEX.test(color) && !supportsColorParam) {
                svg = recolorSvg(svg, color);
            }

            return new Response(svg, {
                headers: {
                    "Content-Type": "image/svg+xml; charset=utf-8",
                    "Cache-Control":
                        "public, max-age=0, s-maxage=31536000, stale-while-revalidate=86400",
                },
            });
        } catch (err) {
            console.error("[icons] fetch error", { slug, url, error: err });
            // try next source
            continue;
        }
    }

    // Nothing worked
    console.error("[icons] all sources failed", { slug, lastUrl, lastStatus });
    // 403/404 from origin → reflect it; otherwise 502 as generic upstream failure
    const status = lastStatus || 502;
    return new Response("Icon fetch error", { status });
}
