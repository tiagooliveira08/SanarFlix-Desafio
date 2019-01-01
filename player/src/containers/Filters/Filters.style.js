import styled from "styled-components";
import media from "./../../theme/Medias";

export const FiltersStyled = styled.div`
  display: flex;
  flex-direction: column;
  ${media.desktop`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
`}
  color: #47525e;
  font-weight: 600;
`;
export const Text = styled.span`
  margin-right: 20px;
  margin-bottom: 10px;
`;
export const FiltersContainer = styled.div``;
export const FiltersItem = styled.div`
  display: flex;

  display: inline-flex;
  justify-content: center;

  svg {
    margin-right: 5px;
    font-size: 24px;
  }

  span {
    position: relative;
    top: -100%;
    display: inline-block;
    margin-left: 5px;
  }

  &:nth-child(2) {
    margin-left: 20px;
  }
`;
