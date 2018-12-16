import React, { Fragment } from "react";
import "./style.scss";
import { connect } from "react-redux"; 

const Search = ({value, placeholder, state, searchRef}) => (
	<Fragment>
		<input ref={searchRef} className="search-input" type="text" placeholder={placeholder} />
	}
	</Fragment>
)

const mapStateToProps = state => ({
	state : state.searchReducer
});

export default connect(mapStateToProps, null)(Search);
