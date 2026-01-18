import { Projects } from "@/components/app/projects/Projects";
import ProjectModal from "./ProjectModal";
import SectionTitle from "@/components/common/SectionTitle";

export default function ProjectSection() {
    return (
        <section
            id="projects"
            className="flex flex-col w-full h-full gap-4"
        >
            <SectionTitle title="Projects" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
                {Projects.map((project) => (
                    <ProjectModal key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
