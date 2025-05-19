'use client';

import { Layout } from 'antd';
import { ReactNode } from 'react';
import NavBarSelector from '../app/NavBar';

interface AntLayoutClientProps {
  headerContent: boolean;
  mainContent: ReactNode;
  footerContent?: ReactNode;
  contentClassName?: string;
}

export const AntLayoutClient: React.FC<AntLayoutClientProps> = ({ 
  headerContent,
  mainContent,
  footerContent,
  contentClassName = "py-16 flex-grow"
}) => (
  <Layout className="min-h-screen flex flex-col w-full" style={{ background: 'var(--homepage-gradient)' }}>
    {headerContent && (
      <Layout.Header className="w-full p-0">
        <NavBarSelector/>
      </Layout.Header>
    )}

    <Layout.Content className={`${contentClassName}`}>
      {mainContent}
    </Layout.Content>

    {footerContent && (
      <Layout.Footer className="text-center py-4 mt-auto">
        {footerContent}
      </Layout.Footer>
    )}
  </Layout>
); 