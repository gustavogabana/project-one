import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, changeTheme } = useTheme();

  return (
    <>
      <div className="flex gap-1.5 items-center justify-center mt-50 mx-auto">
        <p className="font-black">Template</p>
        <p className="font-mono">with Tailwind</p>
      </div>
      <button 
        type="button" 
        className="mx-auto block mt-2 cursor-pointer p-2.5 bg-slate-800 text-white rounded-md"
        onClick={changeTheme}
        >
        Change theme ({theme})
      </button>
    </>
  );
}

export default App;
