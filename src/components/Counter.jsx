import React, { useState, useRef, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded shadow-md">
      <p className="text-lg font-semibold text-gray-700">
        Current Count: <span className="text-blue-500">{count}</span>
      </p>
      <p className="text-lg font-semibold text-gray-700">
        Previous Count:{" "}
        <span className="text-green-500">{prevCountRef.current}</span>
      </p>
      <button
        onClick={handleIncrement}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
