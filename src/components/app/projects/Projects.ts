import { Technology } from "./TechTags";

interface Project {
  id: string;
  name: string;
  description: string;
  html_url: string;
  technologies: Technology[];
}

interface ProjectDetails extends Project {
  videoUrl: string;
  summary: string;
}

export const Projects: Project[] = [
  {
    id: "husky-trails",
    name: "Husky Trails",
    description:
      "A cross-platform navigation app built with React Native and Expo, designed to help new students navigate the UConn campus.",
    html_url: "https://github.com/JKaps11/Husky-Trails",
    technologies: ["React Native", "Expo", "TypeScript"],
  },
  {
    id: "app-launcher",
    name: "App Launcher",
    description:
      "A CLI tool that allows you to store shortcuts to executables and run them by entering a custom keyword into your terminal. Built in Rust using clap and serde-json crates.",
    html_url: "https://github.com/JKaps11/App-Launcher",
    technologies: ["Rust"],
  },
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Built with Next.js and TypeScript.",
    html_url: "https://github.com/JKaps11/Portfolio-Website",
    technologies: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "notion-integration",
    name: "Notion Integration",
    description:
      "A project demonstrating how to integrate with the Notion API using TypeScript. Includes scripts to update and reset counters in a Notion database on a weekly basis.",
    html_url: "https://github.com/JKaps11/Notion-Integration",
    technologies: ["TypeScript", "Node.js"],
  },
  {
    id: "course-registration",
    name: "Course Registration",
    description:
      "Front end of the course registration project in Vue.js. The back end was implemented in AWS.",
    html_url: "https://github.com/JKaps11/Course-Registration",
    technologies: ["Vue", "JavaScript"],
  },
  {
    id: "recipe-application",
    name: "Recipe Application",
    description:
      "A recipe/menu creator application using the MERN stack. Features login authentication and authorization with Auth0.",
    html_url: "https://github.com/JKaps11/RecipeApplication",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
  },
];


const ProjectExtras: { id: string; videoUrl: string; summary: string }[] = [
  {
    id: 'husky-trails',
    videoUrl: 'https://www.youtube.com/watch?v=if67bR9YJI8',
    summary: '',
  },
  {
    id: 'app-launcher',
    videoUrl: '',
    summary: '',
  },
  {
    id: 'portfolio-website',
    videoUrl: '',
    summary: '',
  },
  {
    id: 'notion-integration',
    videoUrl: '',
    summary: '',
  },
  {
    id: 'course-registration',
    videoUrl: 'https://youtu.be/VSPCmfE24IE',
    summary: '',
  },
  {
    id: 'recipe-application',
    videoUrl: '',
    summary: '',
  },
];

export const DetailedProjects: ProjectDetails[] = Projects.map((project) => {
  const extra = ProjectExtras.find((e) => e.id === project.id);
  return {
    ...project,
    videoUrl: extra?.videoUrl || '',
    summary: extra?.summary || '',
  };
});