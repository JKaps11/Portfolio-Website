"use client";
import TechTags, { Technology } from "./TechTags";
import { DetailedProjects } from "./Projects";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ProjectCard, { Project } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";

export interface ProjectDetails {
  projectId: string;
  videoUrl: string;
  title: string;
  technologies: Technology[];
  summary: string;
}

interface ProjectModalProps {
  project: Project
}

export default function ProjectModal({
  project
}: ProjectModalProps) {
  const detailedProject = DetailedProjects.find((p) => p.id === project.id);
  if (!detailedProject) return null;
  return (
    <Dialog
    >
      <DialogTrigger asChild>
        <button>
          <ProjectCard project={detailedProject} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-4">
          {detailedProject.videoUrl && (
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src={detailedProject.videoUrl.replace("watch?v=", "embed/")}
                title={detailedProject.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded"
              />
            </div>
          )}
          <DialogTitle>{detailedProject.name}</DialogTitle>
          {/* <h2 className="text-2xl font-bold text-gray-900">{detailedProject.name}</h2> */}
          <div className="flex items-center justify-start gap-4">
            <TechTags technologies={detailedProject.technologies} />
            <a
              href={detailedProject.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-800 transition-colors"
              aria-label="View on GitHub"
            >
              <img src="https://cdn.simpleicons.org/github" height="20" width="20" alt="GitHub" />
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
