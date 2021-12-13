import "./styles.css";
import WeekOfBoxes from "./WeekOfBoxes";

export default function App() {
  return (
    <div className="App">
      {/*
      const bks = [
        { tooltip: "", color: "green" },
        { tooltip: "", color: "lightgreen" },
        { tooltip: "", color: "blue" },
        { tooltip: "", color: "yellow" },
        { tooltip: "", color: "darkslategrey" },
        { tooltip: "", color: "lightgrey" }
      ];
      return <WeekOfBoxes boxes={bks} />;
      */}
      <WeekOfBoxes />
    </div>
  );
}
