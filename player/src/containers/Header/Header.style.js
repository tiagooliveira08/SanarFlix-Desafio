import styled from "styled-components";
import media from "./../../theme/Medias";

export const HeaderStyled = styled.div`
  width: 100%;
  background-color: #29303b;
  padding: 20px 0;

  ${media.desktop`
  padding: 60px 0;
  
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

export const HeaderLogo = styled.h1`
  display: block;
  color: #fff;
  margin-bottom: 20px;
  font-weight: 400;
  span {
    font-weight: 600;
    font-size: 35px;
  }
`;

export const Search = styled.input`
  width: 100%;
  margin-right: 40px;
  border: none;
  height: 55px;
  color: #969faa;
  text-indent: 40px;
  font-size: 18px;

  &::placeholder {
    color: #969faa;
    text-indent: 40px;
    font-size: 18px;
    position: relative;
    top: 5%;
  }
  ${media.desktop`
    width: 500px;
    
    `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 15px 30px;
  text-align: center;
  border: 1px solid #ccc;
  color: #47525e;
  cursor: pointer;
  font-weight: 600;
  border-radius: 2px;
  width: 80%;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  box-sizing: content-box;
  background-color: #fff;

  &:nth-child(2) {
    background-color: unset;
    color: #fff;
    margin-left: 20px;
    width: 20%;
  }

  ${media.desktop`
    width: 20%;
    `}
`;
