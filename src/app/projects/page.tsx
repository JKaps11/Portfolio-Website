import { Title } from '@/components/client/Typography';
import PostProjects from '@/components/app/projects/PostProjects';
import { Suspense } from 'react';
import { Spin, Flex } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const loadingIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

export default function ProjectPage() {
  return (
    <section id="projects">
      <Title level={1} className="text-center pb-16">Projects</Title>
      <Suspense fallback={
        <Flex align="center" justify="center" className="min-h-[600px]">
          <Spin indicator={loadingIcon} />
        </Flex>
      }>
        <PostProjects />
      </Suspense>
    </section>
  );
}

    
