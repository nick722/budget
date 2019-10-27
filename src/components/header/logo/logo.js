import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

import "./logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <FontAwesomeIcon icon={faWallet} />
    </div>
  );
};

export default Logo;
