import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { IntlProvider } from "react-intl";
import createStore from "./store/create-store";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <ReduxProvider store={createStore()}>
    <IntlProvider>
      <App />
    </IntlProvider>
  </ReduxProvider>,
  document.getElementById("root")
);
