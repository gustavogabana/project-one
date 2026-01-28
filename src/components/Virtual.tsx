"use no memo";

import createDataQueryOptions from "@/queryOptions/createDataQueryOptions";
import { useQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import Item from "./Item";

function Virtual() {
    const { data } = useQuery(createDataQueryOptions());

    const scrollRef = useRef<HTMLDivElement>(null);
    
    /**
     * The virtualizer engine:
     * - count: Total number of items (Note: fixed 'length' typo)
     * - estimateSize: Default height in pixels for items before they are measured
     * - getScrollElement: Tells the virtualizer which element has the scrollbars
     */
    // eslint-disable-next-line react-hooks/incompatible-library
    const virtualizer = useVirtualizer({
        count: data!.length,
        estimateSize: () => 100,
        getScrollElement: () => scrollRef.current,
        // horizontal: true
    });

    const virtualItems = virtualizer.getVirtualItems();

    return (
        <div ref={scrollRef} className="h-[90dvh] w-[90dvh] overflow-auto">
            <div className="relative" style={{ height: `${virtualizer.getTotalSize()}px` }}>
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
                                    className="my-6" 
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
    );
};

export default Virtual;