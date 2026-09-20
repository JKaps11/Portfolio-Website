"use client";

import { useCallback, useEffect, useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { id: "contact", label: "Contact" },
    // { id: "current", label: "Current" },
    { id: "experiences", label: "Experiences" },
    { id: "projects", label: "Projects" },
];

function useSectionSpy(ids: string[], rootMargin = "-40% 0px -50%") {
    const [activeId, setActiveId] = useState<string | null>(null);
    useEffect(() => {
        const els = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];
        if (!("IntersectionObserver" in window) || els.length === 0) return;
        const io = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio,
                    )[0];
                if (visible?.target?.id) setActiveId(visible.target.id);
            },
            { root: null, rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] },
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [ids, rootMargin]);
    return activeId;
}

const linkClass =
    "h-10 px-5 flex items-center justify-center text-sm font-medium transition-colors " +
    "text-muted-foreground hover:text-foreground hover:bg-accent/60 " +
    "data-[nav-active=true]:bg-accent data-[nav-active=true]:text-accent-foreground ";

export default function NavBar() {
    const activeId = useSectionSpy(NAV_ITEMS.map((x) => x.id));

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
            e.preventDefault();
            const el = document.getElementById(id);
            if (!el) return;
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;
            el.scrollIntoView({
                behavior: prefersReducedMotion ? "instant" : "smooth",
                block: "start",
            });
            history.replaceState(null, "", `#${id}`);
        },
        [],
    );

    return (
        <div className="sticky top-4 z-50 flex w-full justify-center">
            <div className="flex items-center gap-2 rounded-lg border bg-background/80 p-1 shadow-sm backdrop-blur-sm">
                <NavigationMenu>
                    <NavigationMenuList>
                        {NAV_ITEMS.map(({ id, label }) => (
                            <NavigationMenuItem key={id}>
                                <NavigationMenuLink
                                    className={cn(
                                        linkClass,
                                        "hover:bg-transparent focus:bg-transparent data-active:bg-transparent",
                                    )}
                                    render={
                                        <a
                                            href={`#${id}`}
                                            onClick={(e) => handleClick(e, id)}
                                            data-nav-active={activeId === id}
                                            aria-current={
                                                activeId === id
                                                    ? "page"
                                                    : undefined
                                            }
                                        />
                                    }
                                >
                                    {label}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="h-6 w-px bg-border" />
                <ThemeToggle />
            </div>
        </div>
    );
}
