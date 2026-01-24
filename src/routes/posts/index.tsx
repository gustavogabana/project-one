import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
    component: Posts,
    validateSearch: (search) => {
        return { query: (search.query as string) || "" }
    },
    loaderDeps: ({ search: { query } }) => ({ query }),
    loader: ({ deps: { query } }) => {
        const posts = ["post 1", "post 2", "post 3"];
        return { posts: posts.filter((post) => post === query) }
    }
});

function Posts() {
    const { posts } = Route.useLoaderData();
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