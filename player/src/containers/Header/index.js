import React, { Component } from "react";
import {  Button } from "./../../components";
import "./style.scss";

class Header extends Component {

	render(){
		return (
			<div className="header">
				<h1 className="header__hat">
					Sanar <span>Flix</span>
				</h1>
				<Button text="Adicionar novo video"/>
				

			</div>
		)
	}
};

export default Header;