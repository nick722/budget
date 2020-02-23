import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import AddTransactionForm from "../add-transaction-form/add-transaction-form";

import "./add-transaction-modal.scss";

const AddTransactionModal = ({
  addTransactionFormSubmitHandler,
  handleCloseAddModal,
  isOpen
}) => {
  return (
    <ReactModal
      className="add-transaction-modal"
      isOpen={isOpen}
      onRequestClose={handleCloseAddModal}
    >
      Transaction
      <AddTransactionForm
        addTransactionFormSubmitHandler={addTransactionFormSubmitHandler}
      />
      <button onClick={handleCloseAddModal}>Cancel</button>
    </ReactModal>
  );
};

AddTransactionModal.defaultProps = {
  isOpen: false
};

AddTransactionModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default AddTransactionModal;
