// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
import React from 'react';
import Link from 'next/link';
import { Title, Paragraph } from '@/components/client/Typography';
import { Button } from '@/components/client/Button';

export default function HomePage() {
  return (
    <>
      <section className="text-center mb-16">
        <Title level={1}>Hello, I'm Joshua Kaplan</Title>
        <Paragraph>I'm a Software Engineer. Welcome to my portfolio!</Paragraph>
        <div className="flex justify-center space-x-4 mt-6">
          <Link href="/projects">
            <Button type="primary" size="large">View Projects</Button>
          </Link>
          <Button size="large" href="mailto:jkaps11@gmail.com">Contact Me</Button>
        </div>
      </section>

      <section id="about" className="mb-16">
        <Title level={2}>About Me</Title>
        <Paragraph>
          [Write a brief introduction about yourself, your skills, and interests.]
        </Paragraph>
      </section>
    </>
  );
}
