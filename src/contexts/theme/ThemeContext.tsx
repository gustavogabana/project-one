import { createContext } from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);