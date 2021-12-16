import React from "react";
import YearOfMonthsOfWeekOfBoxes from "./YearOfMonthsOfWeeksOfBoxes";

const YearView = () => {

    const blockSize = 8;
  const bks = [
    [
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "", color: "lightgrey", textColor: "black", size: blockSize }
    ],
    [
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "", color: "grey", size: blockSize },
      { text: "", header: "Ca", color: "limegreen", size: blockSize },
      {
        text: "",
        header: "Mi",
        color: "gold",
        textColor: "black",
        size: blockSize
      },
      { text: "QC", color: "crimson", size: blockSize },
      { text: "", color: "lightgrey", textColor: "black", size: blockSize }
    ],
    [
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "", color: "lightgrey", textColor: "black", size: blockSize }
    ],
    [
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "", color: "lightgrey", textColor: "black", size: blockSize }
    ],
    [
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "5 FDG2", color: "royalblue", size: blockSize },
      { text: "", color: "lightgrey", textColor: "black", size: blockSize }
    ]
  ];
  const year = Array.from({ length: 12 }).map(() => bks);

    return <div><YearOfMonthsOfWeekOfBoxes months={year} /></div>;
}

export default YearView;