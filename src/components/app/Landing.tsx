import Image from "next/image";
import { Button } from "../ui/button";
import { MapPin } from "lucide-react";
import fetchIconSvg from "../common/fetchIcon";

const GITHUB_URL = "https://github.com/YOUR_GITHUB_USERNAME";
const LINKEDIN_URL = "https://www.linkedin.com/in/YOUR_LINKEDIN_SLUG/";
const EMAIL_ADDRESS = "your.email@example.com";

export default async function LandingSection() {
    const [githubIcon, linkedinIcon, emailIcon] = await Promise.all([
        fetchIconSvg("github"),
        fetchIconSvg("linkedin"),
        fetchIconSvg("maildotru"), // simpleicons email-ish logo; you can swap if you prefer
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

                <div className="flex justify-start items-center gap-3 my-2">
                    <a
                        href="/Joshua_Kaplan_Resume.pdf"
                        download="Joshua_Kaplan_Resume.pdf"
                    >
                        <Button size="lg" aria-label="Get resume">
                            Resume
                        </Button>
                    </a>
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Open GitHub profile"
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                        >
                            <span
                                className="w-5 h-5"
                                aria-hidden
                                dangerouslySetInnerHTML={{
                                    __html: githubIcon,
                                }}
                            />
                        </Button>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Open LinkedIn profile"
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                        >
                            <span
                                className="w-5 h-5"
                                aria-hidden
                                dangerouslySetInnerHTML={{
                                    __html: linkedinIcon,
                                }}
                            />
                        </Button>
                    </a>

                    {/* Email */}
                    <a
                        href={`mailto:${EMAIL_ADDRESS}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Send me an email"
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                        >
                            <span
                                className="w-5 h-5"
                                aria-hidden
                                dangerouslySetInnerHTML={{
                                    __html: emailIcon,
                                }}
                            />
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
