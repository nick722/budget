import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

import "./add-modal.scss";

const AddModal = ({ isOpen, onClose }) => {
  return (
    <ReactModal className="add-modal" isOpen={isOpen} onRequestClose={onClose}>
      Transaction
    </ReactModal>
  );
};

AddModal.defaultProps = {
  isOpen: false
};

AddModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default AddModal;
