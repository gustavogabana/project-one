# React + TypeScript + Vite + Tailwind

Project created through Vite using the React + TS template:

```bash
npm create vite@latest project-one -- --template react-ts
```

## Added Tailwind

Project has Tailwind, version ^4.1.18, no config file.

## Context API: Context, Provider, custom hook

Create an XContext.tsx file that defines and exports the context using React’s createContext API. The context should be initialized with undefined to allow validation that it is being used correctly within its provider.

Create an XProvider.tsx file that implements the provider logic. The XProvider receives a ReactNode as its children prop, contains the functions and business logic related to the specific context, and passes this data through the value prop of XContext.Provider, which wraps the children.

```ts
export function AuthProvider({ children }: { children: React.ReactNode }) {
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
```

Create a useX.ts file that encapsulates de use of the context, as good practice.

Wraps the App component in main.tsx so that the data stored in the context is available throughout the application. If global access is not required, wrap only the components that need access to the context.

## Configurations

Disabled css.lint.unknownAtRules on VSCode.
