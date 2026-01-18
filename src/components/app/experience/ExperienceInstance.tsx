import { Experience } from "./ExperienceDisplayer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface ExperienceInstanceProps {
  experience: Experience;
}

export default function ExperienceInstance({
  experience,
}: ExperienceInstanceProps) {
  const bullets = experience.description
    ? experience.description
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.startsWith("•"))
      .map((line) => line.replace(/^•\s*/, ""))
    : [];

  const isCurrent = experience.date.toLowerCase().includes("present");

  return (
    <Card>
      <CardHeader className="space-y-3 pb-4">
        {/* Metadata bar - Date and Current badge */}
        <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
          <time className="font-mono tracking-wide tabular-nums">
            {experience.date}
          </time>
          {isCurrent && (
            <Badge variant="secondary">Current</Badge>
          )}
        </div>

        {/* Company/School with Logo */}
        <div className="flex items-center gap-3">
          <div className="shrink-0 rounded-lg bg-secondary/30 p-1.5 ring-1 ring-border/50">
            <Image
              src={experience.logo}
              alt={experience.title + " logo"}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold leading-tight text-foreground">
              {experience.title}
            </h3>
            <p className="text-sm font-medium text-muted-foreground mt-0.5">
              {experience.type === "work"
                ? experience.position
                : experience.degree}
            </p>
          </div>
        </div>
      </CardHeader>

      {/* Description bullets */}
      {bullets.length > 0 && (
        <CardContent className="pt-0">
          <ul className="space-y-2">
            {bullets.map((bullet, index) => (
              <li
                key={index}
                className="flex gap-2.5 text-sm leading-relaxed text-foreground/90"
              >
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="flex-1">{bullet}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}