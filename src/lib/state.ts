import { atom } from "jotai";

export const COLORS = {
    green: "oklch(72.3% 0.219 149.579)",
    purple: "oklch(62.7% 0.265 303.9)",
} as const;


export const themeColorAtom = atom(COLORS.green);

