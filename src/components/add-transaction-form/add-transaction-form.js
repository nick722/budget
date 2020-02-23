import React from "react";
import { Field, Form } from "react-final-form";
import * as Yup from "yup";

const descriptionValidationSchema = Yup.string().required();

const descriptionValidation = value => {
  try {
    descriptionValidationSchema.validateSync(value);
  } catch (error) {
    return error.message;
  }
};

const AddTransactionForm = ({ addTransactionFormSubmitHandler }) => {
  return (
    <Form onSubmit={addTransactionFormSubmitHandler}>
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field name="description" validate={descriptionValidation}>
              {({ input, meta }) => (
                <>
                  <input
                    aria-describedby="text-control__error"
                    type="text"
                    {...input}
                    onBlur={e => {
                      input.onBlur(e);
                    }}
                  />
                  {meta.error &&
                    meta.touched && (
                      <p id="text-control__error">{meta.error}</p>
                    )}
                </>
              )}
            </Field>
            <Field name="amount">
              {({ input }) => <input type="text" {...input} />}
            </Field>
            <button type="submit">Submit</button>
          </form>
        );
      }}
    </Form>
  );
};

export default AddTransactionForm;
