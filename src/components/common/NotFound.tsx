// Copyright (c) 2025 Joshua Kaplan – Licensed under MIT
import Link from "next/link";
import { Button } from "../ui/button";

const NotFoundContent = () => (
    <div className="min-h-[37.5rem] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-[5rem] font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl text-white font-semibold mb-8">
            Page Not Found
        </h2>
        <p className="text-base text-white/80 max-w-md mb-8 leading-relaxed">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
        </p>
        <Link href="/">
            <Button>Back to Home</Button>
        </Link>
    </div>
);

export default NotFoundContent;
