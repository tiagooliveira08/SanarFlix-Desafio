import React, { Component } from "react";
import {  Button,  Search } from "./../../components";
import "./style.scss";

class Header extends Component {

	render(){
		return (
			<div className="header">
				<div className="container">
					<h1 className="header__hat">
						Sanar <span>Flix</span>
					</h1>
					<div className="header__container">
						<Search placeholder="Buscar por Nome"/>
						<div className="header__content__box">
							<Button text="Buscar" width="280px" />
							<Button text="Adicionar novo video" width="180px"/>
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default Header;