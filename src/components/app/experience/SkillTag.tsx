import { Item, ItemContent } from "@/components/ui/item";
import { cache } from "react";

export interface TechIconProps {
    slug: string;
    label: string;
}

const fetchIconSvg = cache(async (slug: string) => {
    const res = await fetch(`https://cdn.simpleicons.org/${slug}`, {
        headers: { Accept: "image/svg+xml" },
    });
    return await res.text();
});

export default async function SkillTag({ slug, label }: TechIconProps) {
    const svg = await fetchIconSvg(slug);
    return (
        // <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        //   <div
        //     className="w-6 h-6"
        //     dangerouslySetInnerHTML={{ __html: svg }}
        //   />
        //   <span className="text-sm font-medium text-gray-800">{label}</span>
        // </div>
        //

        <Item variant="outline" className="inline-flex rounded-md">
            <ItemContent className="flex items-center gap-2 px-3 py-1 text-sm">
                <span
                    className="size-5 [&_svg]:block"
                    dangerouslySetInnerHTML={{ __html: svg }}
                />
                <span className="font-medium">{label}</span>
            </ItemContent>
        </Item>
    );
}
