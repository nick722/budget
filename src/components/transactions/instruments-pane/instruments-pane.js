import React from "react";
import PropTypes from "prop-types";

import "./instruments-pane.scss";

const InstrumentsPane = ({ handleAddModalOpen }) => {
  return (
    <div className="instruments-pane">
      <button className="add-button" onClick={handleAddModalOpen}>
        Add transaction
      </button>
    </div>
  );
};

InstrumentsPane.propTypes = {
  handleAddModalOpen: PropTypes.func.isRequired
};

export default InstrumentsPane;
