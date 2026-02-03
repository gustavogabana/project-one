import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/posts")({
    component: () => (
        <div>
            <h1 className="mb-1.5">Seção de Posts</h1>
            <hr />
            <Outlet /> 
            {/* dynamic content, renders the content of index.tsx file inside this same dir */}
        </div>
    )
});