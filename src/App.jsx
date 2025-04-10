import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="font-roboto container mx-auto flex flex-col items-center justify-center h-screen bg-amber-300 text-gray-800">
      <TodoApp />
    </div>
  );
}

export default App;
