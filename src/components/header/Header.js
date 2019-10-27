import React from "react";
import Logo from "./logo/logo";
import Navigation from "./navigation/navigation";

import "./header.scss";

const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
