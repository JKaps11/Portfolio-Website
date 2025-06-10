// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
import { DownloadOutlined, EnvironmentOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { Alert } from '@/components/common/Alert';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between py-16">
          
          {/* Avatar */}
          <div
            className="relative w-80 h-80 rounded-full border-[10px] border-white overflow-hidden shadow-md transition-all duration-300"
            style={{
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
              transform: 'scale(1.02)',
            }}
          >
            <Image
              src="/josh.jpg"
              alt="Joshua Kaplan"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>

          {/* Introductory Info */}
          <div className="subtitle">
            <h1>Joshua Kaplan</h1>
            <p className="leading-[1.2]">Full Stack Developer</p>
            <p className="location flex items-center gap-2">
              <EnvironmentOutlined aria-hidden="true" />
              Connecticut, USA
            </p>

            <div className="flex justify-start items-center gap-6 my-2">
              <a href="/Joshua_Kaplan_Resume.pdf" download="Joshua_Kaplan_Resume.pdf">
                <button className="resume-button">
                  <DownloadOutlined /> Resume
                </button>
              </a>

              <a href="https://github.com/JKaps11" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <GithubOutlined />
              </a>

              <a href="https://www.linkedin.com/in/joshua-kaplan-a88315245/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <LinkedinOutlined />
              </a>

              <a href="mailto:jkaps11@gmail.com" className="social-icon" aria-label="Email">
                <MailOutlined />
              </a>
            </div>
          </div>

        </div>
      </div>

      <Alert message="Use your arrow keys to explore" />
    </>
  );
}
