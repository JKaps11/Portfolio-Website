"use client";
import { useState } from "react";
import { MyJobs, MyEducation } from "./Experiences";
import ExperienceInstance from "./ExperienceInstance";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Briefcase, GraduationCap } from "lucide-react";

type DisplayerMode = "work" | "education";

interface ExperienceBase {
    id: string;
    date: string;
    title: string;
    description: string;
    logo: string;
}

export interface WorkExperience extends ExperienceBase {
    type: "work";
    position: string;
}

export interface EducationExperience extends ExperienceBase {
    type: "education";
    degree: string;
}

export type Experience = WorkExperience | EducationExperience;

export default function ExperienceDisplayer() {
    const [mode, setMode] = useState<DisplayerMode>("work");

    return (
        <div className="w-full flex flex-col">
                <ToggleGroup
                    defaultValue="work"
                    onValueChange={(value) => setMode(value as DisplayerMode)}
                    type="single"
                    variant="outline"
                    size="lg"
                    className="w-full"
                >
                    <ToggleGroupItem className="w-1/2" value="work" aria-label="Toggle work">
                        <Briefcase aria-hidden="true" />
                        <p>Work</p>
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        className="w-1/2"
                        value="education"
                        aria-label="Toggle education"
                    >
                        <GraduationCap aria-hidden="true" />
                        <p>Education</p>
                    </ToggleGroupItem>
                </ToggleGroup>
            <div className="flex flex-col w-full gap-4 mt-6">
                {(mode === "work" ? MyJobs : MyEducation).map((exp) => (
                    <ExperienceInstance key={exp.id} experience={exp} />
                ))}
            </div>
        </div>
    );
}
