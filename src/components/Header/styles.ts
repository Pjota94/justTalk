import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 50px;
  height: 136px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .div-content {
    margin-right: 200px;
  }

  .div-content > .btn-close {
    border: none;
    color: black;
    background-color: transparent;
    font-size: 40px;
    display: none;
  }

  @media (max-width: 810px) {
    .div-content {
      margin-right: -10px;
    }

    .div-content > .btn-close {
      display: initial;
    }
  }
`;

export const DivButtons = styled.div`
  button {
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 29px;
    line-height: 29px;
    color: #000000;
    border: none;
    background-color: transparent;
    margin-left: 30px;
    height: 30px;
  }

  button:hover {
    border-bottom: 2px solid #055680;
  }

  @media (max-width: 810px) {
    button {
      display: none;
    }
  }
`;
