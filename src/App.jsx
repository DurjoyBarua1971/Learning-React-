import React from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div className="font-roboto container mx-auto flex flex-col items-center justify-center h-screen bg-amber-300 text-gray-800 gap-8">
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
