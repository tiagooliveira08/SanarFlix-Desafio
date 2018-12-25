import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./style.scss";

const Search = ({ placeholder, searchRef }) => (
	<Fragment>
		<input ref={searchRef} className="search-input" type="text" placeholder={placeholder} />
		}
	</Fragment>
)

const mapStateToProps = state => ({
	state: state.searchReducer
});

export default connect(mapStateToProps, null)(Search);
