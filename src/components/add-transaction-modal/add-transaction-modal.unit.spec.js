import React from "react";
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

  it("should render into the document", () => {
    expect(component).toHaveLength(1);
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
