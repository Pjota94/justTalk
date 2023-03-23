import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  background: #055680;
  border-radius: 8px 8px 0px 0px;
  width: 686px;
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 32px;
    color: #ffffff;
  }

  @media (max-width: 720px) {
    width: 365px;
  }
`;
