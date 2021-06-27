import React from 'react';
import Header from '../../components/Header';

import { Container, GridContainer } from './styles';
import SideMenu from './components/SideMenu';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <GridContainer>
        <SideMenu />

        <div id="homeGridContainer">

          {/* TODO: show products listing here */}

        </div>
      </GridContainer>
    </Container>
  );
}

export default Home;