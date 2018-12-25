import React, { Component } from "react";
import { Title } from "./../index";
import { FaHeart } from "react-icons/fa";
import "./style.scss";


class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLicked: false
        }
    }

    componentDidMount() {
        document.body.style.overflow = "hidden";
    }
    componentWillUnmount() {
        document.body.style.overflow = "auto";
    }
    render() {
        const { onClick, title, id, like, licked } = this.props;
        return (
            <div className="modal">
                < div className="modal-content" >
                    <div className="moda-close" onClick={() => onClick(id)}>x</div>
                    <div className="modal-body">
                        <iframe
                            width="100%"
                            height="100%"
                            src={"https://www.youtube.com/embed/" + id + "?autoplay=0&showinfo=0&controls=0	"}
                            frameBorder="0"
                            allow="encrypted-media"
                            allowFullScreen></iframe>
                    </div>
                    <div className="modal-footer">
                        <Title text={title} font="21px" fontWeight={600} />
                        <div className="modal-footer__content" onClick={() => this.setState({ isLicked: true }, () => like())}>
                            <span><FaHeart className={licked || this.state.isLicked ? "licked" : null} /></span>
                            <span>Gostei</span>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}

export default Modal;