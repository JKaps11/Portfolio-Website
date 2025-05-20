// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
import Link from 'next/link';

const NotFoundContent = () => (
  <div className="min-h-[37.5rem] flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-[5rem] font-bold text-white mb-4">404</h1>
    <h2 className="text-2xl text-white font-semibold mb-8">Page Not Found</h2>
    <p className="text-base text-white/80 max-w-md mb-8 leading-relaxed">
      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
    </p>
    <Link href="/">
      <div className="inline-block px-6 py-3 bg-white text-red-600 font-semibold rounded-full shadow-md transition-transform hover:scale-105">
        Back to Home
      </div>
    </Link>
  </div>
);

export default NotFoundContent;
