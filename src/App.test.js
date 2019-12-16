import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import Transactions from "./components/transactions/transactions";

describe("App", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render Home page WHEN route is /", () => {
    const component = renderer.create(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homePage = component.toJSON();
    expect(homePage).toMatchSnapshot();

    // const testInstance = component.root;
    //
    // expect(testInstance.findByType(Transactions)).toMatchSnapshot();

    // const root = document.createElement("div");
    // document.body.appendChild(root);
    //
    // render(
    //   <MemoryRouter initialEntries={["/categories"]}>
    //     <App />
    //   </MemoryRouter>,
    //   root
    // );
    //
    // act(() => {
    //   const goHomeLink = document.querySelector(".site-navigation")[0];
    //   goHomeLink.dispatchEvent(new MouseEvent("click"));
    // });
    //
    // expect(document.body.textContent).toBe("Transactions");
  });

  it("should render Categories page WHEN route is /categories", () => {
    //todo implement the test
    expect(true).toBe(false);
  });
});
