import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;

  .div-content {
    margin-right: 200px;
  }

  .div-content > .btn-close {
    border: none;
    color: white;
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
    color: #ffffff;
    border: none;
    background-color: transparent;
    margin-left: 30px;
  }

  button:hover {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.2);
    transition: 300ms linear;
  }

  @media (max-width: 810px) {
    button {
      display: none;
    }
  }
`;
