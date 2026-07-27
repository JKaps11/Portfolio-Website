import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { SimpleIcon } from "simple-icons";

export type TechIconProps = { label: string } & (
    | { icon: SimpleIcon; src?: never }
    /** Escape hatch for marks Simple Icons doesn't carry, served from /public. */
    | { icon?: never; src: string }
);

/**
 * Brand hexes darker than this read as invisible against a dark card, so they
 * fall back to currentColor the way Simple Icons' own dark-mode variant does.
 * Only affects marks whose brand colour is black (Next.js, TanStack).
 */
const MIN_LUMINANCE = 0.25;

function brandFill(hex: string) {
    const packed = parseInt(hex, 16);
    const r = (packed >> 16) & 255;
    const g = (packed >> 8) & 255;
    const b = packed & 255;
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

    return luminance < MIN_LUMINANCE ? "currentColor" : `#${hex}`;
}

export default function SkillTag({ label, icon, src }: TechIconProps) {
    // h-auto releases the Badge base variant's fixed h-5, which otherwise
    // clamps the badge and makes py-* a no-op. size-4! overrides the variant's
    // [&>svg]:size-3! so the inline glyph keeps the 16px it had as an <img>.
    return (
        <Badge
            variant="outline"
            className="h-auto px-3 py-2 text-sm bg-card [&>svg]:size-4!"
        >
            {icon ? (
                <svg
                    viewBox="0 0 24 24"
                    fill={brandFill(icon.hex)}
                    aria-hidden="true"
                >
                    <path d={icon.path} />
                </svg>
            ) : (
                <Image
                    src={src}
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                />
            )}
            <span className="font-medium">{label}</span>
        </Badge>
    );
}
