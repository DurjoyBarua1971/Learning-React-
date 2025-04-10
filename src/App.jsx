import "./App.css";
import BaseCard from "./components/BaseCard";
import Card from "./components/Card";
import HighlightedCard from "./components/HighlightedCard";

function App() {
  return (
    <div className="font-roboto container mx-auto flex flex-col items-center justify-center h-screen bg-amber-300 text-gray-800">
      <div>
        <Card isHighlighted={true}>
          <h2 className="text-2xl text-center font-bold mb-4">
            Highlighted Card
          </h2>
          <p className="text-center">This card is highlighted with a border.</p>
        </Card>
        <Card isHighlighted={true} header="Special Announcement">
          <h2 className="text-xl text-center font-bold">Card With Header</h2>
        </Card>
        <Card isHighlighted={false}>
          <h2 className="text-2xl text-center font-bold">Regular Card</h2>
        </Card>

        <HighlightedCard>
          <h2 className="text-2xl text-center font-bold">
            This is Inheritance Highlighted Card
          </h2>
        </HighlightedCard>
        <BaseCard>
          <p>This is a normal card.</p>
        </BaseCard>
      </div>
    </div>
  );
}

export default App;
