import React, { Component, Fragment } from "react";
import { Button, Search, ModalAddMovie } from "./../../components";
import "./style.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  handleSearchMovies,
  addMovie,
  clearSearch
} from "./../../redux/actions/";

class Header extends Component {
  constructor() {
    super();
    this.searchInput = React.createRef();
    this.state = {
      isOpenedAddModal: false
    };
  }

  closeModal = () => {
    this.setState({
      ...this.state,
      isOpenedAddModal: false
    });
  };

  render() {
    const { searchValue } = this.props.state;
    const { handleSearchMovies, addMovie, clearSearch } = this.props;
    return (
      <Fragment>
        {this.state.isOpenedAddModal ? (
          <ModalAddMovie
            addMovie={movie => addMovie(movie)}
            onClose={() => this.closeModal()}
          />
        ) : null}
        <div className="header">
          <div className="container">
            <h1 className="header__hat">
              Sanar <span>Flix</span>
            </h1>
            <div className="header__container">
              <input
                type="text"
                className="search-input"
                placeholder="Buscar por Nome"
                onChange={e => handleSearchMovies(e)}
                value={searchValue}
              />

              <div className="header__content__box">
                <input
                  type="button"
                  className="button"
                  value="Adicionar novo Video"
                  onClick={() =>
                    this.setState({ ...this.state, isOpenedAddModal: true })
                  }
                />
                <input
                  type="button"
                  className="button"
                  value="Limpar"
                  onClick={() => clearSearch()}
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapstateToProps = state => ({
  state: state.moviesReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleSearchMovies, addMovie, clearSearch }, dispatch);

export default connect(
  mapstateToProps,
  mapDispatchToProps
)(Header);
