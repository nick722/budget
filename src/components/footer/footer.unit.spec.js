import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer component", () => {
  it("should render into the document", () => {
    const component = shallow(<Footer />);
    expect(component).toHaveLength(1);
  });
});
