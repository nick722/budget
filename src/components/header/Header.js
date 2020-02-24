import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { PATHNAMES } from "../../constants/constants";

import "./header.scss";

const Header = () => {
  return (
    <header className="home-page-header">
      <div className="logo">
        <FontAwesomeIcon icon={faWallet} />
      </div>
      <nav className="site-navigation">
        <Link to={PATHNAMES.HOME}>Home</Link>
        <Link to={PATHNAMES.CATEGORIES}>Categories</Link>
      </nav>
    </header>
  );
};

export default Header;
