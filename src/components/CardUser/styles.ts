import styled from "styled-components";

export const Container = styled.div`
  width: 289px;
  height: 164px;
  background: rgba(217, 217, 217, 0.45);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 10px 0;
  cursor: pointer;
`;

export const DivUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(6, 41, 74, 0.29);
  height: 49px;
  margin-bottom: 14px;

  p {
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 22px;
    color: #000000;
  }
`;

export const DivInfos = styled.div`
  display: flex;
  margin-left: 14px;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
  }
`;

export const BackgroundInfo = styled.div`
  width: 43px;
  height: 21px;
  background: #055680;
  border-radius: 13px;
  margin-right: 9px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
  }
`;
