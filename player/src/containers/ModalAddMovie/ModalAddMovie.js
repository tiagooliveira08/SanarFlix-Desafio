import React, { Component } from "react";
import { Title } from "./../../components/";
import {
  Modal,
  ModalContent,
  ModalClose,
  ModalBody,
  ModalFooter,
  ModalFooterContent
} from "./../../theme/Modal";
import { InputAddMovie, ButtonAddMovie } from "./ModalAddMovie.style";

class ModalAddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleMovieName: "",
      handleMovieLink: "",
      messageStatus: ""
    };
  }

  componentDidMount() {
    document.body.style.overflow = "hidden";
  }
  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }

  handleMovieName = e => {
    this.setState({ ...this.state, handleMovieName: e.target.value });
  };
  handleMovieLink = e => {
    this.setState({ ...this.state, handleMovieLink: e.target.value });
  };

  sendMovie = ({ name, link }) => {
    var match = link.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i
    );
    if (match) {
      var newMovie = {
        id: match ? match[1] : null,
        title: name || "Nome não Setado",
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 100)
      };
      this.props.addMovie(newMovie);
      this.setState({
        ...this.state,
        messageStatus: "Movie adicionada com sucesso!"
      });
    } else {
      this.setState({
        ...this.state,
        messageStatus: "Error ao adicionar Movie!"
      });
    }
  };

  render() {
    const { onClose, name, link, addMovie } = this.props;
    return (
      <Modal>
        <ModalContent height={"400px"}>
          <ModalClose onClick={() => onClose()}>x</ModalClose>
          <ModalBody>
            <Title text={"Adicionar Vídeo"} />

            <InputAddMovie
              type="text"
              placeholder="Nome do vídeo"
              onChange={e => this.handleMovieName(e)}
              value={this.state.handleMovieName}
            />

            <InputAddMovie
              type="text"
              placeholder="link do vídeo"
              onChange={e => this.handleMovieLink(e)}
              value={this.state.handleMovieLink}
            />

            <p>{this.state.messageStatus}</p>
            <ButtonAddMovie
              onClick={() =>
                this.sendMovie({
                  name: this.state.handleMovieName,
                  link: this.state.handleMovieLink
                })
              }
            >
              Cadastrar
            </ButtonAddMovie>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
}

export default ModalAddMovie;
