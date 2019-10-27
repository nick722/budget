import React from "react";
import Home from "./home/home";
import Categories from "./categories/categories";

import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="site-navigation">
      <Home />
      <Categories />
    </nav>
  );
};

export default Navigation;
