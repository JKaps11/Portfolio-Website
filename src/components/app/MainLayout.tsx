import { GithubOutlined, LinkedinOutlined, MailOutlined} from '@ant-design/icons';
import { AntLayoutClient } from '@/components/client/Layout';
import { FadeIn } from '@/components/client/FadeIn';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const footerContent = (
    <div className="text-white text-center">
      {/* <div className="flex justify-center space-x-6 mb-4">
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
      </div> */}
      <div>© 2025 Joshua Kaplan. Code licensed under MIT.</div>
    </div>
  );

  return (
    <AntLayoutClient
      headerContent={true}
      mainContent={<FadeIn>{children}</FadeIn>}
      footerContent={footerContent}
    />
  );
};
