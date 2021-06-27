import styled, { css } from "styled-components";
import { lighten } from 'polished';

export const Container = styled.button<{ isSelected: boolean }>`
  padding: 10px 16px;
  
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  
  border: 0;
  background-color: ${({ theme }) => theme.colors.primary};

  ${
    ({ isSelected, theme }) => !isSelected &&
    css`
      background-color: ${lighten(0.23, theme.colors.primary)};
    `
  };
  
  ${
    ({ isSelected }) => isSelected &&
    css`
      text-decoration: underline;
    `
  };

  transition: 0.3s;

  & + button {
    margin-top: 6px;
  }

  &:hover {
    ${({ isSelected, theme }) => isSelected ?
      css`
        opacity: 0.7;
        box-shadow: inset 0px 0px 0px 6px ${theme.colors.lightGrey};
        border: 1px solid ${theme.colors.primary} inset;
      ` :
      css`
        box-shadow: inset 0px 0px 0px 6px ${theme.colors.primary};
      `
    };
  }
`;