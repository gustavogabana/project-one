import { useThemeStore } from "@/store/useThemeStore";

function Home() {
    const theme = useThemeStore((state) => state.theme);
    const changeTheme = useThemeStore((state) => state.changeTheme);

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 pt-50">
            <div className="flex gap-1.5 items-center justify-center mx-auto">
            <p className="font-black text-slate-900 dark:text-white">Template</p>
            <p className="font-mono text-slate-600 dark:text-slate-400">with Tailwind</p>
            </div>

            <button 
                type="button" 
                className="mx-auto block mt-4 cursor-pointer p-2.5 
                            bg-slate-800 text-white rounded-md 
                            hover:bg-slate-700 active:scale-95
                            dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 
                            transition-all"
                onClick={changeTheme}
            >
            Change theme ({theme})
            </button>
        </div>
    );
}

export default Home;