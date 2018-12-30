import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  padding: 0 80px;
`;

export const Flex = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  align-items: ${props => (props.align ? props.align : "inherent")};
`;
