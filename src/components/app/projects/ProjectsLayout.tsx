import { ReactNode } from 'react';
import { AntLayoutClient } from '@/components/client/Layout';

interface ProjectsLayoutProps {
  children: ReactNode;
}

export const ProjectsLayout: React.FC<ProjectsLayoutProps> = ({ children }) => {
  return (
    <AntLayoutClient 
      mainContent={children}
      contentClassName="container mx-auto"
    />
  );
}; 