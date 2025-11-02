// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
import LandingSection from '@/components/app/Landing';
import ExperienceSection from '../components/app/experience/ExperienceSection';
import ProjectSection from '@/components/app/projects/ProjectSection';

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8">
      <LandingSection />
      <ExperienceSection />
      <ProjectSection />
    </div>
  )
}
