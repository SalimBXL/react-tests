import React from "react";
import "./WeekOfBoxes.css";
import { getWeekNumber } from "./helpers";
import PropTypes from "prop-types";
import Box from "./Box"

const WeekOfBoxes = ({ weekNumber, boxes, weekDirection }) => {
  const weekNmbr = weekNumber ? weekNumber : getWeekNumber();

  const style = {
    flexDirection: weekDirection ? weekDirection : "column"
  };

  const squares = !boxes
    ? Array.from({ length: 7 })
        .map((item, dayIndex) => {
          const key = weekNmbr + "-" + dayIndex;
          return <Box key={key} />;
        })
        .filter((item, index) => index > 0 && index < 7)
    : boxes.map((item, dayIndex) => {
        const key = weekNmbr + "-" + dayIndex;
        return (
          <Box
            key={key}
            tooltip={item.tooltip}
            text={item.text}
            header={item.header}
            size={item.size}
            color={item.color}
            textColor={item.textColor}
          />
        );
      });

  return <div className="WeekOfBoxes" style={style}>{squares}</div>;
};

WeekOfBoxes.propTypes = {
  weekNumber: PropTypes.number,
  boxes: PropTypes.array,
  weekDirection: PropTypes.string
};

WeekOfBoxes.defaultProp = {
  weekNumber: null,
  boxes: null,
  weekDirection: null
};

export default WeekOfBoxes;
