import { memo } from "react";

type ItemProps = {
    data: {
        id: number;
        text: string;
    }
};

/**
 * Item Card Component
 * Using React.memo to prevent unnecessary re-renders when 
 * scrolling through the virtual list.
 */
const Item = memo(({ data }: ItemProps) => {
    return (
        /* Alterado bg-white para bg-red-50 e a borda para red-200 */
        <div className="flex flex-col gap-2 p-4 bg-red-50 border border-red-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">

                {/* User Avatar Placeholder */}
                <div className="h-10 w-10 rounded-full bg-linear-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    {data.id % 99}
                </div>
                
                <div className="flex flex-col">
                    /* Ajustado o texto para um cinza mais escuro que combina com fundo quente */
                    <span className="font-semibold text-gray-900">
                        User Instance #{data.id}
                    </span>
                    <span className="text-xs text-red-600/70">
                        Active now • ID: {data.id}
                    </span>
                </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
                {data.text}
            </p>

            <div className="mt-2 flex gap-4">
                <button className="text-xs font-medium text-red-700 hover:underline">
                    View Profile
                </button>
                <button className="text-xs font-medium text-gray-400 hover:text-red-500">
                    Dismiss
                </button>
            </div>
        </div>
    );
});

export default Item;