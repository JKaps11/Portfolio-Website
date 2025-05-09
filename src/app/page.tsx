// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
'use client';

import React from 'react';
import { Typography, Button, Row, Col, Card } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { MainLayout } from '@/components/app/MainLayout';

const { Title, Paragraph } = Typography;

export default function HomePage() {
  return (
    <MainLayout>
      <section className="text-center mb-16">
        <Title level={1}>Hello, I'm Joshua Kaplan</Title>
        <Paragraph>I'm a Software Engineer. Welcome to my portfolio!</Paragraph>
        <div className="flex justify-center space-x-4 mt-6">
          <Button type="primary" size="large">View Projects</Button>
          <Button size="large">Contact Me</Button>
        </div>
      </section>

      <section id="about" className="mb-16">
        <Title level={2}>About Me</Title>
        <Paragraph>
          [Write a brief introduction about yourself, your skills, and interests.]
        </Paragraph>
      </section>

      <section id="projects" className="mb-16">
        <Title level={2}>Projects</Title>
        <Row gutter={[16, 16]}>
          {[1, 2, 3].map((project) => (
            <Col xs={24} sm={12} md={8} key={project}>
              <Card hoverable title={`Project ${project}`} className="h-full">
                <Paragraph>[Brief description of Project {project}.]</Paragraph>
                <Button type="link" href="#">View Details</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section id="contact" className="mb-16 text-center">
        <Title level={2}>Get In Touch</Title>
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="#" aria-label="GitHub"><GithubOutlined /></a>
          <a href="#" aria-label="LinkedIn"><LinkedinOutlined /></a>
          <a href="#" aria-label="Email"><MailOutlined /></a>
        </div>
      </section>
    </MainLayout>
  );
}
