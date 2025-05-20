// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
import React from 'react';
import { Title } from '@/components/client/Typography';
import GithubProfilePicture from '@/components/app/GithubProfilePicture';
import { Flex } from '@/components/client/Flex';
import { ArrowLeftOutlined, ArrowRightOutlined, EnvironmentOutlined, FileTextOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { Paragraph } from '@/components/client/Typography';
export default function HomePage() {
  return (
    <Flex align="center" justify="center" gap={200} vertical={true} className="flex-1 w-full h-full">
      <Flex align="center" justify="center" gap={200} className="p-12 max-w-2xl w-full mx-auto">
        <div className="flex-shrink-0">
          <GithubProfilePicture />
        </div>
        <Flex gap={10} vertical={true}>
          <Title level={1} className="!mb-0 whitespace-nowrap">
            Joshua Kaplan
          </Title>
          <Paragraph className="!mb-0">
            Full Stack Developer
          </Paragraph>
          <Paragraph className="!mb-0">
            <EnvironmentOutlined /> Connecticut, USA
          </Paragraph>
          <div className="flex justify-start items-center space-x-6 mb-4">
          <a href="/Joshua_Kaplan_Resume.pdf" download="Joshua_Kaplan_Resume.pdf">
            <button className="bg-primary text-white px-4 py-2 rounded-md border-2 border-white">
              <FileTextOutlined /> Resume
            </button>
          </a>

        <a 
          href="https://github.com/JKaps11" 
          className="social-link" 
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined />
        </a>
        <a 
          href="https://www.linkedin.com/in/joshua-kaplan-a88315245/" 
          className="social-link" 
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinOutlined />
        </a>
        <a 
          href="mailto:jkaps11@gmail.com" 
          className="social-link" 
          aria-label="Email"
        >
          <MailOutlined />
        </a>
      </div>
        </Flex>
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
