import React from "react";

export default function TemperatureInput({
  scale,
  temperature,
  onTemperatureChange,
}) {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value, scale);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 text-lg font-bold" htmlFor={scale}>
        Enter temperature in {scale === "c" ? "Celsius" : "Fahrenheit"}:
      </label>
      <input
        id={scale}
        type="number"
        value={temperature}
        onChange={handleChange}
        className="border border-white rounded p-2 w-full"
      />
    </div>
  );
}
