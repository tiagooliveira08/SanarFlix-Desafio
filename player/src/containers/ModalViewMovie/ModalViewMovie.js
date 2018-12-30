import React, { Component } from "react";
import { Title } from "./../../components";
import { FaHeart } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalClose,
  ModalBody,
  ModalFooter,
  ModalFooterContent
} from "./../../theme/Modal";

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
    if (this.props.licked) {
      return "licked";
    }
  };
  render() {
    const { onClick, title, id, like } = this.props;
    return (
      <Modal>
        <ModalContent height={"600px"}>
          <ModalClose onClick={() => onClick(id)}>x</ModalClose>
          <ModalBody backgroundColor="#e0e6ed">
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
          </ModalBody>
          <ModalFooter>
            <Title text={title} font="21px" fontWeight={600} />
            <ModalFooterContent
              onClick={() =>
                this.setState({ isLicked: !this.state.isLicked }, () => like())
              }
            >
              <span>
                <FaHeart className={this.state.isLicked ? "licked" : false} />
              </span>
              <span>Gostei</span>
            </ModalFooterContent>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
}

export default ModalViewMovie;
