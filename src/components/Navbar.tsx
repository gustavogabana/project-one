import { Link } from "@tanstack/react-router";

function Navbar() {
    return (
        <>
            <div className="navbar p-2 flex gap-2">
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
                <Link to="/todos" className="[&.active]:font-bold">
                    Todos
                </Link>
                <Link to="/virtual" className="[&.active]:font-bold">
                    Virtual
                </Link>
            </div>
        </>
    );
}

export default Navbar;