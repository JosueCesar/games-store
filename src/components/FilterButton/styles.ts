import styled, { css } from "styled-components";

export const Container = styled.button<{ isSelected: boolean }>`
  padding: 10px 16px;
  
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  
  border: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  
  ${
    ({ isSelected }) => isSelected &&
    css`
      text-decoration: underline;
      text-decoration-thickness: 2px;
    `
  };

  transition: 0.3s;

  & + button {
    margin-top: 6px;
  }

  &:hover {
    opacity: 0.7;
  }
  
  &:active {
    opacity: 0.3;
  }
`;