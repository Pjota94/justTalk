import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-family: "Josefin Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 64px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 810px) {
    h1 {
      font-size: 50px;
    }
  }
`;
