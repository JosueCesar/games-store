import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import Routes from './routes';
import theme from './styles/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
