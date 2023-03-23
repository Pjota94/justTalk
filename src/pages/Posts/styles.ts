import styled from "styled-components";

export const Container = styled.div`
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Background = styled.div`
  width: 805px;
  height: 576px;
  background: rgba(217, 217, 217, 0.53);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow-y: scroll;
  flex-flow: wrap;

  &&::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #055680;
    border-radius: 5px;
  }

  @media (max-width: 830px) {
    width: 739px;
  }

  @media (max-width: 768px) {
    width: 281px;
  }
`;
