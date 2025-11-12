"use client";

import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
    githubIcon: string;
    linkedinIcon: string;
    emailIcon: string;
};

const GITHUB_URL = "https://github.com/JKaps11";
const LINKEDIN_URL = "https://www.linkedin.com/in/joshua-kaplan-a88315245";
const EMAIL_ADDRESS = "kapsjosh11@gmail.com";

const iconButtonClass = "";
const iconSpanClass = "w-10 h-10 flex items-center justify-center";

export default function SocialIcons({
    githubIcon,
    linkedinIcon,
    emailIcon,
}: Props) {
    return (
        <TooltipProvider>
            <div className="flex justify-start items-center gap-5 my-2">
                <a
                    href="/Joshua_Kaplan_Resume.pdf"
                    download="Joshua_Kaplan_Resume.pdf"
                >
                    <Button size="lg" aria-label="Get resume">
                        Resume
                    </Button>
                </a>

                <Tooltip>
                    <TooltipTrigger className={iconButtonClass}>
                        <a
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Open GitHub profile"
                        >
                            <span
                                className={iconSpanClass}
                                aria-hidden
                                dangerouslySetInnerHTML={{ __html: githubIcon }}
                            />
                        </a>
                    </TooltipTrigger>
                    <TooltipContent>{GITHUB_URL}</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger className={iconButtonClass}>
                        <a
                            href={LINKEDIN_URL}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Open LinkedIn profile"
                        >
                            <span
                                className={iconSpanClass}
                                aria-hidden
                                dangerouslySetInnerHTML={{
                                    __html: linkedinIcon,
                                }}
                            />
                        </a>
                    </TooltipTrigger>
                    <TooltipContent>{LINKEDIN_URL}</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger className={iconButtonClass}>
                        <a
                            href={`mailto:${EMAIL_ADDRESS}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Send me an email"
                        >
                            <span
                                className={iconSpanClass}
                                aria-hidden
                                dangerouslySetInnerHTML={{ __html: emailIcon }}
                            />
                        </a>
                    </TooltipTrigger>
                    <TooltipContent>{EMAIL_ADDRESS}</TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    );
}
