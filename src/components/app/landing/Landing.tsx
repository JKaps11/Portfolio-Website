import Image from "next/image";
import { MapPin } from "lucide-react";
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

const iconBtn =
    "bg-primary group inline-flex items-center justify-center rounded-xl ring-1 ring-border hover:ring-border/80 hover:bg-primary/90 transition-colors p-2";

interface IconButton {
    link: string;
    ariaLabel: string;
    imgSrc: string;
    imgSrcDark?: string;
    tooltipText: string;
}

const iconButtons: IconButton[] = [
    {
        link: GITHUB_URL,
        ariaLabel: "Open GitHub profile",
        // imgSrc: "/githubWhite.svg",
        imgSrc: "/githubBlack.svg",
        tooltipText: "Github Profile",
    },
    {
        link: LINKEDIN_URL,
        ariaLabel: "Open LinkedIn profile",
        imgSrc: "/linkedin.svg",
        tooltipText: "LinkedIn Profile",
    },
    {
        link: `mailto:${EMAIL_ADDRESS}?subject=Contact%20from%20Portfolio%20Website`,
        ariaLabel: "Send me an email",
        imgSrc: "/gmail.svg",
        tooltipText: "kapsjosh11@gmail.com",
    },
];


export default function LandingSection() {
    return (
        <div
            id="contact"
            className="w-full flex lg:flex-row flex-col flex-1 my-12 justify-around items-center"
        >
            <div className="relative w-65 h-65 rounded-full ring-[10px] ring-border overflow-hidden shadow-lg transition-all duration-300">

                <Image
                    src="/josh.jpg"
                    alt="Joshua Kaplan"
                    fill
                    quality={75}
                    className="object-cover rounded-full"
                    sizes="60"
                    priority
                />
            </div>

            <div className="subtitle flex flex-col">
                <h1>Joshua Kaplan</h1>
                <p className="leading-[1.2] text-muted-foreground">Full Stack Developer</p>
                <p className="location flex items-center gap-2 text-muted-foreground">
                    <MapPin aria-hidden size={20} />
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

                        {iconButtons.map((button) => (
                            <Tooltip key={button.link}>
                                <TooltipTrigger asChild>
                                    <a
                                        href={button.link}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label={button.ariaLabel}
                                        className={iconBtn}
                                    >
                                        <Image
                                            src={button.imgSrc}
                                            alt=""
                                            width={24}
                                            height={24}
                                            priority
                                        />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent >{button.tooltipText}</TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </TooltipProvider>
            </div>
        </div>
    );
}
