import { EducationExperience, WorkExperience } from "./ExperienceDisplayer";

export const MyJobs: WorkExperience[] = [
  {
    type: "work",
    id: "job-1",
    date: "Mar 2025 - Present",
    title: "Syndata",
    position: "Developer",
    description: `• Built and styled core frontend features including the Accounts page, Settings modal, and Sidebar using React, Ant Design, CSS, and Tailwind
• Designed and implemented a scalable Redux schema to manage hierarchical settings data across the application
• Collaborated with a small team using Jira and Slack in an Agile environment to iterate quickly on UI/UX feedback and meet sprint goals`,
    logo: "Syndata.svg"
  },
  {
    type: "work",
    id: "job-2",
    date: "Aug 2024 - Dec 2024",
    title: "University of Connecticut – Storrs, CT",
    position: "Teaching Assistant",
    description: `• Collaborated with faculty and fellow TAs to refine curriculum and ensure student success
• Supported 100+ students in mastering C++ and object-oriented programming through personalized instruction and debugging help
• Held weekly office hours, created learning resources, and guided students through coding assignments`,
    logo: "/husky.jpeg"
  },
  {
    type: "work",
    id: "job-3",
    date: "Jun 2023 - Aug 2023",
    title: "iD Tech Camps – Middletown, CT",
    position: "Counselor, Teacher",
    description: `• Effectively communicated and organized camp procedures to ensure safety of over 40 campers
• Provided 1-on-1 debugging support and led hands-on coding sessions that increased student engagement
• Taught Java and object-oriented programming using Minecraft Forge mods to middle and high school students`,
    logo: "/iDTech.jpg"
  },
  {
    type: "work",
    id: "job-4",
    date: "Jun 2022 - Aug 2022",
    title: "Crum & Forster – Glastonbury, CT",
    position: "Intern",
    description: ``,
    logo: "/CrumForsterLogo.jpg"
  }
];

export const MyEducation: EducationExperience[] = [
  {
    type: "education",
    id: "edu-1",
    date: "August 2021 - May 2025",
    title: "University of Connecticut",
    degree: "Bachelor of Science in Engineering, Computer Science and Engineering, Mathematics Minor",
    description: "",
    logo: "husky.jpeg"
  },
  {
    type: "education",
    id: "edu-2",
    date: "August 2016 - June 2020",
    title: "Sheehan High School",
    degree: "Diploma",
    description: "",
    logo: "Sheehan.png"
  }
];
