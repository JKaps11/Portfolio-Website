import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export interface TechIconProps {
    slug: string;
    label: string;
    /** Escape hatch for marks Simple Icons doesn't carry, served from /public. */
    src?: string;
}

export default async function SkillTag({ slug, label, src }: TechIconProps) {
    // h-auto releases the Badge base variant's fixed h-5, which otherwise
    // clamps the badge and makes py-* a no-op.
    return (
        <Badge variant="outline" className="h-auto px-3 py-2 text-sm bg-card">
            <Image
                src={src ?? `/icons/${slug}.svg`}
                alt=""
                aria-hidden="true"
                width={16}
                height={16}
            />
            <span className="font-medium">{label}</span>
        </Badge>
    );
}
