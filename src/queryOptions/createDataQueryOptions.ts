import { queryOptions } from "@tanstack/react-query";

type Item = {
    id: number,
    text: string
};

export default function createDataQueryOptions() {
    const fiveMin = 1000 * 60 * 5;

    return queryOptions({
        queryKey: ["item"],
        queryFn: () => getItems(),
        staleTime: fiveMin,
        initialData: []
    });
};

const getItems = async (): Promise<Item[]> => {
    return Array.from({ length: 500 }, (_, i) => ({
        id: i,
        text: `User Card #${i} - Detailed information for item ${i}`
    }));
};