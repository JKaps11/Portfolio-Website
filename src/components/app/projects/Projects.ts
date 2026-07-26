import { Technology } from "./TechTags";

interface Project {
  id: string;
  name: string;
  description: string;
  html_url: string;
  /** Deployed, clickable version of the project, when one exists. */
  live_url?: string;
  technologies: Technology[];
}

interface ProjectDetails extends Project {
  videoUrl: string;
  summary: string;
}

// Ordered strongest-first: the top of the list is what a reader sees before
// they decide whether to keep scrolling.
export const Projects: Project[] = [
  {
    id: "willdo",
    name: "WillDo",
    description:
      "Turns any skill into a tracked learning plan, with AI-generated sub-skill trees, a drag-and-drop editor, and daily practice logging. Built as a monorepo where the web and native mobile clients share one type-safe tRPC API.",
    html_url: "https://github.com/JKaps11/WillDo",
    technologies: ["React", "TypeScript", "tRPC", "PostgreSQL", "Expo"],
  },
  {
    id: "liftlog",
    name: "LiftLog",
    description:
      "A workout logger built with deliberately no backend. Every set lives in IndexedDB on the device, so it works offline and needs no account, and persistence sits behind a swappable store layer that lets the test suite run without a browser.",
    html_url: "https://github.com/JKaps11/LiftLog",
    live_url: "https://lift-log-blue.vercel.app",
    technologies: ["React", "TypeScript", "Vite"],
  },
  {
    id: "pebble-watchfaces",
    name: "Pebble Watchfaces",
    description:
      "Watchfaces for Pebble smartwatches, written in C over a shared component layer. A companion Python studio renders design variants through the watch emulator, so comparisons are pixel-exact to the hardware instead of an HTML mockup.",
    html_url: "https://github.com/JKaps11/pebble_watchfaces",
    technologies: ["C", "Python"],
  },
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
  // {
  //   id: "course-registration",
  //   name: "Course Registration",
  //   description:
  //     "Front end of the course registration project in Vue.js. The back end was implemented in AWS.",
  //   html_url: "https://github.com/JKaps11/Course-Registration",
  //   technologies: ["Vue", "JavaScript"],
  // },
];


const ProjectExtras: { id: string; videoUrl: string; summary: string }[] = [
  {
    id: 'willdo',
    videoUrl: '',
    summary: '',
  },
  {
    id: 'liftlog',
    videoUrl: '',
    summary: '',
  },
  {
    id: 'pebble-watchfaces',
    videoUrl: '',
    summary: '',
  },
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
  // {
  //   id: 'course-registration',
  //   videoUrl: 'https://www.youtube.com/watch?v=VSPCmfE24IE',
  //   summary: '',
  // },
];

export const DetailedProjects: ProjectDetails[] = Projects.map((project) => {
  const extra = ProjectExtras.find((e) => e.id === project.id);
  return {
    ...project,
    videoUrl: extra?.videoUrl || '',
    summary: extra?.summary || '',
  };
});
