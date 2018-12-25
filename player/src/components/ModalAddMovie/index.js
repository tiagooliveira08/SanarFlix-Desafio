import React, { Component } from "react";
import { Title } from "./../index";
import "./style.scss";


class ModalAddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handleMovieName: "",
            handleMovieLink: ""
        }
    }

    componentDidMount() {
        document.body.style.overflow = "hidden";
    }
    componentWillUnmount() {
        document.body.style.overflow = "auto";
    }

    handleMovieName = (e) => {
        this.setState({ ...this.state, handleMovieName: e.target.value })
    }
    handleMovieLink = (e) => {
        this.setState({ ...this.state, handleMovieLink: e.target.value })
    }

    render() {
        const { onClose, name, link, addMovie } = this.props;
        return (
            <div className="modal">
                <div className="modal-content modal-content--height" >
                    <div className="moda-close" onClick={() => onClose()}>x</div>
                    <div className="modal-body">
                        <Title text={"Adicionar Vídeo"} />

                        <input type="text" className="input-add-movie"
                            placeholder="Nome do vídeo"
                            onChange={(e) => this.handleMovieName(e)}
                            value={this.state.handleMovieName} />

                        <input type="text" className="input-add-movie"
                            placeholder="link do vídeo"
                            onChange={(e) => this.handleMovieLink(e)}
                            value={this.state.handleMovieLink} />


                        <input type="button" className="button-add-movie" value="Cadastrar" onClick={() => addMovie({ name: this.state.handleMovieName, link: this.state.handleMovieLink })} />
                        <div className="modal-footer">
                        </div>
                    </div >
                </div >
            </div>
        )
    }
}

export default ModalAddMovie;