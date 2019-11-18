import React from "react";
import Transactions from "./components/transactions/transactions";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Transactions} />
        <Route
          path="/categories"
          exact
          render={() => <div>Categories page is under construction</div>}
        />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
