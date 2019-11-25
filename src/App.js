import React from "react";
import Transactions from "./components/transactions/transactions";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <Transactions />
      <Footer />
    </>
  );
}

export default App;
