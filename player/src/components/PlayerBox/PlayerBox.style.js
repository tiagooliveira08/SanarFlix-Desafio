import styled from "styled-components";

export const PlayerBoxStyled = styled.div`
  width: 30.3%;
  display: inline-flex;
  flex-direction: column;
  margin-right: 3%;
  border-radius: 10px;
  margin-bottom: 40px;
  cursor: pointer;
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
    top: -32px;
    position: relative;
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
