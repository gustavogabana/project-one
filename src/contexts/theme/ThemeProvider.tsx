import { useEffect, useState } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

type Props = { children: React.ReactNode };

export function ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
    }, [theme]);

    const changeTheme = async () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);

        // TODO: API call
        // await api.updateUserPreferences({ theme: newTheme });
        localStorage.setItem("theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            { children }
        </ThemeContext.Provider>
    );
}