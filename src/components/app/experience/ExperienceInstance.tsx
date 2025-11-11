import { Experience } from "./ExperienceDisplayer";

interface ExperienceInstanceProps {
  experience: Experience;
}

export default function ExperienceInstance({ experience }: ExperienceInstanceProps) {
  return (
    <div className="flex flex-col space-y-2 pl-[30px]">
      <p className="text-sm tracking-wide">{experience.date}</p>
      <p className="text-lg font-semibold leading-tight">{experience.title}</p>
      <p className="italic font-light ">
        {experience.type === "work" ? experience.position : experience.degree}
      </p>
      <p className="text-sm leading-relaxed whitespace-pre-line">
        {experience.description}
      </p>
    </div>
  );
}