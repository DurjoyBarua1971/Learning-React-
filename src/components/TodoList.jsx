import React from "react";
import { todoReducer } from "../reducers/todoReducer";

export const TodoList = () => {
  const [todos, dispatch] = React.useReducer(todoReducer, []);
  const [inputValue, setInputValue] = React.useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type: "ADD_TODO", payload: inputValue });
      setInputValue("");
    }
  };

  return (
    <div className="p-4 bg-gray-100">
      <h3 className="text-2xl font-bold mb-4">Todo List</h3>
      <div className="mb-4 flex gap-2">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
          className="border border-gray-300 rounded px-2 py-1 flex-1"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <div>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-white p-2 rounded shadow"
            >
              <span
                onClick={() =>
                  dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                }
                className={`cursor-pointer ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_TODO", payload: todo.id })
                }
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
