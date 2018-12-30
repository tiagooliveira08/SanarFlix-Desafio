import React, { Component, Fragment } from "react";
import { Title } from "../../components";
import { ModalViewMovie } from "./../";
import { Filters, PlayerBox } from "..";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  PlayerContentStyled,
  PlayerContentHeader
} from "./PlayerContent.style";

import {
  getMovies,
  likeMovie,
  orderMovies,
  orderByViews,
  orderByLikes
} from "../../redux/actions";

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

  renderPlayer(itens = []) {
    if (itens) {
      return itens
        .filter(
          el =>
            el.title
              .toLowerCase()
              .indexOf(this.props.moviesReducer.searchValue.toLowerCase()) !==
            -1
        )
        .map((item, index) => {
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
    const { movies } = this.props.moviesReducer;
    const { likeMovie, orderByViews, orderByLikes } = this.props;
    return (
      <Fragment>
        {this.state.isModalOpened && (
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
        )}
        <PlayerContentStyled>
          <PlayerContentHeader>
            <Title text="Últimos Vídeos" />
            <Filters
              sortViews={isOrder => orderByViews(isOrder)}
              sortLikes={isOrder => orderByLikes(isOrder)}
            />
          </PlayerContentHeader>
          {this.renderPlayer(movies)}
        </PlayerContentStyled>
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
