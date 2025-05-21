import { Experience } from "./ExperienceDisplayer";

interface ExperienceInstanceProps {
  experience: Experience;
}

export default function ExperienceInstance({ experience }: ExperienceInstanceProps) {
  return (
    <div className="flex flex-col space-y-2 text-white pl-[20px]">
      <p className="text-sm text-gray-400 tracking-wide">{experience.date}</p>
      <p className="text-lg font-semibold leading-tight">{experience.title}</p>
      <p className="italic font-light text-gray-300">
        {experience.type === "work" ? experience.position : experience.degree}
      </p>
      <p className="text-sm text-gray-200 leading-relaxed whitespace-pre-line">
        {experience.description}
      </p>
    </div>
  );
}