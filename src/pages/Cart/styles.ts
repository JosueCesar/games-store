import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;

  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};

  div#cartProductsDescription {
    display: grid;
    padding: 10px 20px;
    grid-template-columns: 1fr 3fr 2.5fr;
    align-items: center;

    span#cartProductsDescriptionProduct { 
      padding-left: 16px;
    }

    span#cartProductsDescriptionCenter {
      text-align: center;
    }

    div#cartProductsDescriptionButtonsProduct {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      align-items: center;
    }
  }

  div#noCartItemsMessage {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.background};
  }

  @media screen and (max-width: 900px) {
    div#cartProductsDescription {
      grid-template-columns: 1fr 2.5fr 2.5fr;
    }
  }

  @media screen and (max-width: 750px) {
    div#cartProductsDescription {
      display: none;
    }
  }
`;

export const CheckoutContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 16px;

  div#pricesContainer {
    flex: 1;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
    
    div.priceRow {
      display: flex;
      padding: 10px;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  div#checkoutButtonsContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
    flex: 2;

    button.checkoutButton {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      padding: 16px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.primary};

      transition: 300ms;

      span.checkoutButtonText {
        color: ${({ theme }) => theme.colors.white};
        font-weight: 600;
        font-size: 16px;
      }

      & + button {
        margin-top: 8px;  
      }

      &:disabled {
        opacity: 0.4;

        &:hover {
          cursor: not-allowed;
        }
      } 

      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => lighten(0.2,theme.colors.primary)};
      }
    }
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;