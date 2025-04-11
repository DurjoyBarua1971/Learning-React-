import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import { FocusInput } from "./components/FocusInput";

function App() {
  const inputRef = React.useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  return (
    <div className="font-roboto container mx-auto flex flex-col items-center justify-center h-screen bg-amber-300 text-gray-800 gap-4">
      <FocusInput />
      <Counter />
    </div>
  );
}

export default App;
