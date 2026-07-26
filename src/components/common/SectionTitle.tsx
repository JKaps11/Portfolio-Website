// import { Badge } from "@/components/ui/badge";
import { Separator } from "../ui/separator";

interface SectionTitleProps {
    title: string;
}

export default function SectionTitle({
    title,
}: SectionTitleProps) {
    return (
        <>
            <h2 className="mt-2">{title}</h2>
            <Separator />
        </>
    );
}
