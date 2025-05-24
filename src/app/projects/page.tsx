import ProjectCard from '@/components/app/projects/ProjectCard';
import { Projects } from '@/components/app/projects/Projects';
import Divider from '@/components/common/Divider';

export default function ProjectPage() {
  return (
    <div id="projects" className="flex flex-col w-full h-full gap-4">
      <h2>Projects</h2>
      <Divider/>
        <div className="h-full overflow-y-auto pr-3">
          <div className="my-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {Projects.map((project) => (
              <ProjectCard key={project.id} project={project}/>
            ))}
          </div>
        </div>
      </div>  
  );
}
    
