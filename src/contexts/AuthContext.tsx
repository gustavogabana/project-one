import { createContext } from "react";

export type User = {
    id: string;
    name: string;
    email: string;
};

type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string) => void;
    logout: () => void;
}

// starts undefined for satefy purposes (detect if the context its used outside the provider)
export const AuthContext = createContext<AuthContextType | undefined>(undefined);