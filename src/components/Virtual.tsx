"use no memo";

import createDataQueryOptions from "@/queryOptions/createDataQueryOptions";
import { useQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import Item from "./Item";

function Virtual() {
    const { data, isLoading } = useQuery(createDataQueryOptions());
    const scrollRef = useRef<HTMLDivElement>(null);
    
    /**
     * The virtualizer engine:
     * - count: Total number of items (Note: fixed 'length' typo)
     * - estimateSize: Default height in pixels for items before they are measured
     * - getScrollElement: Tells the virtualizer which element has the scrollbars
     */
    // eslint-disable-next-line react-hooks/incompatible-library
    const virtualizer = useVirtualizer({
        count: data?.length ?? 0,
        estimateSize: () => 100,
        getScrollElement: () => scrollRef.current,
        overscan: 10,
    });

    const virtualItems = virtualizer.getVirtualItems();

    if (isLoading) {
        return (
            <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center gap-2">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-red-500 border-t-transparent" />
                    <span className="text-red-500 font-medium animate-pulse">Loading API Data...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-50 p-4">
            
            <div 
                ref={scrollRef} 
                className="h-[90dvh] w-full max-w-2xl overflow-auto bg-white rounded-3xl shadow-2xl border border-gray-200 scroll-smooth"
            >
                <div 
                    className="relative w-full" 
                    style={{ height: `${virtualizer.getTotalSize()}px` }}
                >
                    {/*When its horizontal the translateY need to be translateX*/}
                    <div 
                        className="absolute top-0 left-0 w-full"
                        // Moves the item to its calculated Y position in the list 
                        style={{ transform: `translateY(${virtualItems[0]?.start ?? 0}px)` }}
                    >
                        {virtualItems.map(({ index, key }) => {
                            const card = data![index];
                            return (
                                <div 
                                    className="px-4 py-2"
                                    key={key} 
                                    data-index={index}
                                    // Measures actual element height after render for dynamic content
                                    ref={virtualizer.measureElement}
                                >
                                    <Item data={card} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Virtual;