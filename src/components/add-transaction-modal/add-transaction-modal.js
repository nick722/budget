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
      <header className="add-transaction-modal__header">Transaction</header>
      <form>
        <div className="add-transaction-form__input">
          <label>Description</label>
          <input type="text" />
        </div>
        <div className="add-transaction-form__input">
          <label>Amount</label>
          <input type="text" />
        </div>
        <div className="add-transaction-form__footer">
          <button className="add-transaction-form__submit-button">Ok</button>
          <button className="add-transaction-form__cancel-button">
            Cancel
          </button>
        </div>
      </form>
      {/*<AddTransactionForm*/}
      {/*  addTransactionFormSubmitHandler={addTransactionFormSubmitHandler}*/}
      {/*/>*/}
      {/*<button onClick={handleCloseAddModal}>Cancel</button>*/}
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
