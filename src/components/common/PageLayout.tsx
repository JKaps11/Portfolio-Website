import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 max-w-screen-xl mx-auto h-full">
      {children}
    </div>
  );
};
