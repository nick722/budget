import React from "react";
import { shallow } from "enzyme";
import { Transactions } from "./transactions";

const defaultProps = {
  dispatch: jest.fn()
};

describe("Transactions component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Transactions {...defaultProps} />);
  });

  it("should render into the document", () => {
    expect(component).toHaveLength(1);
  });

  describe("AddModal", () => {
    let addModalComponent;

    beforeEach(() => {
      addModalComponent = component.find("AddModal");
    });

    it("should render into the document", () => {
      expect(addModalComponent).toHaveLength(1);
    });

    it("should have expected props", () => {
      expect(addModalComponent.props()).toMatchObject({
        isOpen: false,
        onClose: component.instance().handleAddModalOpen
      });
    });

    it("should handle Add modal render when addModalOpen state is toggled", () => {
      expect(component.find("AddModal").prop("isOpen")).toBe(false);

      component.instance().handleAddModalOpen();
      expect(component.find("AddModal").prop("isOpen")).toBe(true);
    });
  });
});
