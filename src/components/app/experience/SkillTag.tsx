import fetchIconSvg from "@/components/common/fetchIcon";
import { Item, ItemContent } from "@/components/ui/item";

export interface TechIconProps {
    slug: string;
    label: string;
}

export default async function SkillTag({ slug, label }: TechIconProps) {
    const svg = await fetchIconSvg(slug);
    return (
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
