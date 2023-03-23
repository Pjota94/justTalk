import styled from "styled-components";

export const Container = styled.div`
  width: 686px;
  height: 63px;
  border-bottom: 1px solid #055680;
  background: rgba(217, 217, 217, 0.53);
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 720px) {
    width: 365px;
  }
`;

export const DivText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 56px;
  p {
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 32px;
    color: #ffffff;
    margin-right: 56px;
    width: 83px;
  }

  span {
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 25px;
    color: #000000;
  }

  @media (max-width: 720px) {
    margin-left: 26px;

    p {
      font-size: 19px;
      margin-right: 45px;
      width: 27px;
    }

    span {
      font-size: 16px;
    }
  }
`;
