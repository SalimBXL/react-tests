import React from "react";
import "./MonthOfWeeksOfBoxes.css";
import PropTypes from "prop-types";
import WeekOfBoxes from "./WeekOfBoxes";

const MonthOfWeeksOfBoxes = ({ weeks, size }) => {
  const style = {
    margin: "0px " + !size ? 5 : size / 3 + "px 0px 0px"
  };
  const month = !weeks
    ? Array.from({ length: 5 }).map((week, index) => <WeekOfBoxes />)
    : weeks.map((week, index) => <WeekOfBoxes key={index} boxes={week} />);
  return (
    <div className="MonthOfWeeksOfBoxes" style={style}>
      {month}
    </div>
  );
};

MonthOfWeeksOfBoxes.propTypes = {
  weeks: PropTypes.array,
  size: PropTypes.number
};

MonthOfWeeksOfBoxes.defaultProps = {
  weeks: null,
  size: null
};

export default MonthOfWeeksOfBoxes;
