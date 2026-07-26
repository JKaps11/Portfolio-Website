"use client";
import TechTags, { Technology } from "./TechTags";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { ExternalLink } from "lucide-react";

export interface Project {
    id: string;
    name: string;
    description: string;
    html_url: string;
    technologies: Technology[];
}

interface BaseProps extends React.ComponentPropsWithoutRef<typeof Card> {
    project: Project;
    hasVideo?: boolean;
}

const ProjectCard = forwardRef<HTMLDivElement, BaseProps>(
    ({ project, hasVideo, className, ...props }, ref) => {
        return (
            <Card
                ref={ref}
                {...props}
                className={cn(
                    "select-none transition-colors",
                    hasVideo &&
                        "cursor-pointer hover:bg-accent/50 hover:border-accent-foreground/20",
                    className,
                )}
                role={hasVideo ? "button" : undefined}
                tabIndex={hasVideo ? 0 : undefined}
            >
                <CardHeader className="space-y-3 pb-4">
                    {/* Metadata bar - GitHub link */}
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold leading-tight text-foreground">
                                {project.name}
                            </h3>
                        </div>
                        <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View on GitHub"
                            className="shrink-0 rounded-lg p-1.5 ring-1 ring-border hover:ring-border/80 hover:bg-accent transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            onPointerDown={(e) => e.stopPropagation()}
                        >
                            <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.description || "No description available."}
                    </p>
                </CardHeader>

                {/* mt-auto pins the tags to the bottom so they line up across
                    a row of cards with different description lengths. */}
                <CardFooter className="mt-auto border-t-0 bg-transparent pt-0">
                    <TechTags technologies={project.technologies} />
                </CardFooter>
            </Card>
        );
    },
);
ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
