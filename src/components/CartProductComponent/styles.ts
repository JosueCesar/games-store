import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 1fr 5.5fr;
  flex-direction: row;
  align-items: center;

  div.cartProductImageContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    
    flex: 0;

    svg {
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.red}
      }
    }

    img.cartProductImage {
      margin-left: 16px;
      height: 64px;
      width: 64px;
      object-fit: cover;
    }
  }

  div.cartProductInfoContainer {
    display: grid;
    grid-template-columns: 3fr 2.5fr;
    align-items: center;
  }

  span.cartProductText {
    font-weight: bold;
  }
  
  span#cartProductGameName {
    flex: 1;
    margin: 0 16px;
  }

  div.cartProductAmountManager {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;

    div.cartProductButtonsContainer {
      min-width: 120px;
      max-width: 170px;
      margin: 0 16px;

      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      justify-content: center;

      div.cartProductButton {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 0;
        background-color: ${({ theme }) => theme.colors.background2};

        transition: 0.3s;

        &:hover {
          cursor: pointer;
          background-color: ${({ theme }) => shade(0.1, theme.colors.background2)};
        }

        &:active {
          opacity: 0.3;
        }
      }

      .cartProductButton.border-left {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      
      .cartProductButton.border-right {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
      
      div.cartProductAmount {
        flex: 1;
        background-color: ${({ theme }) => theme.colors.primary};
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      span.cartProductAmountText {
        flex: 1;
        text-align: center;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  & + div {
    margin-top: 8px;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 5fr;


    div.cartProductInfoContainer {
      display: grid;
      grid-template-columns: 2.5fr 2.5fr;
    }
  }

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: row;
    
    div.cartProductImageContainer {

      img.cartProductImage {
        margin: 0 16px;
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
    }

    div.cartProductInfoContainer {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    span.cartProductText {
      flex: 1;
    }
    
    span#cartProductGameName {
      margin: 0;
      margin-bottom: 16px;
    }

    div.cartProductButtonsContainer {
      margin-top: 16px;
    }
  }

  @media screen and (max-width: 520px) {
    flex-direction: column;
    padding: 20px;

    span#cartProductGameName {
      margin: 0;
      margin: 16px 0;
    }

    span.cartProductText {
      text-align: center;
    }

    svg.cartProductCloseIcon {
      display: none;
    }
  }
`;