import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  padding: 30px;
  border-bottom: 1px solid lightgray;

  input {
    flex: 1;
    border: 0;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 10px 16px;
  }

  button {
    display: flex;
    
    flex: 0;
    align-items: center;
    justify-content: center;
    
    padding: 0 16px;
    border: 0;
    transition: 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.lightGrey};
    }
  }
`;