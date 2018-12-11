import React, { Component } from "react";
import { Title } from "./../../components";
import { Filters, PlayerBox } from "./../";
import "./style.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getMovies } from "./../../redux/actions/";

class PlayerContent extends Component { 

	componentDidMount() {
		this.props.getMovies();
	}


	render() {
		const { movies } = this.props.moviesReducer;

		console.log(movies);

		return (
			<div className="player-content">
				<div className="container">
					<div className="player-content__header">
						<Title text="Últimos Vídeos" margin="20px 0"/>
						<Filters />
					</div>
					<div className="player-content__content">
						{movies && movies.map((item, index) => { 
							return <PlayerBox {...item} />
						})}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	moviesReducer : state.moviesReducer
})

const mapDispatchToProps = (dispatch) => bindActionCreators({getMovies}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContent);
