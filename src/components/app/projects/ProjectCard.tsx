'use client';
import { useState } from 'react';
import TechTags, { Technology } from './TechTags';
import ProjectModal from './ProjectModal';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardAction>
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-800 transition-colors"
            onClick={(e) => e.stopPropagation()}
            aria-label="View on GitHub"
          >
            <img src="https://cdn.simpleicons.org/github" height="20" width="20" alt="GitHub" />
          </a>
        </CardAction>
      </CardHeader>
      <CardContent>
        <CardDescription>
          {project.description || 'No description available.'}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <div className="mt-6 flex items-end justify-between">
          <TechTags technologies={project.technologies} />
        </div>
      </CardFooter>
    </Card>);
}
