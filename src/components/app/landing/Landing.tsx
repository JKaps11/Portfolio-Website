import Image from "next/image";
import { MapPin } from "lucide-react";
import fetchIconSvg from "@/components/common/fetchIcon";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const GITHUB_URL = "https://github.com/JKaps11";
const LINKEDIN_URL = "https://www.linkedin.com/in/joshua-kaplan-a88315245";
const EMAIL_ADDRESS = "kapsjosh11@gmail.com";

const iconButtonClass = "";
const iconSpanClass = "w-10 h-10 flex items-center justify-center";

export default async function LandingSection() {
    const [githubIcon, linkedinIcon, emailIcon] = await Promise.all([
        fetchIconSvg("github/fff"),
        fetchIconSvg("linkedin"),
        fetchIconSvg("gmail"),
    ]);
    return (
        <div
            id="contact"
            className="w-full flex lg:flex-row flex-col flex-1 my-12 justify-around items-center"
        >
            <div
                className="w-65 h-65 rounded-full border-10 overflow-hidden shadow-md transition-all duration-300"
                style={{
                    borderColor: "var(--color-secondary)",
                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                    transform: "scale(1.02)",
                }}
            >
                <Image
                    src="/josh.jpg"
                    alt="Joshua Kaplan"
                    fill
                    className="object-cover rounded-full"
                    priority
                />
            </div>
            <div className="subtitle flex flex-col">
                <h1>Joshua Kaplan</h1>
                <p className="leading-[1.2]">Full Stack Developer</p>
                <p className="location flex items-center gap-2">
                    <MapPin aria-hidden />
                    Connecticut, USA
                </p>

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
                                        dangerouslySetInnerHTML={{
                                            __html: githubIcon,
                                        }}
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
                                        dangerouslySetInnerHTML={{
                                            __html: emailIcon,
                                        }}
                                    />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>{EMAIL_ADDRESS}</TooltipContent>
                        </Tooltip>
                    </div>
                </TooltipProvider>
            </div>
        </div>
    );
}
