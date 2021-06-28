import React from 'react';
import { BiCart } from 'react-icons/bi';
import { MdGames } from 'react-icons/md';
import theme from '../../styles/theme';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import { useCart } from '../../hooks/cart';

const Header: React.FC = () => {
  const history = useHistory();
  const { cartInfo } = useCart();

  return (
    <Container>
      <div id="logoContainer" onClick={() => history.push('/')}>
        <div id="logoBox">
          <MdGames size={32} color={theme.colors.white} />
        </div>

        <h1>Games Store</h1>
      </div>

      {
        history.location.pathname.startsWith('/cart') ?
          <div className="goBackButton" onClick={() => history.goBack()}>
            <span>Voltar</span>
          </div>
        :
          <div id="cartContainer" onClick={() => history.push('/cart')}>
            <div id="cartIconContainer">
              <BiCart id="icon" size={32} />
            </div>

            {
              cartInfo.amount > 0 &&
              <div id="cartItemsAmount">
                <span>{cartInfo.amount}</span>
              </div>
            }
          </div>
      }
    </Container>
  );
}

export default Header;