import React, { Component } from "react";
import { Title } from "./../../components";
import { FaHeart } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalClose,
  ModalBody,
  ModalFooter
} from "./../../theme/Modal";

import { ModalFooterItems, LikeIcon } from "./ModalViewMovie.style";
class ModalViewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLiked: false
    };
  }

  componentDidMount() {
    document.body.style.overflow = "hidden";

    this.setState({
      isLiked: this.props.licked ? true : false
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
            <ModalFooterItems
              onClick={() =>
                this.setState({ isLiked: !this.state.isLiked }, () => like())
              }
            >
              <LikeIcon isLiked={this.state.isLiked ? true : false}>
                <FaHeart />
              </LikeIcon>
              <span>Gostei</span>
            </ModalFooterItems>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
}

export default ModalViewMovie;
