import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/BrandIcons";
// Resume download disabled - the Button import is only needed by the
// commented-out resume link below.
// import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const GITHUB_URL = "https://github.com/JKaps11";
const LINKEDIN_URL = "https://www.linkedin.com/in/joshua-kaplan-a88315245";
const EMAIL_ADDRESS = "kapsjosh11@gmail.com";

// size-10 keeps the icon row at the same 40px height the Resume button used.
// Light mode keeps the default navy-chip/white-icon look from --primary.
// Dark mode is pinned to a white chip with the (fixed) navy mark instead of
// letting --primary invert to a white-chip/near-black-icon look.
const iconBtn =
    "bg-primary text-primary-foreground dark:bg-[var(--icon-chip-bg)] dark:text-[var(--icon-chip-fg)] group inline-flex items-center justify-center rounded-xl ring-1 ring-border hover:ring-border/80 hover:opacity-90 transition-colors size-10 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

interface IconButton {
    link: string;
    ariaLabel: string;
    Icon: typeof Mail | typeof GithubIcon;
    tooltipText: string;
}

// One monochrome icon set inheriting currentColor, so the glyphs read against
// the navy chip and stay consistent with each other in both themes.
const iconButtons: IconButton[] = [
    {
        link: GITHUB_URL,
        ariaLabel: "Open GitHub profile",
        Icon: GithubIcon,
        tooltipText: "Github Profile",
    },
    {
        link: LINKEDIN_URL,
        ariaLabel: "Open LinkedIn profile",
        Icon: LinkedinIcon,
        tooltipText: "LinkedIn Profile",
    },
    {
        link: `mailto:${EMAIL_ADDRESS}?subject=Contact%20from%20Portfolio%20Website`,
        ariaLabel: "Send me an email",
        Icon: Mail,
        tooltipText: EMAIL_ADDRESS,
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
                    <div className="flex justify-start items-center gap-4 my-2">
                        {/* Resume download disabled.
                        <Button
                            size="lg"
                            className="h-10 px-4"
                            nativeButton={false}
                            render={
                                <a
                                    href="/Joshua_Kaplan_Resume.pdf"
                                    download="Joshua_Kaplan_Resume.pdf"
                                />
                            }
                        >
                            Resume
                        </Button>
                        */}

                        <div className="flex items-center gap-1.5">
                            {iconButtons.map(({ link, ariaLabel, Icon, tooltipText }) => (
                                <Tooltip key={link}>
                                    <TooltipTrigger
                                        render={
                                            <a
                                                href={link}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                aria-label={ariaLabel}
                                                className={iconBtn}
                                            />
                                        }
                                    >
                                        <Icon aria-hidden size={22} />
                                    </TooltipTrigger>
                                    <TooltipContent>{tooltipText}</TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    </div>
                </TooltipProvider>
            </div>
        </div>
    );
}
