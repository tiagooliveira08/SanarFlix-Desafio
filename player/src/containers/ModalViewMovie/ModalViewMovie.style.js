import styled from "styled-components";

export const LikeIcon = styled.span`
  ${({ isLiked }) => (isLiked ? "svg{fill: #cc1111 !important}" : null)}
`;

export const ModalFooterItems = styled.div`
  background-color: #eeeeee;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 5px;
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
`;
