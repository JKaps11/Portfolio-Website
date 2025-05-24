import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="relative w-48 h-48 rounded-full border-[6px] border-white shadow-lg overflow-hidden">
          <Image
            src="/josh.jpg"
            alt="Joshua Kaplan"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex-1 space-y-4">
          <p className="text-lg leading-snug">
            Full-stack developer focused on creating clean, performant, and intuitive web and mobile apps.
            I love solving hard problems and building tools that actually help people.
          </p>
          
        </div>
      </section>
    </div>
  );
}
