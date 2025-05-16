'use client';

import { Layout } from 'antd';
import { ReactNode } from 'react';

interface AntLayoutClientProps {
  headerContent: ReactNode;
  mainContent: ReactNode;
  footerContent: ReactNode;
}

export const AntLayoutClient: React.FC<AntLayoutClientProps> = ({ 
  headerContent,
  mainContent,
  footerContent
}) => (
  <Layout className="min-h-screen flex flex-col">
    <Layout.Header className="shadow-md">
      {headerContent}
    </Layout.Header>

    <Layout.Content className="container mx-auto py-16 flex-grow">
      {mainContent}
    </Layout.Content>

    <Layout.Footer className="text-center py-4 mt-auto">
      {footerContent}
    </Layout.Footer>
  </Layout>
); 