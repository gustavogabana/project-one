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

export default function createDataQueryOptions() {
    return queryOptions({
        queryKey: ["photos"],
        queryFn: getPhotos,
        staleTime: 1000 * 60 * 1 // 1 min cache
    });
};