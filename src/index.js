import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { BrowserView, MobileView } from 'react-device-detect';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
import GlobalStyle from './styles/globalStyle';
import Mobile from './pages/Mobile';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <BrowserView>
        <App />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
