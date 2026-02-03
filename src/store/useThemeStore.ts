import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  changeTheme: () => void; // Action to toggle and update DOM/LocalStorage
}

export const useThemeStore = create<ThemeState>()(
  /* The 'persist' middleware automatically handles LocalStorage.
     It replaces your manual localStorage.setItem and initial state loading.
  */
  persist((set, get) => ({
      theme: "light",
      changeTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === "light" ? "dark" : "light";

        // Update the React State
        set({ theme: newTheme });

        // Sync with HTML element for Tailwind dark: classes
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(newTheme);

        /* TODO: API call
           await api.updateUserPreferences({ theme: newTheme });
        */
      },
    }),
    {
      name: "theme-storage", // Key name in LocalStorage
    }
  )
);