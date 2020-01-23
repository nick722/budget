import React from "react";
import { shallow } from "enzyme";
import InstrumentsPane from "./instruments-pane";

describe("InstrumentsPane component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<InstrumentsPane />);
  });

  it("should render into the document", () => {
    expect(component).toHaveLength(1);
  });
});
