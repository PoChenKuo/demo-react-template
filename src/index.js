import React from "react";
import ReactDOM from "react-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import Layout from "./views/Layout";
import * as serviceWorker from "./serviceWorker";
import "./i18n";
import "./index.css";
// https://github.com/fontsource/fontsource/blob/master/packages/roboto/README.md
// load roboto font with Instruction guide

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
