import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #055680;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 447px;
  height: 149px;

  h1 {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    margin-left: 21px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 14px;
    margin-left: 21px;
  }

  @media (max-width: 540px) {
    width: 303px;
    height: 176px;
    h1 {
      font-size: 13px;
    }

    h2 {
      font-size: 12px;
    }
  }
`;

export const DivHeader = styled.div`
  height: 41px;
  border-bottom: 1px solid #000000;
  display: flex;
  align-items: center;

  p {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
  }

  @media (max-width: 540px) {
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
  margin-left: 21px;

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }

  @media (max-width: 540px) {
    span {
    }
  }
`;
