import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { IntlProvider } from "react-intl";
import createStore from "./store/create-store";
import App from "./App";
import messages_en from "./locales/messages/en";
import messages_ru from "./locales/messages/ru";
import { BrowserRouter as Router } from "react-router-dom";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root"); //This is needed so screen readers don't see main content when modal is opened

import "./index.css";

const messages = {
  en: messages_en,
  ru: messages_ru
};

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <ReduxProvider store={createStore()}>
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        <App />
      </Router>
    </IntlProvider>
  </ReduxProvider>,
  document.getElementById("root")
);
