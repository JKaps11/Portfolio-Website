const HEX = /^[0-9A-F]{3,6}$/i;

export async function GET(
    req: Request,
    ctx: { params: Promise<{ name: string }> },
) {
    const { name: rawName } = await ctx.params;
    const slug = rawName.toLowerCase().replace(/\.svg$/i, "");

    if (!slug) {
        console.error("[icons] Missing slug in request", { rawName });
        return new Response("Invalid icon request", { status: 400 });
    }

    const url = new URL(req.url);
    const colorParam = url.searchParams.get("color");
    const upstreamUrl =
        colorParam && HEX.test(colorParam)
            ? `https://cdn.simpleicons.org/${slug}/${colorParam}`
            : `https://cdn.simpleicons.org/${slug}`;

    console.log("[icons] Fetching icon", { slug, upstreamUrl });

    let upstreamRes: Response;
    try {
        upstreamRes = await fetch(upstreamUrl, {
            headers: { Accept: "image/svg+xml" },
            next: { revalidate: 60 * 60 * 24 * 7 },
        });
    } catch (err) {
        console.error("[icons] Upstream network or fetch error", {
            slug,
            upstreamUrl,
            error: err,
        });
        return new Response("Icon fetch error", { status: 502 });
    }

    if (!upstreamRes.ok) {
        console.error("[icons] Upstream returned non-ok", {
            slug,
            upstreamUrl,
            status: upstreamRes.status,
            statusText: upstreamRes.statusText,
        });
        return new Response("Icon not found", { status: upstreamRes.status });
    }

    const svg = await upstreamRes.text();

    return new Response(svg, {
        headers: {
            "Content-Type": "image/svg+xml; charset=utf-8",
            "Cache-Control":
                "public, max-age=0, s-maxage=31536000, stale-while-revalidate=86400",
        },
    });
}
