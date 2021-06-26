import React from 'react';
import { BiCart } from 'react-icons/bi';
import { MdGames } from 'react-icons/md';
import theme from '../../styles/theme';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div id="logoContainer">
        <div id="logoBox">
          <MdGames size={32} color={theme.colors.white} />
        </div>

        <h1>Games Store</h1>
      </div>

      <div id="cartContainer">
        <div id="cartIconContainer">
          <BiCart id="icon" size={32} />
        </div>

        <div id="cartItemsAmount">
          <span>22</span>
        </div>
      </div>
    </Container>
  );
}

export default Header;