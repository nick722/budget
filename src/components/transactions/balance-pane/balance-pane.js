import React from "react";

import "./balance-pane.scss";

const BalancePane = () => {
  return (
    <div className="balance-pane">
      <div className="balance-banner">
        <span>Overall balance </span>
        <span className="balance-sum">5100</span>
      </div>
    </div>
  );
};

export default BalancePane;
