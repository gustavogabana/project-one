import { createContext } from "react";

type Theme = {
    theme: "light" | "dark";
    changeTheme: () => void;
};

export const ThemeContext = createContext<Theme | undefined>(undefined);