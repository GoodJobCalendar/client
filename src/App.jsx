import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';

import Web from './pages/Web';
import Router from './router/Router';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserView>
        <Web />
      </BrowserView>
      <MobileView>
        <Router />
      </MobileView>
    </ThemeProvider>
  );
};

export default App;
