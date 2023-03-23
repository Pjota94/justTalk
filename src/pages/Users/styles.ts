import styled from "styled-components";

export const Container = styled.div`
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Background = styled.div`
  width: 686px;
  height: 605px;
  background: rgba(217, 217, 217, 0.53);
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  overflow-y: scroll;
  gap: 5px;

  &&::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  &&::-webkit-scrollbar-thumb {
    background: #055680;
    border-radius: 5px;
  }

  @media (max-width: 725px) {
    width: 330px;
    overflow-y: scroll;
  }
`;
