'use client';

import { Layout } from 'antd';
import { ReactNode } from 'react';

interface AntLayoutClientProps {
  headerContent?: ReactNode;
  mainContent: ReactNode;
  footerContent?: ReactNode;
  contentClassName?: string;
}

export const AntLayoutClient: React.FC<AntLayoutClientProps> = ({ 
  headerContent,
  mainContent,
  footerContent,
  contentClassName = "container mx-auto px-4 py-16"
}) => (
  <Layout className="min-h-screen flex flex-col">
    {headerContent && (
      <Layout.Header className="shadow-md">
        {headerContent}
      </Layout.Header>
    )}

    <Layout.Content className="flex-1 flex flex-col overflow-auto">
      <div className={contentClassName}>
        {mainContent}
      </div>
    </Layout.Content>

    {footerContent && (
      <Layout.Footer className="text-center bg-gray-100 py-4">
        {footerContent}
      </Layout.Footer>
    )}
  </Layout>
); 