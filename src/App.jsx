import "./App.css";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="font-roboto mx-auto container bg-amber-200 p-4 flex justify-center flex-col items-center h-screen gap-4">
      <Clock/>      
    </div>
  );
}

export default App;
