import React from "react";
import "./YearOfMonthsOfWeeksOfBoxes.css";
import PropTypes from "prop-types";
import MonthOfWeeksOfBoxes from "../comon/MonthOfWeeksOfBoxes";

const YearOfMonthsOfWeeksOfBoxes = ({ months, weekDirection }) => {
  const year = !months
    ? Array.from({ length: 12 }).map((month, index) => <MonthOfWeeksOfBoxes key={index} weekDirection={weekDirection} />)
    : months.map((month, index) => (
        <MonthOfWeeksOfBoxes key={index} weekDirection={weekDirection} weeks={month} />
      ));
  return <div className="YearOfMonthsOfWeeksOfBoxes">{year}</div>;
};

YearOfMonthsOfWeeksOfBoxes.propTypes = {
  months: PropTypes.array,
  weekDirection: PropTypes.string
};

YearOfMonthsOfWeeksOfBoxes.defaultProps = {
  months: null,
  weekDirection: null
};
export default YearOfMonthsOfWeeksOfBoxes;
