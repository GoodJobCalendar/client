import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';

import Container from './pages/Container';
import Router from './router/Router';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserView>
        <Container />
      </BrowserView>
      <MobileView>
        <Router />
      </MobileView>
    </ThemeProvider>
  );
};

export default App;
