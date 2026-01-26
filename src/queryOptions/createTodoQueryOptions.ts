import { queryOptions } from "@tanstack/react-query";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function createTodoQueryOptions(id: number, on: boolean) {
    return queryOptions({
        queryKey: ["todos", id],
        queryFn: () => getTodos(id),
        placeholderData: (prevData) => prevData,
        staleTime: 1000 * 60 * 5, // de facto cache to avoid background refetch
        enabled: on // When its true, the query runs, when its false, it doesnt / lazy query
    });
}

const getTodos = async (id: number): Promise<Todo[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    if (!response.ok) throw new Error("Fetch failed");
    return await response.json();
}