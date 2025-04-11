import React, { useReducer } from "react";
import counterReducer from "../reducers/counterReducer";

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-md shadow-md bg-gray-100 gap-4">
      <p className="text-2xl font-bold">Count: {state.count}</p>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Decrement
        </button>
      </div>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
      >
        Reset
      </button>
    </div>
  );
};
