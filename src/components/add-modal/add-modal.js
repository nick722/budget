import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

const AddModal = ({ isOpen, onClose }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose}>
      AddReactModal
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
