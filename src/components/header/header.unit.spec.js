import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header component", () => {
  it("should render into the document", () => {
    const component = shallow(<Header />);
    expect(component).toHaveLength(1);
  });
});
