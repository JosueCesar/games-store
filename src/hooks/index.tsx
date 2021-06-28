import React from 'react';

import { ProductsProvider } from './products';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import { CartProvider } from './cart';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </CartProvider>
    </ProductsProvider>
  );
}

export default AppProvider;