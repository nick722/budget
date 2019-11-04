import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <FontAwesomeIcon icon={faWallet} />
      </div>
      <nav className="site-navigation">
        <a className="site-navigation__home" href="#">
          Home
        </a>
        <a className="site-navigation__categories" href="#">
          Categories
        </a>
      </nav>
    </header>
  );
};

export default Header;
