import React from "react";
import propTypes from "prop-types";

const Button = ({ text, color, backgroundColor, width, onClick }) => {
  const buttonStyle = {
    backgroundColor,
    color,
    width
  };
  return (
    <button onClick={e => onClick(e)} className="button" style={buttonStyle}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button"
};

Button.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  backgroundColor: propTypes.string
};

export default Button;
