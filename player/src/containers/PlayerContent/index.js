import React, { Component, Fragment } from "react";
import { Title, ModalViewMovie, ModalAddMovie } from "./../../components";
import { Filters, PlayerBox } from "./../";
import "./style.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  getMovies,
  likeMovie,
  orderMovies,
  orderByViews,
  orderByLikes
} from "./../../redux/actions/";

class PlayerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false
    };
  }

  componentDidMount() {
    this.props.getMovies();
  }

  renderPlayer(itens) {
    if (itens) {
      return itens
        .filter(
          el =>
            el.title
              .toLowerCase()
              .indexOf(this.props.moviesReducer.searchValue.toLowerCase()) !==
            -1
        )
        .map((item, index, array) => {
          return (
            <PlayerBox
              {...item}
              key={index}
              onClick={() =>
                this.setState({
                  ...this.state,
                  isModalOpened: true,
                  modal: { ...item }
                })
              }
            />
          );
        });
    }
    if (this.props.moviesReducer.isLoading) {
      return "carregando";
    } else {
      return "nenhum resultado encontrdo";
    }
  }

  render() {
    const { movies, filtedMovies } = this.props.moviesReducer;
    const { likeMovie, orderMovies, orderByViews, orderByLikes } = this.props;
    return (
      <Fragment>
        {this.state.isModalOpened ? (
          <ModalViewMovie
            {...this.state.modal}
            like={() => likeMovie(this.state.modal.id)}
            onClick={() =>
              this.setState({
                ...this.state,
                isModalOpened: false
              })
            }
          />
        ) : null}
        <div className="player-content">
          <div className="container">
            <div className="player-content__header">
              <Title text="Últimos Vídeos" margin="20px 0" />
              <Filters
                sortViews={isOrder => orderByViews(isOrder)}
                sortLikes={isOrder => orderByLikes(isOrder)}
              />
            </div>
            <div className="player-content__content">
              {this.renderPlayer(movies)}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  moviesReducer: state.moviesReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getMovies, likeMovie, orderMovies, orderByViews, orderByLikes },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContent);
