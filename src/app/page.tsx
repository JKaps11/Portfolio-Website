// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
import LandingSection from "@/components/app/Landing";
import ExperienceSection from "../components/app/experience/ExperienceSection";
import ProjectSection from "@/components/app/projects/ProjectSection";
import NavBar from "@/components/common/NavBar";

export default function HomePage() {
    return (
        <>
            <NavBar />
            <div className=" xl:w-[75%] 2xl:w-[50%] w-full flex-1 flex flex-col mt-8 gap-8 items-center justify-center mx-auto px-4 sm:px-8">
                <LandingSection />
                <ExperienceSection />
                <ProjectSection />
            </div>
        </>
    );
}
