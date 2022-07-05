import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/configStore";
import GlobalStyle from "./GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import { BrowserView, MobileView } from "react-device-detect";
import Mobile from "./Mobile";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <BrowserView>
        <GlobalStyle />
        <App />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
