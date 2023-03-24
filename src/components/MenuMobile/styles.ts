import styled from "styled-components";

export const Container = styled.div`
  background: rgb(255 255 255 / 97%);
  box-shadow: rgb(255, 255, 255) 0px 0px 11px 0px;
  position: fixed;
  height: 182px;
  left: 0px;
  top: 138px;
  width: 100%;
  z-index: 1;

  @media (min-width: 810px) {
    display: none;
  }

  .btn-close {
    display: flex;
    justify-content: flex-end;
  }

  button {
    border: none;
    background-color: transparent;
    font-size: 40px;
    margin-right: 22px;
    margin-top: 10px;
    display: none;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  margin-top: 37px;
  p {
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    line-height: 29px;
    color: #000000;
    cursor: pointer;
  }
`;
