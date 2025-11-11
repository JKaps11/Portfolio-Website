"use client";
import { useState } from "react";
import { MyJobs, MyEducation } from "./Experiences";
import ExperienceInstance from "./ExperienceInstance";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Briefcase, GraduationCap } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

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
                <ToggleGroupItem value="work" aria-label="Toggle work">
                    <Briefcase onClick={() => setMode("work")} />
                    <p>Work</p>
                </ToggleGroupItem>
                <ToggleGroupItem
                    value="education"
                    aria-label="Toggle education"
                >
                    <GraduationCap onClick={() => setMode("education")} />
                    <p>Education </p>
                </ToggleGroupItem>
            </ToggleGroup>
            <div className="flex flex-col w-full gap-8 mt-4">
                {(mode === "work" ? MyJobs : MyEducation).map((exp) => (
                    <div key={exp.id} className="flex items-center">
                        <div
                            style={{
                                backgroundColor: "var(--color-secondary)",
                            }}
                            className="relative  p-1 rounded-full shadow-md"
                        >
                            <Avatar>
                                <AvatarImage
                                    height={550}
                                    width={550}
                                    src={exp.logo}
                                />
                            </Avatar>
                        </div>
                        <ExperienceInstance experience={exp} />
                    </div>
                ))}
            </div>
        </div>
    );
}
