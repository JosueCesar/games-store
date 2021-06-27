import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.3s;
  padding: 14px;

  img {
    height: 70px;
    width: 70px;
    margin-right: 16px;
    background-color: ${({ theme }) => theme.colors.background};
  }

  div.trendingProductInfoContainer {
    display: flex;
    flex-direction: column;
  }
  
  .trendingProductInfoContainer span#trendingProductTitle {
    margin-bottom: 10px;
    font-weight: 600;
  }

  & + div {
    margin-top: 6px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: inset 0px 0px 0px 10px ${({ theme }) => theme.colors.primary};
  }
`;