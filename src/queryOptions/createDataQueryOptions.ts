import { queryOptions } from "@tanstack/react-query";

export type PhotoItem = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

const getPhotos = async (): Promise<PhotoItem[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (!response.ok) throw new Error("Network Error");
    return response.json();
};

/**
 * createDataQueryOptions(limit?)
 * - Adds an optional `limit` to cap the number of items fetched.
 * - Default limit is 1000 to avoid accidentally loading the full API (5k items).
 */
export default function createDataQueryOptions(limit = 1000) {
    return queryOptions({
        queryKey: ["photos", limit],
        queryFn: async () => {
            const all = await getPhotos();
            // slice to limit memory usage and improve load times
            return all.slice(0, limit);
        },
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 1 // 1 min cache
    });
};