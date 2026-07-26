"use client";
import TechTags, { Technology } from "./TechTags";
import { DetailedProjects } from "./Projects";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import ProjectCard, { Project } from "./ProjectCard";
import { GithubIcon } from "@/components/common/BrandIcons";

export interface ProjectDetails {
    projectId: string;
    videoUrl: string;
    title: string;
    technologies: Technology[];
    summary: string;
}

interface ProjectModalProps {
    project: Project;
}

export default function ProjectModal({ project }: ProjectModalProps) {
    const detailedProject = DetailedProjects.find((p) => p.id === project.id);
    if (!detailedProject) return null;

    const hasVideo = !!detailedProject.videoUrl;

    if (!hasVideo) {
        return <ProjectCard project={detailedProject} hasVideo={false} />;
    }

    return (
        <Dialog>
            {/* nativeButton={false} because ProjectCard renders a <div>;
                Base UI otherwise expects a real <button>. */}
            <DialogTrigger
                nativeButton={false}
                render={
                    <ProjectCard project={detailedProject} hasVideo={true} />
                }
            />
            <DialogContent>
                <div className="flex flex-col gap-4">
                    <div className="w-full aspect-video rounded-lg overflow-hidden">
                        <iframe
                            src={detailedProject.videoUrl.replace(
                                "watch?v=",
                                "embed/",
                            )}
                            title={detailedProject.name}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded"
                        />
                    </div>
                    <DialogTitle>{detailedProject.name}</DialogTitle>
                    <div className="flex items-center justify-start gap-4">
                        <TechTags technologies={detailedProject.technologies} />
                        <a
                            href={detailedProject.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-800 transition-colors"
                            aria-label="View on GitHub"
                        >
                            <GithubIcon aria-hidden size={20} />
                        </a>
                    </div>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                        {detailedProject.description}
                    </p>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                        {detailedProject.summary}
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
}
