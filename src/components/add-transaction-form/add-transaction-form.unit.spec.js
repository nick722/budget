import React from "react";
import { mount, shallow } from "enzyme";
import AddTransactionForm from "./add-transaction-form";
import { Field } from "react-final-form";
import * as Yup from "yup";

const defaultProps = {
  addTransactionFormSubmitHandler: jest.fn(),
  handleCloseAddModal: jest.fn()
};

jest.mock("yup", () => ({
  string: jest.fn()
}));

describe("AddTransactionForm", () => {
  let component;
  let field;
  let inputValidationMock;
  let validateSyncMock;

  beforeAll(() => {
    const errorMessage = { message: "This field is required" };
    validateSyncMock = jest.fn(val => {
      if (val) {
        return undefined;
      }
      throw errorMessage;
    });
    Yup.string.mockReturnValue({
      required: jest.fn(() => ({ validateSync: validateSyncMock }))
    });
  });

  beforeEach(() => {
    component = mount(<AddTransactionForm {...defaultProps} />);
    field = component.find(Field);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render Field components", () => {
    expect(component.find(Field)).toHaveLength(2);
  });

  describe("Validation", () => {
    component = mount(<AddTransactionForm {...defaultProps} />);
    const descriptionField = component
      .find(Field)
      .filter(`[name="description"]`);

    //TODO fix TypeError: Cannot read property 'required' of undefined
    it("should call validateSync with inputted value", () => {
      descriptionField.simulate("validation", "some text");
      expect(validateSyncMock).toBeCalledWith("some text1");
    });

    it("should validate input WHEN any text is entered", () => {
      //todo
      component.find(Field).simulate("validation", "Some text entered by user");
      expect(inputValidationMock).toBeCalledWith("Some dich");
    });

    it("should throw an error message WHEN no text is entered", () => {
      //todo
      field.simulate("validation", "");
      expect(inputValidationMock).toBeCalledWith("Some dich error");
    });
  });
});
