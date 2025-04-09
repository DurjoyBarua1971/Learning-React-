import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import GreetingWithProps from "./components/GreetingWithProps";
import LifecycleExample from "./components/LifecycleExample";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="font-roboto mx-auto container bg-amber-200 p-4 flex justify-center flex-col items-center h-screen gap-4">
      <Greeting />
      <Welcome />
      <GreetingWithProps name="Bangladesh" />
      <Counter />
      <LifecycleExample />
    </div>
  );
}

export default App;
