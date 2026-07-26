"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useHydrated } from "@/hooks/useHydrated";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    // The resolved theme is only known on the client, so render a placeholder
    // until hydration to avoid a mismatch.
    const hydrated = useHydrated();

    if (!hydrated) {
        return (
            <Button variant="ghost" size="icon" className="h-10 w-10" disabled>
                <Sun className="h-5 w-5" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
