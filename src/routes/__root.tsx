import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link 
        to="/posts" 
        search={{ query: "post 1" }}
        className="[&.active]:font-bold">
        Post
      </Link>
      <Link to="/form" className="[&.active]:font-bold">
        Form
      </Link>
      <Link to="/card" className="[&.active]:font-bold">
        Card
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });