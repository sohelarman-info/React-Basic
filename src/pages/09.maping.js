import "./App.css";
import Card from "./components/Card";
import Data from "./data.json";

function App() {
  console.log(Data);

  // Method One

  let items = [];

  for (let x = 0; x < Data.length; x++) {
    items.push(
      <Card
        key={x}
        titleText={Data[x].title}
        decText={Data[x].desc}
        currentFullDate={Card.currentFullDate}
      />
    );
  }

  // Method Tow

  items = Data.map((item, index) => (
    <Card
      key={index}
      titleText={item.title}
      decText={item.desc}
      currentFullDate={Card.currentFullDate}
    />
  ));

  return <div className="main">{items}</div>;
}

export default App;
