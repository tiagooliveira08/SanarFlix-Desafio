import React from "react";
import propTypes  from "prop-types";
import "./style.scss";

const Button = ({text, color, backgroundColor, width}) =>  {

const buttonStyle = { 
	backgroundColor,
	color,
	width
}
	return <button className="button" style={buttonStyle}>{text}</button>
}

Button.defaultProps = {
	text : "Button"
}

Button.propTypes = {
	text : propTypes.string,
	color: propTypes.string,
	backgroundColor  : propTypes.string
}



export default Button;