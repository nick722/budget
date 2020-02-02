import React from "react";
import { shallow } from "enzyme";
import Categories from "./categories";

describe("Categories component", () => {
  it("should render into the document", () => {
    const component = shallow(<Categories />);

    expect(component).toHaveLength(1);
  });
});
