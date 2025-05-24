'use client';
import { useState } from 'react';
import { GithubOutlined } from '@ant-design/icons';
import TechTags, { Technology } from './TechTags';
import ProjectModal from './ProjectModal';

export interface Project {
  id: string;
  name: string;
  description: string;
  html_url: string;
  technologies: Technology[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalVisible(true)}
        className="bg-white rounded-xl p-6 flex flex-col justify-between h-full cursor-pointer transition-transform duration-200 hover:scale-[1.02] hover:shadow-2xl"
      >
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 break-words">
            {project.name}
          </h3>
          <p className="text-sm text-gray-700 line-clamp-4">
            {project.description || 'No description available.'}
          </p>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <TechTags technologies={project.technologies} />
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-800 transition-colors"
            onClick={(e) => e.stopPropagation()}
            aria-label="View on GitHub"
          >
            <GithubOutlined style={{ fontSize: '1.5rem' }} />
          </a>
        </div>
      </div>

      <ProjectModal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        projectId={project.id}
      />
    </>
  );
}
