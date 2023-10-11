import { useState } from "react";
import Lists from "./components/Lists";
import Search from "./components/Search";
import TodoProvider from "./context/TodoContext";

export default function App() {
  const [theme, setTheme] = useState(false);
  function handleDark() {
    setTheme(!theme);
  }
  return (
    <TodoProvider>
      <div className={`mx-auto py-10 h-screen flex flex-col items-center ${theme ? 'bg-black': 'bg-slate-100'} `}>
        <h1 className={`text-center font-bold text-4xl my-3 ${theme ? "text-slate-50":"text-black"} `}>
          Manage your Todos
          <span className="mx-8 cursor-pointer" onClick={handleDark}>{theme ? "☀" :"🌙"}</span>
        </h1>
        <Search />
        <Lists />
      </div>
    </TodoProvider>
  );
}
