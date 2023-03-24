import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 735px;
  margin: 10px 0px;
  border: 1px solid #055680;

  > h1 {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    margin-left: 29px;
    color: #000000;
    margin-top: 15px;
    margin-bottom: 9px;
  }

  > p {
    margin-left: 29px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    color: #000000;
    width: 685px;
    margin-bottom: 20px;
  }

  @media (max-width: 873px) {
    width: 644px;

    > h1 {
      font-size: 15px;
      line-height: 15px;
    }

    > p {
      width: 591px;
    }
  }

  @media (max-width: 715px) {
    width: 327px;

    > h1 {
      font-size: 13px;
      margin-left: 15px;
    }

    > p {
      margin-left: 15px;
      width: 299px;
      font-size: 12px;
    }
  }
`;

export const DivOptions = styled.div`
  width: 235px;
  display: flex;
  align-items: center;
  margin-left: 29px;
  margin-bottom: 5px;

  @media (max-width: 715px) {
    margin-left: 15px;
  }
`;

export const DivUser = styled.div`
  &&:hover {
    color: #055680;
  }
  > svg {
    font-size: 18px;
    margin-right: 6px;
    cursor: pointer;
  }

  > span {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 14px;
    color: #000000;
    margin-right: 16px;
    cursor: pointer;
  }
`;

export const DivComment = styled.div`
  &&:hover {
    color: #055680;
  }

  > svg {
    margin-right: 6px;
    cursor: pointer;
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
