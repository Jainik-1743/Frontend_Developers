import { create } from "zustand";

type ThemeMode = "light" | "dark";

interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface ThemeState {
  mode: ThemeMode;
  toggleTheme: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: true,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useThemeStore = create<ThemeState>((set) => ({
  mode: "light",
  toggleTheme: () =>
    set((state) => ({ mode: state.mode === "light" ? "dark" : "light" })),
}));
