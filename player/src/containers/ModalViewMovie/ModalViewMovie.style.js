import styled from "styled-components";
import media from "./../../theme/Medias";

export const LikeIcon = styled.span`
  ${({ isLiked }) => (isLiked ? "svg{fill: #cc1111 !important}" : null)}
`;

export const ModalFooterItems = styled.div`
  padding: 5px;
  display: flex;
  cursor: pointer;
  margin-top: 10px;
  outline: none;
  span {
    &:nth-child(1) {
      margin-right: 15px;
      display: inline-flex;
      svg {
        fill: #47525e;
      }
    }
    &:nth-child(2) {
      margin-right: 10px;
    }
  }

  ${media.desktop`
    align-items: center;
    justify-content: center;

  background-color: #eeeeee;
    margin-top: 5px;
  `}
`;
