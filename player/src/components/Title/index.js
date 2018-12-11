import React from "react";
import propTypes from "prop-types";
import "./style.scss";

const Title = ({text, font, margin}) => {

	const style = { 
		fontSize : font,
		margin
	}

	return <h3 className="title" style={style}>{text}</h3>
}


Title.defaultProps = {
	text : "TitleDefaultText",
	margin : "0"
};

Title.propTypes = { 
	text : propTypes.string,
	font : propTypes.string,
	margin : propTypes.string
};

export default Title;