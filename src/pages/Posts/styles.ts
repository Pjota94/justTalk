import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 827px;
  height: 724px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  overflow-y: scroll;
  flex-flow: wrap;
  margin-bottom: 40px;

  &&::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #055680;
    border-radius: 5px;
  }

  @media (max-width: 873px) {
    width: 678px;
  }

  @media (max-width: 715px) {
    width: 360px;
  }
`;
