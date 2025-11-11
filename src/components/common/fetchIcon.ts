import { cache } from "react";

const fetchIconSvg = cache(async (slug: string) => {
    if (slug === "linkedin") {
        const res = await fetch(
            "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
        );
        if (res.ok) return await res.text();
        // Fallback: simple generic "in" square if fetch fails
        return `
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                <path fill="#fff" d="M7 17H5V9h2v8zm-.9-9.3a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zM19 17h-2v-4.1c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.6-.1.9V17h-2V9h2v1.2c.3-.4.9-1.3 2.2-1.3 1.6 0 2.8 1.1 2.8 3.4V17z"/>
              </svg>
          `;
    }
    const res = await fetch(`https://cdn.simpleicons.org/${slug}`, {
        headers: { Accept: "image/svg+xml" },
    });
    return await res.text();
});

export default fetchIconSvg;
