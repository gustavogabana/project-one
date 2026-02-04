import createTodoQueryOptions from "@/queryOptions/createTodoQueryOptions";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function Todo() {
    const [id, setId] = useState<number>(1);
    const [on] = useState<boolean>(true); 
    // here the state can be used to run the query (when its true) and fetch the data

    // useSuspenseQuery for garanteed returns, no undefined scenarios
    const { data, isLoading, isError, error, refetch } = useQuery(createTodoQueryOptions(id, on));

    if (isLoading) {
        return <>Loading...</>;
    }

    if (isError) {
        return <>Error: {error}</>;
    }

    return (
        <>
            <div className="flex flex-col p-0.5 mx-auto gap-5">
                <div>
                    {JSON.stringify(data?.slice(0, 10))}
                </div>
                <button className="border-2 border-black bg-violet-200 p-0.5 max-w-24 block mx-auto hover:cursor-pointer hover:bg-violet-500" 
                    onClick={() => refetch()}>
                    Refetch
                </button>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <button className="border-2 border-black bg-blue-200 p-0.5 max-w-24 block mx-auto hover:cursor-pointer hover:bg-blue-500" 
                        onClick={() => setId((prev) => prev + 1)}>
                        Increment ID
                    </button>
                    <button className="border-2 border-black bg-green-200 p-0.5 max-w-24 block mx-auto hover:cursor-pointer hover:bg-green-500" 
                        onClick={() => setId((prev) => prev - 1)}>
                        Decrement ID
                    </button>
                </div>
            </div>
        </>
    );
};

export default Todo;