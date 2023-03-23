import styled from "styled-components";

export const Container = styled.div`
  background: #d9d9d9;
  border: 1px solid #000000;
  border-radius: 20px;
  width: 612px;
  height: 185px;
  margin-bottom: 10px;

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: #000000;
    margin-left: 31px;
    margin-top: 9px;
    margin-bottom: 9px;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    color: #000000;
    margin-left: 31px;
  }

  @media (max-width: 715px) {
    width: 283px;
    height: 185px;

    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      color: #000000;
      margin-left: 16px;
    }

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      margin-left: 16px;
      color: #000000;
    }
  }
`;

export const DivHeader = styled.div`
  height: 41px;
  border-bottom: 1px solid #000000;
  display: flex;
  align-items: center;

  p {
    font-family: "JetBrains Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    color: #000000;
  }

  @media (max-width: 715px) {
    p {
      font-size: 12px;
    }
  }
`;

export const LogoName = styled.div`
  width: 25px;
  height: 25px;
  background: #055680;
  border-radius: 50px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;

  span {
    font-family: "JetBrains Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 28px;
    color: #ffffff;
  }

  @media (max-width: 715px) {
    margin-left: 17px;

    span {
      font-size: 15px;
    }
  }
`;
