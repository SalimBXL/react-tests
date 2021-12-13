import React from "react";
import { getWeekNumber } from "./helpers";
import PropTypes from "prop-types";
import Box from "./Box";

const WeekOfBoxes = ({ weekNumber, boxes }) => {
  const weekNmbr = weekNumber ? weekNumber : getWeekNumber();

  const squares = !boxes
    ? Array.from({ length: 7 })
        .map((item, dayIndex) => {
          const key = weekNmbr + "-" + dayIndex;
          return <Box key={key} tooltip={key} text={key} size={48} />;
        })
        .filter((item, index) => index > 0 && index < 7)
    : boxes.map((item, dayIndex) => {
        const key = weekNmbr + "-" + dayIndex;
        return (
          <Box
            key={key}
            tooltip={item.tooltip}
            text={item.text}
            size={item.size}
            color={item.color}
          />
        );
      });

  return <div>{squares}</div>;
};

WeekOfBoxes.propTypes = {
  weekNumber: PropTypes.number,
  boxes: PropTypes.array
};

WeekOfBoxes.defaultProp = {
  weekNumber: null,
  boxes: null
};

export default WeekOfBoxes;
