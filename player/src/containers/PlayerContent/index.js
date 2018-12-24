import React, { Component, Fragment } from "react";
import { Title, Modal } from "./../../components";
import { Filters, PlayerBox } from "./../";
import "./style.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getMovies } from "./../../redux/actions/";

class PlayerContent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isModalOpened: false,
		}

	}

	componentDidMount() {
		this.props.getMovies();
	}

	renderPlayer(itens) {
		if (itens && this.props.moviesReducer.filtedMovies.length !== 0) {
			return itens.map((item, index) => {
				return <PlayerBox {...item} key={index} onClick={() => this.setState({ ...this.state, isModalOpened: true, modal: { ...item } }, () => console.log(this.state))} />
			})

		}
		if (this.props.moviesReducer.isLoading) {
			return "carregando"
		} else {
			return "nenhum resultado encontrdo"
		}


	}

	render() {
		const { movies, filtedMovies, searchValue } = this.props.moviesReducer;
		return (
			<Fragment>
				{this.state.isModalOpened ? <Modal {...this.state.modal} onClick={() => this.setState({ ...this.state, isModalOpened: false })} /> : null}
				< div className="player-content">
					<div className="container">
						<div className="player-content__header">
							<Title text="Últimos Vídeos" margin="20px 0" />
							<Filters />
						</div>
						<div className="player-content__content">
							{this.renderPlayer(filtedMovies.length > 0 ? filtedMovies : movies)}
						</div>
					</div>
				</div>
			</Fragment >
		)
	}
}

const mapStateToProps = (state) => ({
	moviesReducer: state.moviesReducer
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ getMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContent);
