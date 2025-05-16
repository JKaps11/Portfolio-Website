import { Button } from '@/components/client/Button';
import { Title } from '@/components/client/Typography';
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center text-center px-4">
      <Title level={1} className="text-8xl font-bold mb-4">404</Title>
      <Title level={2} className="mb-8">Page Not Found</Title>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <Button type="primary" icon={<HomeOutlined />} size="large">
          Back to Home
        </Button>
      </Link>
    </div>
  );
} 