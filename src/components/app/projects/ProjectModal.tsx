'use client';
import { Modal } from 'antd';
import TechTags, { Technology } from './TechTags';
import { DetailedProjects } from './Projects';
import { GithubOutlined } from '@ant-design/icons';

export interface ProjectDetails {
  projectId: string;
  videoUrl: string;
  title: string;
  technologies: Technology[];
  summary: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
}


export default function ProjectModal({ isOpen, onClose, projectId }: ProjectModalProps) {
  const project = DetailedProjects.find(p => p.id === projectId);
  if (!project) return null;
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      title={null}
      width={800}
      closable={false}
    >
      <div className="flex flex-col gap-4">
        {project.videoUrl && (
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              src={project.videoUrl.replace('watch?v=', 'embed/')}
              title={project.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded"
            />
          </div>
        )}
        <h2 className="text-2xl font-bold text-gray-900">{project.name}</h2>
        <div className="flex items-center justify-start gap-4">
          <TechTags technologies={project.technologies} />
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-800 transition-colors"
            aria-label="View on GitHub"
          >
            <GithubOutlined style={{ fontSize: '2rem' }} />
          </a>
        </div>
        <p className="text-sm text-gray-700 whitespace-pre-line">
          {project.description}
        </p>
        <p className="text-sm text-gray-700 whitespace-pre-line">
          {project.summary}
        </p>
      </div>

    </Modal>
  );
}
