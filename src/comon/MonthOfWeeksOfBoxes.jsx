import React from "react";
import "./MonthOfWeeksOfBoxes.css";
import PropTypes from "prop-types";
import WeekOfBoxes from "./WeekOfBoxes";

const MonthOfWeeksOfBoxes = ({ weeks, weekDirection }) => {
  const style = {
    flexDirection: weekDirection 
      ? weekDirection === "row" ? "column" : "row"
      : "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  }
  
  const month = !weeks
    ? Array.from({ length: 5 }).map((week, index) => <WeekOfBoxes key={index} weekDirection={weekDirection} />)
    : weeks.map((week, index) => <WeekOfBoxes key={index} boxes={week} weekDirection={weekDirection} />);
  return (
    <div className="MonthOfWeeksOfBoxes" style={style}>
      {month}
    </div>
  );
};

MonthOfWeeksOfBoxes.propTypes = {
  weeks: PropTypes.array,
  size: PropTypes.number, 
  weekDirection: PropTypes.string
};

MonthOfWeeksOfBoxes.defaultProps = {
  weeks: null,
  size: null,
  weekDirection: null
};

export default MonthOfWeeksOfBoxes;
