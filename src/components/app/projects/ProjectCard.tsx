"use client";
import { Button } from "@/components/ui/button";
import TechTags, { Technology } from "./TechTags";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

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
                <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardAction>
                        <TooltipProvider>
                            <Tooltip delayDuration={150}>
                                <TooltipTrigger asChild>
                                    <Button
                                        asChild
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-full cursor-pointer ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/10"
                                        onPointerDown={(e) =>
                                            e.stopPropagation()
                                        }
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <a
                                            href={project.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="View on GitHub"
                                        >
                                            <img
                                                src="https://cdn.simpleicons.org/github/fff?viewbox=auto&size=22"
                                                alt=""
                                                width={22}
                                                height={22}
                                                className="pointer-events-none"
                                                onError={(e) => {
                                                    e.currentTarget.style.display =
                                                        "none";
                                                }}
                                            />
                                            <span className="sr-only">
                                                GitHub
                                            </span>
                                        </a>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="left">
                                    {project.html_url}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </CardAction>
                </CardHeader>

                <CardContent>
                    <CardDescription>
                        {project.description || "No description available."}
                    </CardDescription>
                </CardContent>

                <CardFooter>
                    <div className="mt-6 flex items-end justify-between">
                        <TechTags technologies={project.technologies} />
                    </div>
                </CardFooter>
            </Card>
        );
    },
);
ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
