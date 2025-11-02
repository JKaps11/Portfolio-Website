import ExperienceDisplayer from "@/components/app/experience/ExperienceDisplayer";
import SkillTag from "@/components/app/experience/SkillTag";
import { Technologies } from "@/components/app/experience/Technologies";
import { Separator } from "@/components/ui/separator";

export default function ExperienceSection() {
  return (
    <div className="flex flex-col mx-auto gap-4 py-4 justify-start items-start w-full h-full">
      <h2>Experience</h2>
      <Separator decorative />
      <ExperienceDisplayer />
      <h2>Tech Stack</h2>
      <Separator decorative />
      <div className="w-full flex flex-row flex-wrap justify-start gap-4 justify-center">
        {Technologies.map((tech) => (
          <SkillTag key={tech.label} {...tech} />
        ))}
      </div>
    </div>
  );
}
