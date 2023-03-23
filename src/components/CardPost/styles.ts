import styled from "styled-components";

export const Container = styled.div`
  width: 739px;
  height: 178px;
  background: rgba(217, 217, 217, 0.45);
  border-radius: 20px;
  margin: 10px 0px;

  .assistant {
    display: flex;
    justify-content: space-between;
    width: 671px;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 15px;
    color: #000000;
    margin: 12px 0px 12px 22px;
  }

  > p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 15px;
    color: #000000;
    margin-left: 22px;
    width: 674px;
  }

  @media (max-width: 830px) {
    width: 700px;
    .assistant {
      width: 631px;
    }
  }

  @media (max-width: 768px) {
    width: 251px;
    height: 233px;

    .assistant {
      width: 184px;
    }

    > p {
      width: 232px;
      font-size: 12px;
      padding-right: 12px;
    }

    h2 {
      font-size: 12px;
      width: 235px;
      padding-right: 12px;
    }
  }
`;

export const DivName = styled.div`
  height: 47px;
  border-bottom: 1px solid rgba(6, 41, 74, 0.29);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 22px;

  p {
    font-family: "JetBrains Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    color: #000000;
  }

  svg {
    font-size: 22px;
    cursor: pointer;
  }

  svg:hover {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.2);
    transition: 300ms linear;
    color: #055680;
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
  cursor: pointer;

  &&:hover {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.2);
    transition: 300ms linear;
  }

  span {
    font-family: "JetBrains Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 28px;
    color: #ffffff;
  }
`;
