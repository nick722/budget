import React, { Component } from "react";
import Transactions from "./components/transactions/transactions";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Switch } from "react-router-dom";

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
          <Route path="/" exact component={Transactions} />
          <Route
            path="/categories"
            render={() => (
              <div id="categoriesPage">
                Categories page is under construction11
              </div>
            )}
          />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
