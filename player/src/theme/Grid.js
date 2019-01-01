import styled from "styled-components";
import media from "./Medias";
export const Container = styled.div`
  padding: 0 10px;
  margin: 0 auto;

  ${media.tablet`
  width: 740px;
  `}

  ${media.desktop`
    width: 1280px;
  `}
`;

export const Flex = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  align-items: ${props => (props.align ? props.align : "inherent")};
`;
