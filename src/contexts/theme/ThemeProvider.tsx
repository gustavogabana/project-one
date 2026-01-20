import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

type Props = { children: React.ReactNode };

export function ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const changeTheme = () => setTheme((prev) => prev === "light" ? "dark" : "light") ;

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            { children }
        </ThemeContext.Provider>
    );
}