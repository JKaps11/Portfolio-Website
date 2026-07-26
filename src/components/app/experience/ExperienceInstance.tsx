import { Experience } from "./ExperienceDisplayer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

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
          {/* size-10 pins both dimensions against Tailwind preflight's
              `height: auto` on img, which otherwise leaves non-square logos
              with a rendered height that disagrees with the width/height
              props. object-contain letterboxes them without distortion. */}
          <div className="shrink-0 flex size-13 items-center justify-center rounded-lg bg-secondary/30 p-1.5 ring-1 ring-border/50">
            <Image
              src={experience.logo}
              alt={experience.title + " logo"}
              width={40}
              height={40}
              className="size-10 object-contain"
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

      {/* Description bullets and any linked credential */}
      {(bullets.length > 0 || experience.credential) && (
        <CardContent className="pt-0 space-y-4">
          {bullets.length > 0 && (
            <ul className="space-y-2">
              {bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="flex gap-2.5 text-sm leading-relaxed text-foreground/90"
                >
                  {/* Wrapper matches leading-relaxed's line height so the dot
                      centers on the first line of text at any font size. */}
                  <span
                    className="flex h-[1.625em] shrink-0 items-center"
                    aria-hidden="true"
                  >
                    <span className="size-1 rounded-full bg-primary" />
                  </span>
                  <span className="flex-1">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Opens in a new tab so the browser's built-in PDF viewer handles it */}
          {experience.credential && (
            <a
              href={experience.credential.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <FileText className="size-4" aria-hidden="true" />
              {experience.credential.label}
            </a>
          )}
        </CardContent>
      )}
    </Card>
  );
}