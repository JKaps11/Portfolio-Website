import {
    siClaudecode,
    siCss,
    siFastapi,
    siHtml5,
    siJavascript,
    siNestjs,
    siNextdotjs,
    siPython,
    siReact,
    siRedux,
    siTailwindcss,
    siTanstack,
    siTypescript,
} from "simple-icons";
import { TechIconProps } from "./SkillTag";

export const Technologies: TechIconProps[] = [
    { icon: siReact, label: "React" },
    { icon: siNextdotjs, label: "Next.js" },
    { icon: siReact, label: "React Native" },
    { icon: siRedux, label: "Redux" },
    { icon: siTanstack, label: "TanStack" },
    { icon: siTypescript, label: "TypeScript" },
    { icon: siJavascript, label: "JavaScript" },
    { icon: siNestjs, label: "Nest.js" },
    { icon: siPython, label: "Python" },
    { icon: siFastapi, label: "FastAPI" },
    { icon: siHtml5, label: "HTML5" },
    { icon: siCss, label: "CSS" },
    { icon: siTailwindcss, label: "Tailwind CSS" },
    { icon: siClaudecode, label: "Claude Code" },
    // Simple Icons carries no Kiro entry, so it ships as a local asset.
    { src: "/kiro.svg", label: "Kiro" },
];
