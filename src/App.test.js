import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import createStore from "./store/create-store";
import App from "./App";
import Transactions from "./components/transactions/transactions";
import Categories from "./components/categories/categories";
import { PATHNAMES } from "./constants/constants";

const appJsx = (
  <ReduxProvider store={createStore()}>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </ReduxProvider>
);

describe("App", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("should render and match snapshot", () => {
    const tree = renderer.create(appJsx).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("Switch", () => {
    let pageSwitch;
    let pageRoutes;

    beforeEach(() => {
      pageSwitch = component.find("Switch");
      pageRoutes = pageSwitch.find("Route");
    });

    it("should render a Switch", () => {
      expect(pageSwitch).toHaveLength(1);
    });

    it("should render 2 routes", () => {
      expect(pageRoutes).toHaveLength(2);
    });

    describe("Transactions Route", () => {
      let transactionsRoute;

      beforeEach(() => {
        transactionsRoute = pageRoutes.find({ component: Transactions });
      });

      it("should render route for Transactions component", () => {
        expect(transactionsRoute).toHaveLength(1);
      });

      it("should have correct path", () => {
        expect(transactionsRoute.prop("path")).toEqual(PATHNAMES.HOME);
      });

      it("should have 'exact' prop passed", () => {
        expect(transactionsRoute.prop("exact")).toBeTruthy();
      });
    });

    describe("Categories Route", () => {
      let categoriesRoute;

      beforeEach(() => {
        categoriesRoute = pageRoutes.find({
          component: Categories
        });
      });

      it("should render route for Categories component", () => {
        expect(categoriesRoute).toHaveLength(1);
      });

      it("should have correct path", () => {
        expect(categoriesRoute.prop("path")).toEqual(PATHNAMES.CATEGORIES);
      });
    });
  });
});
