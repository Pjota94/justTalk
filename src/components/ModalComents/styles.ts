import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  background-color: rgb(20 19 19 / 47%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 665px;
  height: 714px;
  background: #d9d9d9;
  border-radius: 8px;
  overflow-y: scroll;

  &&::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #055680;
    border-radius: 5px;
  }

  .div-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    > p {
      margin-right: 80px;
    }

    > h1 {
      font-family: "Josefin Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 29px;
      line-height: 29px;
      color: #000000;
      margin-top: 12px;
    }

    > svg {
      font-size: 40px;
      margin-right: 30px;
      margin-top: 12px;
      cursor: pointer;
    }

    > svg:hover {
      -webkit-transform: scale(1.5);
      -ms-transform: scale(1.5);
      transform: scale(1.2);
      transition: 300ms linear;
      color: #055680;
    }
  }
  .div-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  @media (max-width: 715px) {
    width: 338px;

    > svg {
      margin-right: 20px;
    }
  }

  @media (max-width: 1316px) {
    height: 592px;
  }
`;
