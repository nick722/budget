import React from "react";
import { Field, Form } from "react-final-form";
import * as Yup from "yup";
import PropTypes from "prop-types";

const inputValidationSchema = Yup.string().required();

const inputValidation = value => {
  try {
    inputValidationSchema.validateSync(value);
  } catch (error) {
    return error.message;
  }
};

const AddTransactionForm = ({
  addTransactionFormSubmitHandler,
  handleCloseAddModal
}) => {
  return (
    <Form onSubmit={addTransactionFormSubmitHandler}>
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field name="description" validate={inputValidation}>
              {({ input, meta }) => (
                <div className="add-transaction-form__input">
                  <label htmlFor="description-input">Description</label>
                  <input
                    aria-describedby="description-input-error"
                    id="description-input"
                    type="text"
                    {...input}
                  />
                  {meta.error &&
                    meta.touched && (
                      <p
                        className="text-control__error"
                        id="description-input-error"
                      >
                        {meta.error}
                      </p>
                    )}
                </div>
              )}
            </Field>
            <Field name="amount" validate={inputValidation}>
              {({ input, meta }) => (
                <div className="add-transaction-form__input">
                  <label htmlFor="amount-input">Amount</label>
                  <input
                    aria-describedby="amount-input-error"
                    id="amount-input"
                    type="text"
                    {...input}
                  />
                  {meta.error &&
                    meta.touched && (
                      <p
                        className="text-control__error"
                        id="amount-input-error"
                      >
                        {meta.error}
                      </p>
                    )}
                </div>
              )}
            </Field>
            <div className="add-transaction-form__footer">
              <button
                className="add-transaction-form__submit-button"
                type="submit"
              >
                Submit
              </button>
              <button
                className="add-transaction-form__cancel-button"
                onClick={handleCloseAddModal}
              >
                Cancel
              </button>
            </div>
          </form>
        );
      }}
    </Form>
  );
};

AddTransactionForm.propTypes = {
  addTransactionFormSubmitHandler: PropTypes.func.isRequired,
  handleCloseAddModal: PropTypes.func.isRequired
};

export default AddTransactionForm;
