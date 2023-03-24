import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #055680;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 545px;
  height: 225px;

  @media (max-width: 755px) {
    width: 300px;
  }
`;

export const DivInfo = styled.div`
  margin-left: 20px;
  display: flex;
  margin-top: 14px;
  margin-bottom: 14px;
  align-items: center;

  > p {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    width: 205px;
  }

  > span {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #73797c;
  }

  @media (max-width: 755px) {
    > p {
      font-size: 14px;
      width: 94px;
    }

    > span {
      font-size: 13px;
    }
  }
`;
