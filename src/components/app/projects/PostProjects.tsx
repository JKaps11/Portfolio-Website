import { Card } from "@/components/client/Card";
import { Col } from "@/components/client/Grid";
import { Row } from "@/components/client/Grid";
import { GithubOutlined } from '@ant-design/icons';
import { GitHubRepo } from "@/types";
import { ProjectCarousel } from './ProjectCarousel';

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
      <div className="space-y-12">
        <ProjectCarousel projects={featuredProjects} />
        
        <Row gutter={[24, 24]}>
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