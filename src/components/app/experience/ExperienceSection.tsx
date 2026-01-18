import ExperienceDisplayer from "@/components/app/experience/ExperienceDisplayer";
import SkillTag from "@/components/app/experience/SkillTag";
import SectionTitle from "@/components/common/SectionTitle";
import { Technologies } from "./Technologies";

export default function ExperienceSection() {
    return (
        <section
            id="experiences"
            className="flex flex-col mx-auto gap-4 py-4 justify-start items-start w-full h-full"
        >
            <SectionTitle title="Experience" />
            <ExperienceDisplayer />

            <SectionTitle title="Technologies" className="mt-8" />
            <div className="w-full flex flex-row flex-wrap justify-start gap-4">
                {Technologies.map((tech) => (
                    <SkillTag key={tech.label} {...tech} />
                ))}
            </div>
        </section>
    );
}
