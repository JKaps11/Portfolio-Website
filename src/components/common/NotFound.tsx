// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
import { Button } from '@/components/client/Button';
import { Paragraph, Title } from '@/components/client/Typography';
import Link from 'next/link';

const NotFoundContent = () => (
  <div className="min-h-[600px] flex flex-col items-center justify-center text-center px-4">
    <Title level={1} className="text-8xl font-bold mb-4">404</Title>
    <Title level={2} className="mb-8">Page Not Found</Title>
    <Paragraph className="mb-8 max-w-md">
      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
    </Paragraph>
    <Link href="/">
      <Button type="primary" size="large">
        Back to Home
      </Button>
    </Link>
  </div>
);

export default NotFoundContent;