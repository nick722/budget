import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import renderer from "react-test-renderer";
import createStore from "./store/create-store";
import App from "./App";

const appJsx = (
  <ReduxProvider store={createStore()}>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </ReduxProvider>
);

describe("App", () => {
  beforeEach(() => {
    const root = document.createElement("div");
    document.body.appendChild(root);
    render(appJsx, root);
  });

  it("should render and match snapshot", () => {
    const appComponent = renderer.create(appJsx).toJSON();
    expect(appComponent).toMatchSnapshot();
  });

  it("should render Transactions Component WHEN Home link is clicked", () => {
    act(() => {
      const goHomeLink = document.querySelector(
        ".site-navigation a:first-child"
      );
      goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    const appComponent = renderer.create(appJsx).toJSON();
    expect(appComponent).toMatchSnapshot();
  });

  it("should render Categories page WHEN Categories link is clicked", () => {
    act(() => {
      const goHomeLink = document.querySelector(
        ".site-navigation a:nth-child(2)"
      );
      goHomeLink.dispatchEvent(new MouseEvent("click"));
    });

    const appComponent = renderer.create(appJsx).toJSON();
    expect(appComponent).toMatchSnapshot();
  });
});
