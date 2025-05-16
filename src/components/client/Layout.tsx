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
  contentClassName = "container mx-auto py-16 flex-grow"
}) => (
  <Layout className="min-h-screen flex flex-col">
    {headerContent && (
      <Layout.Header className="shadow-md">
        {headerContent}
      </Layout.Header>
    )}

    <Layout.Content className={contentClassName}>
      {mainContent}
    </Layout.Content>

    {footerContent && (
      <Layout.Footer className="text-center py-4 mt-auto">
        {footerContent}
      </Layout.Footer>
    )}
  </Layout>
); 