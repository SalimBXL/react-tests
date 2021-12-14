import React from "react";
import MonthOfWeeksOfBoxes from "../comon/MonthOfWeeksOfBoxes";

const MonthView = () => {
    const blockSize = 64;
    /*
    const weeks = [
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
      ];*/

      const weeks = [
        [
          { text: "5 FDG2", color: "blue", size: blockSize },
          { text: "5 FDG2", color: "blue", size: blockSize },
          { text: "5 FDG2", color: "blue", size: blockSize },
          { text: "5 FDG2", color: "blue", size: blockSize },
          { text: "5 FDG2", color: "blue", size: blockSize },
          { text: "", color: "lightgrey", textColor: "black", size: blockSize }
        ]];

    return <div>
    <h2>January</h2>

    <MonthOfWeeksOfBoxes weeks={weeks}/>

    </div>;
}

export default MonthView;