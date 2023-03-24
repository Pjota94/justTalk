import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  background: rgba(0, 0, 0, 0.44);
  display: flex;
  justify-content: center;
  align-items: center;

  .assistant {
    display: flex;
    justify-content: center;
  }
`;

export const Box = styled.div`
  width: 491px;
  height: 642px;
  background: #ffffff;
  border: 1px solid #055680;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  .div-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    > p {
      margin-right: 80px;
    }

    > h1 {
      font-family: "Plus Jakarta Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 19px;
      line-height: 24px;
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
      color: #055680;
    }
  }

  @media (max-width: 540px) {
    width: 332px;
  }
`;

export const BoxCards = styled.div`
  width: 469px;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  overflow-y: scroll;
  flex-flow: wrap;
  justify-content: center;

  &&::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #055680;
    border-radius: 5px;
  }

  @media (max-width: 540px) {
    width: 320px;
  }
`;
