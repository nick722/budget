import React from "react";
import Transactions from "./components/transactions/transactions";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
