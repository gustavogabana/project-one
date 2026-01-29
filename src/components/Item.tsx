import { memo } from "react";
import type { PhotoItem } from "@/queryOptions/createDataQueryOptions";

/**
 * Item Card Component
 * Using React.memo to prevent unnecessary re-renders when 
 * scrolling through the virtual list.
 */
const Item = memo(({ data }: { data: PhotoItem }) => {
    return (
        <div className="group flex items-start gap-4 p-4 transition-all duration-200 hover:bg-red-50/50 rounded-2xl">
            
            <div className="relative shrink-0">
                <img 
                    src={data.thumbnailUrl} 
                    alt="" 
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-red-100 transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
            </div>

            <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900 truncate">
                        User Instance {data.id}
                    </span>
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-red-100 text-red-600">
                        ALBUM {data.albumId}
                    </span>
                </div>

                <p className="mt-1 text-sm text-gray-500 leading-snug line-clamp-2">
                    {data.title}
                </p>

                <div className="mt-3 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-xs font-semibold text-red-600 transition-colors hover:text-red-800">
                        View Details
                    </button>
                    <button className="text-xs font-semibold text-gray-400 transition-colors hover:text-gray-600">
                        Dismiss
                    </button>
                </div>
            </div>
        </div>
    );
});

Item.displayName = 'Item';
export default Item;