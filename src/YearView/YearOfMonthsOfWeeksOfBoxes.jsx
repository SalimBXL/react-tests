import React from "react";
import "./YearOfMonthsOfWeeksOfBoxes.css";
import PropTypes from "prop-types";
import MonthOfWeeksOfBoxes from "../comon/MonthOfWeeksOfBoxes";

const YearOfMonthsOfWeeksOfBoxes = ({ months }) => {
  const year = !months
    ? Array.from({ length: 12 }).map((month, index) => <MonthOfWeeksOfBoxes />)
    : months.map((month, index) => (
        <MonthOfWeeksOfBoxes key={index} weeks={month} />
      ));
  return <div className="YearOfMonthsOfWeeksOfBoxes">{year}</div>;
};

YearOfMonthsOfWeeksOfBoxes.propTypes = {
  months: PropTypes.array
};

YearOfMonthsOfWeeksOfBoxes.defaultProps = {
  months: null
};
export default YearOfMonthsOfWeeksOfBoxes;
