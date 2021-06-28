import React from 'react';
import Header from '../../components/Header';

import { Container, ContentContainer, CheckoutContainer } from './styles';
import CartProduct from '../../components/CartProduct';

const Cart: React.FC = () => {
  return (
    <Container>
      <Header />

      <ContentContainer>
        <span style={{ marginBottom: 16, fontSize: 18, fontWeight: 500 }}>Meu Carrinho (22 items)</span>

        <div id="cartProductsDescription">
          <span></span>
          <span id="cartProductsDescriptionProduct">Produto</span>

          <div id="cartProductsDescriptionButtonsProduct">
            <span id="cartProductsDescriptionCenter">Valor P/Uni.</span>
            <span id="cartProductsDescriptionCenter">Quantidade</span>
            <span id="cartProductsDescriptionCenter">Total</span>
          </div>
        </div>

        <CartProduct />
        <CartProduct />
        <CartProduct />

        <CheckoutContainer>
          <div id="pricesContainer">
            <div className="priceRow">
              <span>Sub Total</span>
              <span>R$ 500,00</span>
            </div>

            <div className="priceRow">
              <span>Frete</span>
              <span>R$ 500,00</span>
            </div>

            <div className="priceRow">
              <span>Total</span>
              <span>R$ 1000,00</span>
            </div>
          </div>
          
          <div id="checkoutButtonsContainer">
            <div className="checkoutButton">
              <span className="checkoutButtonText">Finalizar Compra</span>
            </div>
            
            <div className="checkoutButton">
              <span className="checkoutButtonText">Continuar comprando</span>
            </div>
          </div>
        </CheckoutContainer>
      </ContentContainer>
    </Container>
  );
}

export default Cart;