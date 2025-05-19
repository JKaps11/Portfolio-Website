// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
import React from 'react';
import { Title } from '@/components/client/Typography';
import GithubProfilePicture from '@/components/app/GithubProfilePicture';
import { Flex } from '@/components/client/Flex';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Paragraph } from '@/components/client/Typography';
export default function HomePage() {
  return (
    <Flex align="center" justify="center" gap={200} vertical={true} className="flex-1 w-full h-full">
      <Flex align="center" gap={40} className="p-12 max-w-2xl w-full mx-auto">
        <div className="flex-shrink-0">
          <GithubProfilePicture />
        </div>
        <Title level={1} className="!mb-0 flex-1 whitespace-nowrap">
          Hello, I'm Joshua Kaplan
        </Title>
      </Flex>
      <Flex align="center" justify="center" gap={24} className="p-12 max-w-2xl w-full">
        <ArrowLeftOutlined className="text-3xl text-tertiary" />
        <span className="text-xl md:text-2xl font-semibold text-tertiary text-center">
          Get started by navigating with your arrow keys
        </span>
        <ArrowRightOutlined className="text-3xl text-tertiary" />
      </Flex>
    </Flex>
  );
}
