import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export interface TechIconProps {
    slug: string;
    label: string;
}

export default async function SkillTag({ slug, label }: TechIconProps) {
    return (
        <Badge variant="outline" className="px-3 py-1.5 text-sm bg-card">
            <Image
                src={`/icons/${slug}.svg`}
                alt=""
                aria-hidden="true"
                width={16}
                height={16}
            />
            <span className="font-medium">{label}</span>
        </Badge>
    );
}
