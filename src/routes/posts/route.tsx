import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/posts")({
    component: () => (
        <div>
            <h1>Seção de Posts</h1>
            <hr />
            <Outlet /> {/* dynamic content*/}
        </div>
    )
});