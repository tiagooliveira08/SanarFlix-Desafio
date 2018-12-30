import React, { Component } from "react";
import "./style.scss";
import { FaHeart, FaEye } from "react-icons/fa";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrdenedLike: false,
      isOrdenedView: false
    };
  }
  render() {
    const { sortLikes, sortViews } = this.props;
    return (
      <div className="filters">
        <span>Ordernar por:</span>
        <div className="filters__container">
          <div
            className="filters__container__item"
            onClick={() =>
              this.setState(
                {
                  ...this.state,
                  isOrdenedLike: !this.state.isOrdenedLike
                },
                () => sortLikes(this.state.isOrdenedLike)
              )
            }
          >
            <FaHeart className="filters__container__item__icon" />
            Likes
          </div>
          <div
            className="filters__container__item"
            onClick={() =>
              this.setState(
                {
                  ...this.state,
                  isOrdenedView: !this.state.isOrdenedView
                },
                () => sortViews(this.state.isOrdenedView)
              )
            }
          >
            <FaEye className="filters__container__item__icon" />
            Visualizações
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
