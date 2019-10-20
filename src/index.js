import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./store/create-store";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider
    store={createStore({
      transactions: [{ id: 3, description: "radish", amount: "20" }]
    })}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
