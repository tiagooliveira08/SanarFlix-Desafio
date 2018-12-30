import React, { Component, Fragment } from "react";
import { ModalAddMovie } from "./../../components";
import {
  HeaderStyled,
  Flex,
  HeaderLogo,
  Search,
  ButtonContainer,
  Button
} from "./Header.style";
import { Container } from "./../../theme/Grid";

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
        <HeaderStyled>
          <Container>
            <HeaderLogo>
              Sanar <span>Flix</span>
            </HeaderLogo>
            <Flex direction="column">
              <Search
                type="text"
                placeholder="Buscar por Nome"
                onChange={e => handleSearchMovies(e)}
                value={searchValue}
              />

              <ButtonContainer>
                <Button
                  onClick={() =>
                    this.setState({ ...this.state, isOpenedAddModal: true })
                  }
                >
                  Adicionar novo Video
                </Button>

                <Button onClick={() => clearSearch()}>Limpar</Button>
              </ButtonContainer>
            </Flex>
          </Container>
        </HeaderStyled>
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
