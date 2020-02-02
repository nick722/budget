import React, { Component } from "react";
import Transactions from "./components/transactions/transactions";
import Categories from "./components/categories/categories";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Switch } from "react-router-dom";
import { PATHNAMES } from "./constants/constants";

import "./App.scss";

class App extends Component {
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path={PATHNAMES.HOME} exact component={Transactions} />
          <Route path={PATHNAMES.CATEGORIES} component={Categories} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
