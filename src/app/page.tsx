// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
import React from 'react';
import { Title } from '@/components/client/Typography';
import GithubProfilePicture from '@/components/app/GithubProfilePicture';
import { Flex } from '@/components/client/Flex';

export default function HomePage() {
  return (
    <Flex align="center" justify="center" gap={40} vertical={true} className="flex-1">
      <Flex align="center" gap={40} className="border border-white rounded-xl p-12 max-w-2xl w-full mx-auto">
        <GithubProfilePicture />
        <Title level={1} className="!mb-0">Hello, I'm Joshua Kaplan</Title>
      </Flex>
    </Flex>
  );
}
