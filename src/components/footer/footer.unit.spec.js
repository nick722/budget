import React from "react";
import renderer from "react-test-renderer";
import Footer from "./Footer";

describe("Footer component", () => {
  it("should render into the document", () => {
    const component = renderer.create(<Footer />);
    let renderedFooter = component.toJSON();

    expect(renderedFooter).toMatchSnapshot();
  });
});
