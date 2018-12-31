import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(224, 224, 244, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  display: block;
`;

export const ModalContent = styled.div`
  position: relative;
  top: 50%;
  width: 80%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  height: ${({ height }) => (height ? height : "auto")}
  background-color: #fff;
  border-radius: 3px;
  padding: 40px;
`;

export const ModalClose = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  width: 50px;
  height: 50px;
  font-size: 30px;
  background-color: #5a6978;
  color: #fff;
  text-align: center;
  border-radius: 50px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#fff"};
`;

export const ModalFooter = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
