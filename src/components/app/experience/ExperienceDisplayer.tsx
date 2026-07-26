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
    /** Optional linked document (e.g. a certificate PDF served from /public). */
    credential?: {
        label: string;
        href: string;
    };
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
                    // Base UI models the value as an array even for single
                    // selection; controlled so one option is always active.
                    value={[mode]}
                    onValueChange={(value) => {
                        const next = value[0];
                        if (next) setMode(next as DisplayerMode);
                    }}
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
