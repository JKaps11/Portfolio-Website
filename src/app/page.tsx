// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
import GithubProfilePicture from '@/components/app/home/GithubProfilePicture';
import { DownloadOutlined, EnvironmentOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { ArrowHintToast } from '@/components/app/home/NavigationAlert';
export default function HomePage() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="p-12 w-2/3 h-1/2 flex flex-row items-center justify-between">
            <GithubProfilePicture />  
            <div className='subtitle'>
              <h1>
                Joshua Kaplan
              </h1>
              <p className="leading-[1.2]">Full Stack Developer</p>
              <p className="location">
                <EnvironmentOutlined aria-hidden="true" />
                Connecticut, USA
              </p>
              <div className="flex justify-start items-center gap-6 my-2">
                <a
                  href="/Joshua_Kaplan_Resume.pdf"
                  download="Joshua_Kaplan_Resume.pdf"
                >
                  <button className="resume-button">
                    <DownloadOutlined /> Resume
                  </button>
                </a>

                <a
                  href="https://github.com/JKaps11"
                  className="social-icon"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubOutlined />
                </a>

                <a
                  href="https://www.linkedin.com/in/joshua-kaplan-a88315245/"
                  className="social-icon"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinOutlined />
                </a>

                <a
                  href="mailto:jkaps11@gmail.com"
                  className="social-icon"
                  aria-label="Email"
                >
                  <MailOutlined />
                </a>
              </div>
            </div>
        </div>    
      </div>
      <ArrowHintToast/>
    </>
  );
}
