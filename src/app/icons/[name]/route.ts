const HEX = /^[0-9a-fA-F]{3,6}$/;

export async function GET(
    req: Request,
    ctx: { params: Promise<{ name: string }> },
) {
    const { name: rawName } = await ctx.params;
    const name = rawName.toLowerCase().replace(/\.svg$/i, "");

    const url = new URL(req.url);
    const color = url.searchParams.get("color");
    const upstreamUrl =
        HEX.test(color ?? "") && color
            ? `https://cdn.simpleicons.org/${name}/${color}`
            : `https://cdn.simpleicons.org/${name}`; // ← no color → currentColor

    const upstream = await fetch(upstreamUrl, {
        headers: { Accept: "image/svg+xml" },
        next: { revalidate: 60 * 60 * 24 * 7 },
    });

    if (!upstream.ok) return new Response("Icon not found", { status: 404 });

    const svg = await upstream.text();
    return new Response(svg, {
        headers: {
            "Content-Type": "image/svg+xml; charset=utf-8",
            "Cache-Control":
                "public, max-age=0, s-maxage=31536000, stale-while-revalidate=86400",
        },
    });
}
