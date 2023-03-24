import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 401px;
  height: 149px;
  border: 1px solid #055680;

  @media (max-width: 474px) {
    width: 330px;
  }
`;

export const DivHeader = styled.div`
  height: 41px;
  border-bottom: 1px solid #055680;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    margin-left: 40px;
  }

  > h1 {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }

  > svg {
    color: #055680;
    font-size: 25px;
    cursor: pointer;
    margin-right: 25px;
  }

  @media (max-width: 474px) {
    > h1 {
      font-size: 17px;
    }
  }
`;

export const DivInfos = styled.div`
  display: flex;
  margin-left: 19px;
  > p {
    width: 160px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    margin-top: 14px;
  }

  > span {
    margin-top: 14px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
  }

  @media (max-width: 474px) {
    > p {
      width: 113px;
      font-size: 13px;
    }

    > span {
      font-size: 13px;
    }
  }
`;
