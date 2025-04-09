import "./App.css";
import LifecycleExample from "./components/LifecycleExample";

function App() {
  return (
    <div className="font-roboto mx-auto container bg-amber-200 p-4 flex justify-center flex-col items-center h-screen gap-4">
      <LifecycleExample locale="bn-BD" />
    </div>
  );
}

export default App;
