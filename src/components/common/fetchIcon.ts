import { cache } from "react";

const fetchIconSvg = cache(async (slug: string) => {
    const res = await fetch(`https://cdn.simpleicons.org/${slug}`, {
        headers: { Accept: "image/svg+xml" },
    });
    return await res.text();
});

export default fetchIconSvg;
