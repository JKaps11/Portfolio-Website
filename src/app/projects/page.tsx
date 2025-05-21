import PostProjects from '@/components/app/projects/PostProjects';
import { Suspense } from 'react';
import { Spin, Flex } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const loadingIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

export default function ProjectPage() {
  return (
    <section id="projects" className="flex-1 w-full h-full">
      <h2>Projects</h2>
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
    
