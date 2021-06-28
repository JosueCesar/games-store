import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 600px;

  div#leftSideMenuContentContainer {
    width: 100%;
    background-color: #fff;
    border: 1px solid lightgray;
    height: fit-content;

    div.leftSideMenuBlock {
      display: flex;
      flex-direction: column;
      padding: 20px;
    }

    div#leftSideMenuFilters {
      border-bottom: 1px solid lightgray;
      
      div#leftSideMenuFilterTitleContainer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;

        span#filterTitle {
          flex: 1;
        }

        span#leftSideMenuClearFilters {
          text-decoration: underline;
          
          &:hover {
            cursor: pointer;
            color: ${({ theme }) => theme.colors.red};
          }
        }
      }
    }

    span.leftSideMenuCategoryTitle {
      margin-bottom: 16px; 
    }
  }

  @media screen and (max-width: 750px) {
    width: 100%;

    div#trending.leftSideMenuBlock {
      display: none !important;
    }
  }
`;