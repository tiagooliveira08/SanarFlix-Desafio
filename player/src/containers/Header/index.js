import React, { Component } from "react";
import { Button, Search } from "./../../components";
import "./style.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { filterMovies, handleSearchMovies } from "./../../redux/actions/";



class Header extends Component {

	constructor() {
		super();
		this.searchInput = React.createRef();
	}
	render() {
		const { searchValue } = this.props.state;
		const { filterMovies, handleSearchMovies } = this.props;
		return (
			<div className="header">
				<div className="container">
					<h1 className="header__hat">
						Sanar <span>Flix</span>
					</h1>
					<div className="header__container">
						<input type="search" className="search-input" placeholder="Buscar por Nome" onChange={(e) => handleSearchMovies(e)} value={searchValue} />

						<div className="header__content__box">
							<input type="button" className="button" value="Adicionar novo Video" />
							<input type="button" className="button" value="Limpar" />
						</div>
					</div>
				</div>
			</div>
		)
	}
};

const mapstateToProps = (state) => ({
	state: state.moviesReducer
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ filterMovies, handleSearchMovies }, dispatch);

export default connect(mapstateToProps, mapDispatchToProps)(Header);