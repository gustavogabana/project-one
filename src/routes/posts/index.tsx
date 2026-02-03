import { createFileRoute, Link } from "@tanstack/react-router";

type PostSearch = {
  query: string;
};

const validateSearch = (search: Record<string, unknown>): PostSearch => {
  return {
    query: (search.query as string) || "",
  };
};

const postsLoader = async ({ deps }: { deps: PostSearch }) => {
    const allPosts = ["post 1", "post 2", "post 3"];
    const filteredPosts = deps.query ? allPosts.filter((p) => p.includes(deps.query)) : allPosts;
    return { posts: filteredPosts };
}

export const Route = createFileRoute("/posts/")({
    component: Posts,
    validateSearch: validateSearch,
    loaderDeps: ({ search: { query } }) => ({ query }),
    loader: postsLoader
});

function Posts() {
    const { posts } = Route.useLoaderData();
    return (
        <div className="p-4 space-y-2">
            <h1 className="text-xl font-bold">Posts Encontrados:</h1>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post} className="p-2 border rounded hover:bg-slate-50">
                        <Link 
                            to="/posts/$postId" 
                            params={{ postId: post }}
                            className="text-blue-600 hover:underline"
                        >
                            {post}
                        </Link>
                    </div>
                ))
            ) : (
                <p>Nenhum post encontrado para essa busca.</p>
            )}
        </div>
    );
};