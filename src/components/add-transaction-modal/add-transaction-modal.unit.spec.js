import React from "react";
import ReactModal from "react-modal";
import { shallow } from "enzyme";
import AddTransactionModal from "./add-transaction-modal";
import AddTransactionForm from "../add-transaction-form/add-transaction-form";

const defaultProps = {
  addTransactionFormSubmitHandler: jest.fn(),
  handleCloseAddModal: jest.fn(),
  isOpen: false
};

describe("AddTransactionModal component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<AddTransactionModal {...defaultProps} />);
  });

  describe("ReactModal", () => {
    let reactModal;

    beforeEach(() => {
      reactModal = component.find(ReactModal);
    });

    it("should render into the document", () => {
      expect(reactModal).toHaveLength(1);
    });

    it("should have expected props", () => {
      expect(reactModal.props()).toMatchObject({
        className: "add-transaction-modal",
        isOpen: defaultProps.isOpen,
        onRequestClose: defaultProps.handleCloseAddModal
      });
    });
  });

  describe("AddTransactionForm", () => {
    let addTransactionForm;

    beforeEach(() => {
      addTransactionForm = component.find(AddTransactionForm);
    });

    it("should render into the document", () => {
      expect(addTransactionForm).toHaveLength(1);
    });

    it("should have expected props", () => {
      expect(addTransactionForm.props()).toMatchObject({
        addTransactionFormSubmitHandler:
          defaultProps.addTransactionFormSubmitHandler,
        handleCloseAddModal: defaultProps.handleCloseAddModal
      });
    });
  });
});
