import withCounter from "./WithCounter";

function ClickCounter({ count, increment }) {
  return (
    <div className="flex flex-col items-center justify-center bg-amber-300 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Click Counter</h1>
      <p className="text-lg mb-2">Count: {count}</p>
      <button
        onClick={increment}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
}

export default withCounter(ClickCounter);
