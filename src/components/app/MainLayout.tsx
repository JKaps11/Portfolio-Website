import Link from 'next/link';
import { Title } from '@/components/client/Typography';
import { GithubOutlined, LinkedinOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import { AntLayoutClient } from '@/components/client/Layout';
export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const headerContent = (
    <div className="container mx-auto flex items-center h-full">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-white hover:text-white/80 flex items-center" aria-label="Home">
          <HomeOutlined className="text-xl" />
        </Link>
        <div className="flex items-center">
          <Title level={4} className="text-white !m-0 leading-none">Joshua Kaplan</Title>
        </div>
      </div>
    </div>
  );

  const footerContent = (
    <div className="text-white text-center">
      <Title level={3} className="text-white mb-4">Get In Touch</Title>
      <div className="flex justify-center space-x-6 mb-4">
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
      <div>© 2025 Joshua Kaplan. Code licensed under MIT.</div>
    </div>
  );

  return (
    <AntLayoutClient
      headerContent={headerContent}
      mainContent={children}
      footerContent={footerContent}
    />
  );
};
