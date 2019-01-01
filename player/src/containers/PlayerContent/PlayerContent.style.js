import styled from "styled-components";
import media from "./../../theme/Medias";

export const PlayerContentStyled = styled.div``;

export const PlayerContentHeader = styled.div`
  position: relative;
  margin-top: 20px;
  > h3 {
    margin: 0;
    display: inline-block;
    transform: translateY(-10%);
  }

  > div {
    margin-top: 10px;
    ${media.desktop`
    margin-top: 0px;
    float: right;
    `}
  }
`;
