import React from "react";

export default function Card({ children, isHighlighted, header }) {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-6 w-80 transition-transform transform hover:scale-105 m-3 ${
        isHighlighted ? "border-4 border-blue-500" : ""
      }`}
    >
      {header && <div className="text-center font-extrabold text-2xl">{header}</div>}
      <div>{children}</div>
    </div>
  );
}
