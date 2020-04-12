import React from "react";
import PropTypes from "prop-types";

import "./instruments-pane.scss";

const InstrumentsPane = ({ handleOpenAddModal }) => {
  return (
    <div className="instruments-pane">
      <button className="add-button" onClick={handleOpenAddModal}>
        Add transaction
      </button>
    </div>
  );
};

InstrumentsPane.propTypes = {
  handleOpenAddModal: PropTypes.func.isRequired
};

export default InstrumentsPane;
