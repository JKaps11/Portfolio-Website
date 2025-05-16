'use client';

import { Card } from "@/components/client/Card";
import { Carousel } from "@/components/client/Carousel";
import { GithubOutlined } from '@ant-design/icons';
import { GitHubRepo } from '@/types';

interface ProjectCarouselProps {
  projects: GitHubRepo[];
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  return (
    <Carousel autoplay className="pb-12">
      {projects.map((project) => (
        <div key={project.id} className="px-4">
          <Card 
            hoverable 
            className="mx-auto max-w-2xl"
            title={project.name}
            actions={[
              <a 
                key="github" 
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <GithubOutlined /> View on GitHub
              </a>
            ]}
          >
            <p className="text-gray-600">{project.description || '[No description available]'}</p>
          </Card>
        </div>
      ))}
    </Carousel>
  );
}; 