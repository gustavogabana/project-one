import { Link } from "@tanstack/react-router";

type Query = {
    query: string;
};

type NavLink = {
    to: string;
    label: string;
    search?: Query;
};

function Navbar() {
    const links: NavLink[] = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/posts", label: "Posts", search: { query: "" } },
        { to: "/virtual", label: "Virtual Feed" },
    ];

    return (
        /* DaisyUI: navbar is a flexbox container with start, center, and end sections */
        <nav className="navbar bg-base-100 border-b border-base-200 px-4 md:px-8">

            {/* LEFT SIDE: LOGO AND MOBILE MENU */}
            <div className="navbar-start">
                <div className="dropdown">
                    {/* DaisyUI: hamburguer button (visible only on mobile via lg:hidden) */}
                    {/* Accessibility: tabIndex 0 allows keyboard navigation */}
                    <div 
                        tabIndex={0} 
                        role="button" 
                        className="btn btn-ghost lg:hidden p-0 mr-2"
                        aria-label="Open menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    {/* DaisyUI: mobile dropdown content. Added z-[50] to stay above virtualized lists */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
                        {links.map((link) => (
                            <li key={link.to}>
                                {/* TanStack: Active state handled via [&.active] selector */}
                                <Link 
                                    to={link.to} 
                                    search={link.search}
                                    className="[&.active]:text-primary [&.active]:font-bold"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Logo with tracking-tight for a modern professional look */}
                <Link to="/" className="text-xl font-black tracking-tight hover:opacity-80 transition-opacity">
                    PRO<span className="text-primary">FEED</span>
                </Link>
            </div>

            {/* CENTER: DESKTOP NAVIGATION LINKS */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                {links.map((link) => (
                    <li key={link.to}>
                        {/* TanStack: Automatic route matching for active styles */}
                        {/* DaisyUI: font-medium for better readability in desktop headers */}
                        <Link
                            to={link.to}
                            search={link.search}
                            className="[&.active]:bg-primary/10 [&.active]:text-primary font-medium transition-all"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
                </ul>
            </div>

            {/* RIGHT SIDE: ACTION BUTTONS */}
            <div className="navbar-end gap-2">
                {/* DaisyUI: btn-circle for icon-only buttons */}
                <button className="btn btn-ghost btn-circle btn-sm" aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                
                {/* Zustand: This button will later trigger the theme or auth store state */}
                <button className="btn btn-primary btn-sm rounded-full px-6 shadow-md hover:shadow-lg transition-all active:scale-95">
                    Login
                </button>
            </div>
        </nav>
    );
}

export default Navbar;