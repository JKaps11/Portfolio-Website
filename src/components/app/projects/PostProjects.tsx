import { Card } from "@/components/client/Card";
import { Col, Row } from "@/components/client/Grid";
import { GithubOutlined } from '@ant-design/icons';

interface GitHubRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  open_issues_count: number;
  default_branch: string;
}

const hideProjectsWithNoDescription = true;  

export default async function PostProjects() {
    const projects = await fetch('https://api.github.com/users/JKaps11/repos', {
      headers: {
        accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 } // Cache for1 hour
    });
    
    const data: GitHubRepo[] = await projects.json();
    const filteredData = data.filter(project => !hideProjectsWithNoDescription || project.description !== null);
    const featuredProjects = filteredData.slice(0, 5);
    
    return (
      <div className="p-12">
        <Row gutter={[24, 24]} className="w-full h-full">
          {filteredData.map((project) => (
            <Col xs={24} sm={12} lg={8} key={project.id}>
              <Card 
                className="h-full flex flex-col"
                title={project.name}
                actions={[
                  <a 
                    key="github" 
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-secondary hover:text-primary transition-colors"
                  >
                    <GithubOutlined /> View on GitHub
                  </a>
                ]}
              >
                <p className="text-secondary">{project.description || '[No description available]'}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
}