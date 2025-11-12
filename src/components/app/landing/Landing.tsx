import Image from "next/image";
import { MapPin } from "lucide-react";
import fetchIconSvg from "@/components/common/fetchIcon";
import { Button } from "@/components/ui/button";
import SocialIcons from "./SocialIcons";

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

                <SocialIcons
                    githubIcon={githubIcon}
                    linkedinIcon={linkedinIcon}
                    emailIcon={emailIcon}
                />
            </div>
        </div>
    );
}
