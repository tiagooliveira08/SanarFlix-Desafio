import React from "react";
import propTypes  from "prop-types";
import "./style.scss";

const Button = ({text, color, backgroundColor}) =>  {

const buttonStyle = { 
	backgroundColor,
	color
}
	return <button class="button" style={buttonStyle}>{text}</button>
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