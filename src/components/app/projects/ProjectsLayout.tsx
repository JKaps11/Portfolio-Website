import { ReactNode } from 'react';
import { AntLayoutClient } from '../AntLayoutClient';

interface ProjectsLayoutProps {
  children: ReactNode;
}

export const ProjectsLayout: React.FC<ProjectsLayoutProps> = ({ children }) => {
  return (
    <AntLayoutClient 
      mainContent={children}
      contentClassName="container mx-auto px-4 py-8 mb-8"
    />
  );
}; 