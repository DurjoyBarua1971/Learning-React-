import "./App.css";
import { Counter } from "./components/Counter";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="font-roboto container mx-auto flex flex-col items-center justify-center h-screen bg-amber-300 text-gray-800 gap-4">
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
