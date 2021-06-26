import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  padding: 0 20px;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);

  div#logoContainer {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: row;

    h1 {
      font-size: 42px;
      font-weight: 600;
    }

    div#logoBox {
      display: flex;
      margin-right: 16px;
      align-items: center;
      justify-content: center;

      width: 56px;
      height: 56px;
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  div#cartContainer {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    transition: 0.3s;

    div#cartIconContainer {
      padding: 20px;
      transition: 0.3s;
    }

    div#cartItemsAmount {
      margin: 6px;
      padding: 4px;
      display: flex;
      min-width: 24px;
      min-height: 24px;
      position: absolute;
      align-items: center;
      border-radius: 50px;
      justify-content: center;

      background-color: #f00;
      font-weight: bold;
      color: #fff;
    }
  }

  div#cartContainer:hover {
    cursor: pointer;
    background-color: ${({ theme }) => lighten(0.5, theme.colors.grey)};
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);

    div#cartIconContainer {
      opacity: 0.8;
    }
  }
`;