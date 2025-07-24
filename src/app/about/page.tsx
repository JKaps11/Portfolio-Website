import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-16">
      <div className="text-white text-lg leading-relaxed relative">
        {/* Avatar floated left */}
        <div className="hidden md:block relative float-left w-0 h-60 md:w-60 md:h-60 rounded-full border-4 border-white shadow-lg overflow-hidden mr-6 mb-4">
         <Image
            src="/josh2.jpg"
            alt="Joshua Kaplan"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p>
          Hi, my name is Joshua Kaplan. I'm a fullstack developer who started coding at the age of 12 and stuck with it because I love exploring the complexities of computers.
        </p>

        <br />

        <p>
          I recently graduated from the University of Connecticut with a degree in computer science and engineering, concentrating in software engineering. Through my projects, I've become proficient in web development—specializing in React, TypeScript, and Python.
        </p>

        <br />

        <p>
          When I'm not programming, I like to play sports, read, study history and philosophy, and cook. If you would like to meet, send me an email, and we can schedule a meeting!
        </p>
      </div>
    </div>
  );
}
