"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

const NAV_ITEMS = [
    { id: "experiences", label: "Experiences" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
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

export default function NavBar() {
    const isMobile = useIsMobile();
    const activeId = useSectionSpy(NAV_ITEMS.map((x) => x.id));

    const linkClass = useMemo(
        () =>
            "h-10 px-5 flex items-center justify-center text-sm font-medium transition-colors " +
            "text-muted-foreground hover:text-foreground hover:bg-accent/60 " +
            "data-[active=true]:bg-accent data-[active=true]:text-accent-foreground ",
        [],
    );

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
            e.preventDefault();
            const el = document.getElementById(id);
            if (!el) return;
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            history.replaceState(null, "", `#${id}`);
        },
        [],
    );

    return (
        <div className="sticky top-4 z-50 flex w-full justify-center ">
            <NavigationMenu
                viewport={isMobile}
                className=" overflow-hidden border bg-background/80 p-1 shadow-sm "
            >
                <NavigationMenuList>
                    {NAV_ITEMS.map(({ id, label }) => (
                        <NavigationMenuItem key={id}>
                            <NavigationMenuLink asChild>
                                <a
                                    href={`#${id}`}
                                    onClick={(e) => handleClick(e, id)}
                                    className={linkClass}
                                    data-active={activeId === id}
                                    aria-current={
                                        activeId === id ? "page" : undefined
                                    }
                                >
                                    {label}
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
