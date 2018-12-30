import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Home } from "./views";
import { Provider } from "react-redux";
import store from "./redux/store";
import { GlobalStyle } from "./theme/Global";

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <Home />
      <GlobalStyle />
    </Provider>
  </Fragment>,
  document.getElementById("root")
);
