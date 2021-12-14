import React from "react";
import MonthOfWeeksOfBoxes from "../comon/MonthOfWeeksOfBoxes";

const MonthView = () => {
    const blockSize = 72;
    
    const weeks = [
      [
        { text: "Weeks", textColor: "Black", size: blockSize},
        { text: "Tasks", textColor: "Black", size: blockSize},
        { text: "Mo", textColor: "Black", size: blockSize},
        { text: "Tu", textColor: "Black", size: blockSize},
        { text: "We", textColor: "Black", size: blockSize},
        { text: "Th", textColor: "Black", size: blockSize},
        { text: "Fr", textColor: "Black", size: blockSize},
        { text: "WE", textColor: "Black", size: blockSize},
      ],
      [
        { text: "XX", textColor: "Black", size: blockSize},
        { text: "Tasks", textColor: "Black", size: blockSize},
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "", color: "lightgrey", textColor: "black", size: blockSize }
      ],
      [
        { text: "XX", textColor: "Black", size: blockSize},
        { text: "Tasks", textColor: "Black", size: blockSize},
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
        { text: "XX", textColor: "Black", size: blockSize},
        { text: "Tasks", textColor: "Black", size: blockSize},
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "", color: "lightgrey", textColor: "black", size: blockSize }
      ],
      [
        { text: "XX", textColor: "Black", size: blockSize},
        { text: "Tasks", textColor: "Black", size: blockSize},
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "", color: "lightgrey", textColor: "black", size: blockSize }
      ],
      [
        { text: "XX", textColor: "Black", size: blockSize},
        { text: "Tasks", textColor: "Black", size: blockSize},
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "5 FDG2", color: "blue", size: blockSize },
        { text: "", color: "lightgrey", textColor: "black", size: blockSize }
      ]
    ];

    return <div>
    <h2>January</h2>

    <MonthOfWeeksOfBoxes weeks={weeks} weekDirection="row"/>

    </div>;
}

export default MonthView;