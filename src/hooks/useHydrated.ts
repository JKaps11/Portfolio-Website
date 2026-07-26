import { useSyncExternalStore } from "react";

// Never changes, so the store never notifies; the value flips purely because
// the server and client snapshots differ.
const emptySubscribe = () => () => {};

/**
 * False during SSR and the hydration render, true afterwards.
 *
 * Replaces the `useState(false)` + `useEffect(() => setMounted(true))` pattern,
 * which triggers an extra render pass.
 */
export function useHydrated(): boolean {
    return useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false,
    );
}
