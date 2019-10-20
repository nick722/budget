import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./store/create-store";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider
    store={createStore({
      transactions: [
        { id: 3, description: "initial store from redux", amount: "1910200908" }
      ]
    })}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
