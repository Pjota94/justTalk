import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #055680;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 545px;
  margin: 10px 0px;

  > h1 {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 23px;
    margin-left: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  > p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    margin-left: 15px;
    margin-bottom: 20px;
  }

  @media (max-width: 755px) {
    width: 303px;
    > h1 {
      font-size: 13px;
      line-height: 18px;
    }

    > p {
      font-size: 12px;
    }
  }
`;

export const DivOptions = styled.div`
  width: 235px;
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-bottom: 10px;
`;

export const DivComment = styled.div`
  &&:hover {
    color: #055680;
  }

  > svg {
    margin-right: 6px;
  }

  > span {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 14px;
    color: #000000;
    cursor: pointer;
  }
`;
