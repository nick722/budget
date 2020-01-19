import React from "react";
import { shallow } from "enzyme";
import AddModal from "./add-modal";

const defaultProps = {
  isOpen: false,
  onClose: jest.fn()
};

describe("AddModal component", () => {
  it("should render into the document", () => {
    const component = shallow(<AddModal {...defaultProps} />);
    expect(component).toHaveLength(1);
  });
});
