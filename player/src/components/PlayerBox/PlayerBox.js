import React from "react";

import { Title } from "./../../components/";
import {
  PlayerBoxStyled,
  PlayerBoxImage,
  PlayerBoxTitle,
  PlayerBoxItens,
  LikeIcon
} from "./PlayerBox.style";

import { Flex } from "./../../theme/Grid";

import { FaHeart, FaEye, FaPlayCircle } from "react-icons/fa";

const PlayerBox = ({ id, title, views, likes, licked, onClick }) => (
  <PlayerBoxStyled onClick={() => onClick()}>
    <PlayerBoxImage className="PlayerBox__image">
      <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} />
      <FaPlayCircle />
    </PlayerBoxImage>
    <PlayerBoxTitle>
      <Title text={title} font="20px" margin="10px 0" />
    </PlayerBoxTitle>
    <Flex>
      <PlayerBoxItens>
        <FaEye />
        <span>{views}</span>
      </PlayerBoxItens>
      <PlayerBoxItens>
        <LikeIcon isLiked={licked ? true : false}>
          <FaHeart />
        </LikeIcon>
        <span>{likes}</span>
      </PlayerBoxItens>
    </Flex>
  </PlayerBoxStyled>
);

export default PlayerBox;
