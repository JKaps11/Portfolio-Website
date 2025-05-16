import { ProjectsLayout } from "@/components/app/projects/ProjectsLayout";

export default function ProjectsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProjectsLayout>{children}</ProjectsLayout>;
}