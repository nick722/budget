import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./store/create-store";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root"); //This is needed so screen readers don't see main content when modal is opened

ReactDOM.render(
  <Provider store={createStore()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
