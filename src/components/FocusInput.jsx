import React from "react";

export const FocusInput = () => {
  const inputRef = React.useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-gray-800 gap-4">
      <input
        className="bg-pink-200 p-2 rounded-md shadow-md shadow-cyan-100"
        ref={inputRef}
        type="text"
        placeholder="Type here..."
      />
      <button
        className="py-2 px-4 rounded-md bg-blue-300"
        onClick={handleFocus}
      >
        Focus the Input
      </button>
    </div>
  );
};
