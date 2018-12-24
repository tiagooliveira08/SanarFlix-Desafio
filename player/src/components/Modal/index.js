import React, { Component } from "react";
import "./style.scss";

function removeCursor() {

}
class Modal extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.body.style.overflow = "hidden";
    }
    componentWillUnmount() {
        document.body.style.overflow = "auto";
    }
    render() {
        const { onClick, title, id } = this.props;
        console.log(id);
        return (
            <div className="modal">
                < div className="modal-content" >
                    <div className="moda-close" onClick={() => onClick()}>x</div>
                    <div className="modal-body">
                        <iframe
                            width="100%"
                            height="100%"
                            src={"https://www.youtube.com/embed/" + id}
                            frameBorder="0"
                            allow="encrypted-media"
                            allowFullScreen></iframe>
                    </div>
                    <div className="modal-footer">
                        <span>{title}</span>
                        <span>Like</span>
                    </div>
                </div >
            </div >
        )
    }
}

export default Modal;