import styled from "styled-components";
import media from "./../../theme/Medias";

export const PlayerBoxStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 0;

  ${media.tablet`
    width: 49%;
    margin-right: 2%;
    display: inline-flex;

    &:nth-child(2n+3){
      margin-right: 0;
    }
  `}
  ${media.desktop`
  margin-bottom: 40px;
  width: 30.3%;
  display: inline-flex;  
  margin-right: 3% !important;
  `}
`;

export const PlayerBoxImage = styled.div`
  width: 100%;
  width: 100%;
  height: 190px;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
  position: relative;

  img {
    border-radius: 5px;
    width: 100%;
    top: -60px;
    position: relative;
    ${media.tablet`
      top: -34px;
    `}
    ${media.desktop`
      top: -45px;
    `}
  }
  svg {
    width: 100px;
    height: 100px;
    fill: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const PlayerBoxTitle = styled.div`
  min-height: 80px;
`;

export const PlayerBoxItens = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
  font-weight: 600;
  span {
    display: inherit;
  }
  svg {
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    width: 20px;
    height: 20px;
    fill: rgba(0, 0, 0, 0.8);
    margin-right: 10px;
    display: inherit;
  }
`;

export const LikeIcon = styled.div`
  ${({ isLiked }) => (isLiked ? "svg{fill: #cc1111}" : null)}
`;
