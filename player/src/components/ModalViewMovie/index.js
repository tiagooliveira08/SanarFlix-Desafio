import React, { Component } from "react";
import { Title } from "./../index";
import { FaHeart } from "react-icons/fa";
import "./style.scss";

class ModalViewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLicked: false
    };
  }

  componentDidMount() {
    document.body.style.overflow = "hidden";

    this.setState({
      isLicked: this.props.licked ? true : false
    });
  }
  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }

  hasLicked = () => {
    console.log("enter");
    if (this.props.licked) {
      return "licked";
    }
  };
  render() {
    const { onClick, title, id, like } = this.props;
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="moda-close" onClick={() => onClick(id)}>
            x
          </div>
          <div className="modal-body">
            <iframe
              width="100%"
              height="100%"
              src={
                "https://www.youtube.com/embed/" +
                id +
                "?autoplay=0&showinfo=0&controls=0	"
              }
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
            />
          </div>
          <div className="modal-footer">
            <Title text={title} font="21px" fontWeight={600} />
            <div
              className="modal-footer__content"
              onClick={() =>
                this.setState({ isLicked: !this.state.isLicked }, () => like())
              }
            >
              <span>
                <FaHeart className={this.state.isLicked ? "licked" : false} />
              </span>
              <span>Gostei</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalViewMovie;
