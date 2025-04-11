import React, { useState, useCallback } from "react";

// Child component
const Button = React.memo(({ onClick, label }) => {
  console.log(`${label} Button rendered`);
  return (
    <button
      className="px-4 py-2 bg-pink-200 text-gray-800 rounded-md shadow-md hover:bg-pink-300 transition duration-300 ease-in-out"
      onClick={onClick}
    >
      {label}
    </button>
  );
});

const CallBack = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // Without useCallback
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // With useCallback
  const handleDecrement = useCallback(() => {
    setOtherCount(otherCount - 1);
  }, [otherCount]);

  return (
    <div className="gap-4 flex flex-col items-center justify-center h-screen bg-amber-300 text-gray-800">
      <p>Count: {count}</p>
      <p>Other Count: {otherCount}</p>
      <Button onClick={handleIncrement} label="Increment" />
      <Button onClick={handleDecrement} label="Decrement" />
    </div>
  );
};

export default CallBack;
