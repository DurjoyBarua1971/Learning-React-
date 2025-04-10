import React from "react";

function TodoApp() {
  const [newTodo, setNewTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const todoItem = {
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const toggleTodo = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return (
    <div className="bg-amber-300 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ul className="list-none p-0">
          {todos.map((todo, index) => (
            <li
              key={index}
              onClick={() => toggleTodo(index)}
              className={`cursor-pointer mb-2 p-2 rounded ${
                todo.completed
                  ? "line-through text-gray-500 bg-gray-100"
                  : "text-black bg-gray-200"
              }`}
            >
              {todo.text}
            </li>
          ))}
        </ul>

        {todos.some((todo) => todo.completed) && (
          <button
            onClick={clearCompleted}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Clear Completed
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
