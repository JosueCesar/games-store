import React from 'react';
import { useHistory } from 'react-router-dom';
import CartProductComponent from '../../components/CartProductComponent';
import Header from '../../components/Header';
import { useCart } from '../../hooks/cart';
import theme from '../../styles/theme';
import transformValueInBRL from '../../utils/transformValueInBRL';

import { Container, ContentContainer, CheckoutContainer } from './styles';

const Cart: React.FC = () => {
  const { cartInfo, cartProducts, checkout } = useCart();
  const history = useHistory();

  return (
    <Container>
      <Header />

      <ContentContainer>
        <span style={{ marginBottom: 16, fontSize: 18, fontWeight: 500 }}>
          Meu Carrinho {cartProducts && `(${cartInfo.amount} ${cartInfo.amount > 1 ? 'items' : 'item'})`}
        </span>

        <div id="cartProductsDescription">
          <span></span>
          <span id="cartProductsDescriptionProduct">Produto</span>

          <div id="cartProductsDescriptionButtonsProduct">
            <span id="cartProductsDescriptionCenter">Valor P/Uni.</span>
            <span id="cartProductsDescriptionCenter">Quantidade</span>
            <span id="cartProductsDescriptionCenter">Total</span>
          </div>
        </div>

        {
          cartProducts && cartProducts.map(item => <CartProductComponent key={item.id} data={item} />)
        }

        {
          !cartProducts.length &&
          <div id="noCartItemsMessage">
            <span>Nenhum item no carrinho.</span>
          </div>
        }

        <CheckoutContainer>
          <div id="pricesContainer">
            <div className="priceRow">
              <span>Sub Total</span>
              <span>{transformValueInBRL(cartInfo.subTotal)}</span>
            </div>

            <div className="priceRow">
              <span>Frete</span>
              <span style={cartInfo.subTotal > 250 ? { color: theme.colors.green } : {}}>{cartInfo.subTotal > 250 ? 'FRETE GRATIS' : transformValueInBRL(cartInfo.shipping)}</span>
            </div>

            <div className="priceRow">
              <span>Total</span>
              <span>{transformValueInBRL(cartInfo.subTotal > 250 ? cartInfo.subTotal : cartInfo.subTotal + cartInfo.shipping)}</span>
            </div>
          </div>
          
          <div id="checkoutButtonsContainer">
            <button className="checkoutButton" disabled={cartProducts.length <= 0} onClick={() => checkout()}>
              <span className="checkoutButtonText">Finalizar Compra</span>
            </button>
            
            <button className="checkoutButton" onClick={() => history.push('/')}>
              <span className="checkoutButtonText">Continuar comprando</span>
            </button>
          </div>
        </CheckoutContainer>
      </ContentContainer>
    </Container>
  );
}

export default Cart;