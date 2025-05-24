export type Technology =
  | 'React'
  | 'TypeScript'
  | 'Node.js'
  | 'Python'
  | 'FastAPI'
  | 'Vue'
  | 'Next.js'
  | 'Rust'
  | 'Go'
  | 'Expo'
  | 'React Native'
  | 'JavaScript'
  | 'Express'
  | 'MongoDB';

export interface TechColor {
  bgColor: string;
  textColor: string;
}

export const TECH_COLORS: Record<Technology, TechColor> = {
  React:         { bgColor: 'bg-red-100', textColor: 'text-red-700' },
  TypeScript:    { bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
  'Node.js':     { bgColor: 'bg-gray-100', textColor: 'text-gray-700' },
  Python:        { bgColor: 'bg-yellow-100', textColor: 'text-yellow-800' },
  FastAPI:       { bgColor: 'bg-green-100', textColor: 'text-green-700' },
  Vue:           { bgColor: 'bg-emerald-100', textColor: 'text-emerald-700' },
  'Next.js':     { bgColor: 'bg-black', textColor: 'text-white' },
  Rust:          { bgColor: 'bg-orange-100', textColor: 'text-orange-800' },
  Go:            { bgColor: 'bg-cyan-100', textColor: 'text-cyan-800' },
  Expo:          { bgColor: 'bg-indigo-100', textColor: 'text-indigo-700' },
  'React Native':{ bgColor: 'bg-purple-100', textColor: 'text-purple-700' },
  JavaScript:    { bgColor: 'bg-yellow-100', textColor: 'text-yellow-900' },
  Express:       { bgColor: 'bg-stone-100', textColor: 'text-stone-700' },
  MongoDB:       { bgColor: 'bg-green-50', textColor: 'text-green-800' },
};


interface TechTagsProps {
  technologies: Technology[];
}

export default function TechTags({ technologies }: TechTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 text-xs">
      {technologies.map((tech) => {
        const color = TECH_COLORS[tech];

        return (
          <span
            key={tech}
            className={`px-2 py-1 rounded-md font-medium ${color.bgColor} ${color.textColor}`}
          >
            {tech}
          </span>
        );
      })}
    </div>
  );
}
