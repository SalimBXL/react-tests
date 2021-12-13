import "./styles.css";
import YearOfMonthsOfWeekOfBoxes from "./YearOfMonthsOfWeeksOfBoxes";

export default function App() {
  const blockSize = 12;
  const bks = [
    [
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "", color: "lightgrey", textColor: "black", size: blockSize }
    ],
    [
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "", color: "darkslategrey", size: blockSize },
      { text: "", header: "Ca", color: "green", size: blockSize },
      {
        text: "",
        header: "Mi",
        color: "yellow",
        textColor: "black",
        size: blockSize
      },
      { text: "QC", color: "red", size: blockSize },
      { text: "", color: "lightgrey", textColor: "black", size: blockSize }
    ],
    [
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "", color: "lightgrey", textColor: "black", size: blockSize }
    ],
    [
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "", color: "lightgrey", textColor: "black", size: blockSize }
    ],
    [
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "5 FDG2", color: "blue", size: blockSize },
      { text: "", color: "lightgrey", textColor: "black", size: blockSize }
    ]
  ];
  const year = Array.from({ length: 12 }).map(() => bks);

  return (
    <div className="App">
      <YearOfMonthsOfWeekOfBoxes months={year} />
    </div>
  );
}
