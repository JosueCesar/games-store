import React from 'react';
import Header from '../../components/Header';

import { Container, GridContainer } from './styles';
import SideMenu from './components/SideMenu';
import ProductComponent from '../../components/ProductComponent';
import { useProducts } from '../../hooks/products';
import NoProductsMessage from './components/NoProductsMessage';

const Home: React.FC = () => {
  const { products } = useProducts();

  return (
    <Container>
      <Header />

      <GridContainer>
        <SideMenu />

        <div id="homeGridContainer">
          {
            products.length > 0 ?
            products.map(item => <ProductComponent key={item.id} data={item} />) : <NoProductsMessage />
          }
        </div>
      </GridContainer>
    </Container>
  );
}

export default Home;