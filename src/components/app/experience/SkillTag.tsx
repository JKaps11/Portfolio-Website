import fetchIconSvg from "@/components/common/fetchIcon";
import { Item, ItemContent } from "@/components/ui/item";
import Image from "next/image";

export interface TechIconProps {
    slug: string;
    label: string;
}

export default async function SkillTag({ slug, label }: TechIconProps) {
    return (
        <Item variant="outline" className="inline-flex rounded-md">
            <ItemContent className="flex items-center gap-2 px-3 py-1 text-sm">
                <Image
                    src={`/icons/${slug}.svg`}
                    alt={label}
                    width={20}
                    height={20}
                />
                <span className="font-medium">{label}</span>
            </ItemContent>
        </Item>
    );
}
