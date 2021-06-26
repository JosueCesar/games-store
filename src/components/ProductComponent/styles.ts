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
      margin-top: 10px;
      transition: 0.3s;
    }
  }

  &&:hover {
    cursor: pointer;
    box-shadow: inset 0px 0px 0px 10px ${({ theme }) => theme.colors.primary};
    /* box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.4); */
  }
`;