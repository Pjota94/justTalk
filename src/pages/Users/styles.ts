import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxCards = styled.div`
  width: 892px;
  height: 555px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  overflow-y: scroll;
  margin-bottom: 50px;

  &&::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #055680;
    border-radius: 5px;
  }

  @media (max-width: 870px) {
    width: 444px;
  }

  @media (max-width: 474px) {
    width: 369px;
  }
`;
