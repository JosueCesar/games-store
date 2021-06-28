import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  display: flex;
  padding: 30px 30px;
  flex-direction: column;
  justify-content: space-between;

  transition: 0.18s;

  border: 1px solid lightgray;
  background-color: ${({ theme }) => theme.colors.white};

  div.productIconsContainer {
    display: flex;
    justify-content: flex-end;
  }

  img {
    height: 300px;
    padding: 20px;
    object-fit: cover;
  }

  div.productInfoContainer {
    flex: 1;
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;

    span.productTitle {
      flex: 1;
      font-size: 24px;
      font-weight: bold;
    }

    span.productPrice {
      flex: 0;
      font-size: 18px;
      font-weight: 500;
      margin: 10px 0;
      transition: 0.3s;
    }
  }
  
  button#addToCartButton {
    border: 0;
    display: flex;
    font-weight: 600;
    padding: 10px 16px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    transition: 0.2s;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};

    svg {
      margin-right: 10px;
    }
  }

  button#addToCartButton:hover {
    background-color: ${({ theme }) => lighten(0.2, theme.colors.primary)};
    color: ${({ theme }) => theme.colors.white};
  }

  &&:hover {
    /* box-shadow: inset 0px 0px 0px 10px ${({ theme }) => theme.colors.primary}; */
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.4);
  }
`;