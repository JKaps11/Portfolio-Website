import { useEffect, useState } from "react";

export function useIsMobile(breakpoint: number = 768): boolean | undefined {
    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
        setIsMobile(mql.matches);

        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mql.addEventListener("change", handler, { passive: true });
        return () => mql.removeEventListener("change", handler);
    }, [breakpoint]);

    return isMobile;
}
