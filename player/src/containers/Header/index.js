import React, { Component } from "react";
import {  Button,  Search } from "./../../components";
import "./style.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { filterMovies } from "./../../redux/actions/";


class Header extends Component {

	constructor(){
		super();
		this.searchInput = React.createRef();
	}
	render(){
		const { searchValue } = this.props.state;
		return (
			<div className="header">
				<div className="container">
					<h1 className="header__hat">
						Sanar <span>Flix</span>
					</h1>
					<div className="header__container">
						<Search placeholder="Buscar por Nome" searchRef={ el => this.searchInput = el} />
						<div className="header__content__box">
							<Button onClick={() => this.props.filterMovies(this.searchInput.value)} text="Buscar" width="280px"/>
							<Button text="Adicionar novo video" width="180px"/>
						</div>
					</div>
				</div>
			</div>
		)
	}
};

const mapstateToProps = (state) => ({
	state : state.searchReducer
});

const mapDispatchToProps = (dispatch) => bindActionCreators({filterMovies}, dispatch);

export default connect(mapstateToProps, mapDispatchToProps)(Header);