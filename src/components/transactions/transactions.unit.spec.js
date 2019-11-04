import React from "react";
import { shallow } from "enzyme";
import { Transactions } from "./transactions";

const defaultProps = {
  dispatch: jest.fn()
};

describe("Transactions component", () => {
  it("should render into the document", () => {
    const component = shallow(<Transactions {...defaultProps} />);
    expect(component).toHaveLength(1);
  });
});
