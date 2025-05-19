import Link from 'next/link';
import { GithubOutlined, LinkedinOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import { AntLayoutClient } from '@/components/client/Layout';
import { FadeIn } from '@/components/client/FadeIn';
import { Button } from '../client/Button';
const Dot = () => (
  <div style={{
    width: 8,
    height: 8,
    background: 'white',
    borderRadius: 2,
    display: 'inline-block',
    margin: '0 12px'
  }} />
);

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const headerContent = (
    <div className="flex items-center justify-evenly w-full h-full">
      <Link href="/projects">
        <Button type="text">View Projects</Button>
      </Link>
      <Dot />
      <Link href="/skills">
        <Button type="text">Skills</Button>
      </Link>
      <Dot />
      <Link href="/" aria-label="Home">
         <button className="custom-icon-button" aria-label="Home">
    <HomeOutlined />
  </button>
      </Link>
      <Dot />
      <Link href="/experience">
        <Button type="text">Experience</Button>
      </Link>
      <Dot />
      <Button type="text" href="mailto:jkaps11@gmail.com">
        Contact Me
      </Button>
    </div>
  );

  const footerContent = (
    <div className="text-white text-center">
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
      mainContent={<FadeIn>{children}</FadeIn>}
      footerContent={footerContent}
    />
  );
};
