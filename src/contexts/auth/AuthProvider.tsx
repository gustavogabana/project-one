import { useState } from "react";
import { AuthContext } from "./AuthContext";
import type { User } from "./AuthContext";

type Props = { children: React.ReactNode };

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<User | null>(null);

    const login = (email: string) => {
        const mockUser: User = {
            id: "1",
            name: "React dev",
            email
        };

        setUser(mockUser);
    }

    const logout = () => setUser(null);

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}