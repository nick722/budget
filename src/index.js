import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { IntlProvider } from "react-intl";
import createStore from "./store/create-store";
import App from "./App";
import messages_en from "./locales/messages/en";
import messages_ru from "./locales/messages/ru";
import "./index.css";

const messages = {
  en: messages_en,
  ru: messages_ru
};

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <ReduxProvider store={createStore()}>
    <IntlProvider locale={language} messages={messages[language]}>
      <App />
    </IntlProvider>
  </ReduxProvider>,
  document.getElementById("root")
);
