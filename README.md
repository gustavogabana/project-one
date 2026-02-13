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

## Added TanStack Router

Added TanStack Router v1 Lib used for routing on React/Vite apps.

### Index Routes

Index routes are file-routes that needs to have a index.tsx file in it to be referenced on the routing. If a route that is a file doesn't have the index.tsx file, that route extactly can't be accessed, but other routes (files .tsx such as example.tsx) can.

### Layout Routes

If a dir (file-route) have two or more children routes (files that are not the index.tsx file) and they need to have a common ground for whatever reason, a layout route (a route.tsx file) can be created and whatever is in it will be shown (that's why it's called layout route) in all the children routes. For this route to work, it need to be called route.tsx and it need to render the ```html <Oulet />``` component.

## Added TanStack Query

Added TanStack Query v^5.9.2 as data-fetching lib.

## Added TanStack Virtual

Added TanStack Virtual ^3.13.18 to create the infinite feed using virtualization.
To virtualize a particular div, use useVirtualizer. To virtualize the whole HTML page, use useWindowVirtualizer.

## Added React Hook Form + Zod

Added RHF + Zod + Resolvers to create and manage forms.

```bash
npm instal react-hook-form zod @hookform/resolvers
```

## Added Zustand

Added Zustand v^5.0.11 to use as the main state management solution to replace native context api.

## Added DaisyUI

Added DaisyUI v5.5.14 as main UI lib.

## Configurations

Disabled css.lint.unknownAtRules on VSCode.

## CI / Pipeline

This project includes a GitHub Actions workflow at `.github/workflows/pipeline.yaml` that performs basic validation and a simulated deploy. Summary of the workflow:

- Name: `Basic Pipeline`
- Triggers: `push` to `develop` and `main`, and `pull_request` targeting `main`.
- Jobs:
  - `basic-checkout`: displays environment info and checks out the repo.
  - `verificate`: runs an HTML5 validator action and uploads validation logs on failure.
  - `deploy`: a simulated deploy job that runs only on `main` after validation succeeds.

Key notes:

- The validator step uses `Cyb3r-Jak3/html5validator-action@v7.2.0` and is configured to check HTML and CSS (CSS check can be toggled).
- The pipeline currently simulates a deploy by preparing a `deploy_folder` rather than performing a real production deployment — you can extend it to publish to GitHub Pages or another host.

If you want, I can:

- Add build and test steps to the pipeline (install dependencies, run `npm run build`, run a test suite).
- Replace the simulated deploy with a real deployment (GitHub Pages, Netlify, Vercel) and add secrets handling.

## Notable Recent Changes

This section captures recent code changes and improvements discovered while scanning the project.

- Virtual feed and data fetching
  - `src/queryOptions/createDataQueryOptions.ts` now accepts an optional `limit` parameter (default: 1000) and includes `limit` in the query key to avoid loading the entire upstream dataset into memory.
  - `src/components/Virtual.tsx` uses `createDataQueryOptions(500)` to cap the initial feed and improve load/memory behavior. The component now renders a user-friendly empty state and guards the translate offset calculation to avoid runtime errors when the virtual items list is empty.

- Robustness and UX
  - `src/components/Navbar.tsx` provides a fallback value `dev` for `import.meta.env.VITE_APP_VERSION`, so the UI won't display `undefined` when the env var is missing.
  - `src/queryOptions/createTodoQueryOptions.ts` exposes `enabled` so queries can be run lazily, and uses `placeholderData` and longer `staleTime` to reduce unnecessary background refetches.

- CI / Pipeline
  - `.github/workflows/pipeline.yaml` (Basic Pipeline) was added/updated: it runs a quick checkout & environment display, runs an HTML5 validator, and includes a simulated deploy job that prepares artifacts in a `deploy_folder`. The validator step uploads logs on failure for debugging.

- Small dev ergonomics
  - `src/components/Virtual.tsx` adds a loading screen with a spinner and a clear message while API data is fetched.
  - Various files use TanStack libraries (`react-query`, `react-virtual`, `react-router`) with file-based route conventions under `src/routes`.
