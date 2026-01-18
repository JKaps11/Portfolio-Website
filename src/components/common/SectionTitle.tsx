// import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
    // number: string;
    title: string;
    // subtitle?: string;
}

export default function SectionTitle({
    // number,
    title,
    // subtitle,
}: SectionTitleProps) {
    return (
        <h2>{title}</h2>
    );

    // Fancy version (commented out):
    // return ( 
    //     <div className={cn("relative w-full mb-4", className)}>
    //         {/* Decorative gradient line */}
    //         <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-border via-border/50 to-transparent" />

    //         {/* Content container */}
    //         <div className="relative flex items-center gap-4">
    //             {/* Section number badge */}
    //             <Badge
    //                 variant="secondary"
    //                 className="shrink-0 bg-card text-foreground font-mono text-xs tracking-wider px-3 py-1.5 shadow-sm ring-1 ring-border/50"
    //             >
    //                 {number}
    //             </Badge>

    //             {/* Title and subtitle */}
    //             <div className="bg-background pr-6">
    //                 <h2 className="inline-block">{title}</h2>
    //                 {subtitle && (
    //                     <p className="text-sm text-muted-foreground mt-0.5">
    //                         {subtitle}
    //                     </p>
    //                 )}
    //             </div>
    //         </div>
    //     </div>
    // );
}
