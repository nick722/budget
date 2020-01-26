import React from "react";
import { shallow } from "enzyme";
import BalancePane from "./balance-pane";

describe("BalancePane component", () => {
  let component;

  beforeEach(() => {
    component = shallow(<BalancePane />);
  });

  it("should render into the document", () => {
    expect(component).toHaveLength(1);
  });
});
