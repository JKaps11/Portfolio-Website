import { Projects } from "@/components/app/projects/Projects";
import ProjectModal from "./ProjectModal";
import { Separator } from "@/components/ui/separator";

export default function ProjectSection() {
    return (
        <div id="projects" className="flex flex-col w-full h-full gap-4">
            <h2>Projects</h2>
            <Separator decorative />
            {/*<div className="flex flex-col gap-4">*/}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
                {Projects.map((project) => (
                    <ProjectModal key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
