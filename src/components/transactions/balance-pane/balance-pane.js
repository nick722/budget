import React from "react";

import "./balance-pane.scss";

const BalancePane = () => {
  return (
    <div className="balance-pane">
      <div className="balance-pane__banner">
        <span className="balance-pane__label">Overall balance </span>
        <span className="balance-pane__sum">5100 rub.</span>
      </div>
    </div>
  );
};

export default BalancePane;
