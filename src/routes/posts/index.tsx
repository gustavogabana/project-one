import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
    component: Posts,
});

function Posts() {
    const posts = ["post 1", "post 2", "post 3"];
    return (
        <div>
            {posts.map((post) => (
                <div key={post}>
                    <Link to="/posts/$postId" params={{
                        postId: post
                    }}>{post}</Link>
                </div>
            ))}
        </div>
    );
}