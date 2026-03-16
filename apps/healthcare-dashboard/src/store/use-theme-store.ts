import { create } from "zustand";

type ThemeMode = "light" | "dark";

interface ThemeState {
  mode: ThemeMode;
  toggle: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  mode: "light",
  toggle: () =>
    set((state) => ({ mode: state.mode === "light" ? "dark" : "light" })),
}));
