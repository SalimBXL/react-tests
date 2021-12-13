import React from "react";
import "./Box.css";
import PropTypes from "prop-types";

const Box = ({ color, textColor, size, text, tooltip, header }) => {
  const styleText = {
    margin: size / 5 + "px " + size / 5 + "px 0px 0px",
    backgroundColor: color,
    color: textColor,
    width: size + "px",
    height: size + "px",
    fontSize: size / 6 + "px"
  };
  const styleHeader = {
    fontSize: size / 7 + "px",
    color: textColor
  };

  return (
    <div
      className="Box tooltip"
      style={styleText}
      title={tooltip ? tooltip : header ? "(" + header + ")  " + text : text}
    >
      {header ? (
        <p className="Box-header" style={styleHeader}>
          {header}
        </p>
      ) : (
        <pre>&nbsp;</pre>
      )}
      <p className="Box-text">{text}</p>
    </div>
  );
};

Box.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
  size: PropTypes.number,
  text: PropTypes.string,
  tooltip: PropTypes.string,
  header: PropTypes.string
};

Box.defaultProps = {
  color: null,
  textColor: "white",
  size: 16,
  text: "",
  tooltip: null,
  header: null
};

export default Box;
