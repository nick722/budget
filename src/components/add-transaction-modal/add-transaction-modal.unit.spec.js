import React from "react";
import { shallow } from "enzyme";
import AddTransactionModal from "./add-transaction-modal";

const defaultProps = {
  isOpen: false,
  onClose: jest.fn()
};

describe("AddTransactionModal component", () => {
  it("should render into the document", () => {
    const component = shallow(<AddTransactionModal {...defaultProps} />);
    expect(component).toHaveLength(1);
  });
});
