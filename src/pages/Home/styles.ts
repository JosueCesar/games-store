import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 3fr;

  padding: 20px;
  max-width: 1400px;

  div#homeGridContainer {
    transition: 0.2s;
    display: grid;
    grid-gap: 6px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr 2fr;

    div#homeGridContainer {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;

    div#homeGridContainer {
      grid-template-columns: 1fr;
    }
  }
  
  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    div#homeGridContainer {
      grid-template-columns: 1fr;
    }
  }
`;