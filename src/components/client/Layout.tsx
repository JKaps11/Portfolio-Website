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
  contentClassName = "py-16 flex-grow"
}) => (
  <Layout className="min-h-screen flex flex-col w-full">
    {headerContent && (
      <Layout.Header className="w-full p-0" style={{ padding: 0 }}>
        <div className="w-full" style={{ padding: 0 }}>
          {headerContent}
        </div>
      </Layout.Header>
    )}

    <Layout.Content className={`${contentClassName} bg-gradient-to-b from-[#b22222] to-black`}>
      {mainContent}
    </Layout.Content>

    {footerContent && (
      <Layout.Footer className="text-center py-4 mt-auto">
        {footerContent}
      </Layout.Footer>
    )}
  </Layout>
); 