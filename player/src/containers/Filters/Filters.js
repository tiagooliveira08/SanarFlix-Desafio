import React, { Component } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import {
  FiltersStyled,
  FiltersContainer,
  FiltersItem,
  Text
} from "./Filters.style";
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
      <FiltersStyled>
        <Text>Ordernar por:</Text>
        <FiltersContainer>
          <FiltersItem
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
            <span>Likes</span>
          </FiltersItem>
          <FiltersItem
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
            <span>Visualizações</span>
          </FiltersItem>
        </FiltersContainer>
      </FiltersStyled>
    );
  }
}

export default Filters;
