import React, { Component, Fragment } from "react";
import { Title, ModalViewMovie, ModalAddMovie } from "./../../components";
import { Filters, PlayerBox } from "./../";
import "./style.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getMovies, likeMovie, orderMovies } from "./../../redux/actions/";

class PlayerContent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isModalOpened: false,
			isModalAddVideo: false
		}

	}

	componentDidMount() {
		this.props.getMovies();
	}


	renderPlayer(itens) {
		if (itens && this.props.moviesReducer.filtedMovies.length !== 0) {
			return itens.map((item, index) => {
				return <PlayerBox
					{...item}
					key={index}
					onClick={() => this.setState(
						{
							...this.state,
							isModalOpened: true,
							modal: { ...item }
						})} />
			})

		}
		if (this.props.moviesReducer.isLoading) {
			return "carregando"
		} else {
			return "nenhum resultado encontrdo"
		}


	}

	render() {
		const { movies, filtedMovies } = this.props.moviesReducer;
		const { likeMovie, orderMovies } = this.props;
		return (
			<Fragment>
				{this.state.isModalOpened ?
					<ModalViewMovie {...this.state.modal}
						like={() => likeMovie(this.state.modal.id)}
						onClick={() => this.setState({ ...this.state, isModalOpened: false })} />

					: null}
				< div className="player-content">
					<div className="container">
						<div className="player-content__header">
							<Title text="Últimos Vídeos" margin="20px 0" />
							<Filters sortViews={() => orderMovies("views")} sortLikes={() => orderMovies("likes")} />
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ getMovies, likeMovie, orderMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContent);
