import React from "react";
import "./Box.css";
import PropTypes from "prop-types";

const Box = ({ color, size, text, tooltip, header }) => {
  const styleText = {
    backgroundColor: !color ? "lightgrey" : color,
    border: !color ? "1px solid grey" : "none",
    width: size + "px",
    height: size + "px",
    fontSize: size / 6 + "px"
  };
  const styleHeader = {
    fontSize: size / 7 + "px"
  };

  return (
    <div
      className="Box tooltip"
      style={styleText}
      title={tooltip ? tooltip : text}
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
  size: PropTypes.number,
  text: PropTypes.string,
  tooltip: PropTypes.string,
  header: PropTypes.string
};

Box.defaultProps = {
  color: null,
  size: 16,
  text: "",
  tooltip: null,
  header: null
};

export default Box;
