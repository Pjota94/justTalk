import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  width: 717px;
  height: 603px;
  background: #ffffff;
  border: 1px solid #055680;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-bottom: 50px;

  @media (max-width: 755px) {
    width: 340px;
  }
`;

export const DivPhoto = styled.div`
  > svg {
    margin-left: 38px;
    font-size: 25px;
    margin-bottom: -29px;
    cursor: pointer;
  }

  .info-name {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info-name > img {
    width: 150px;
    height: 100px;
  }

  .info-name > h1 {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }

  @media (max-width: 755px) {
    > svg {
      margin-left: 20px;
    }
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 34px;
  margin-top: 58px;

  > button {
    border: none;
    background-color: transparent;
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
  }

  @media (max-width: 755px) {
    gap: 16px;
    margin-top: 41px;

    > button {
      font-size: 14px;
    }
  }
`;

export const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const Content = styled.div`
  width: 590px;
  height: 301px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  overflow-y: scroll;

  &&::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #055680;
    border-radius: 5px;
  }

  @media (max-width: 755px) {
    width: 325px;
  }
`;
