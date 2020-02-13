import React from "react";
import { Field, Form } from "react-final-form";

const AddTransactionForm = ({ onSubmit }) => {
  return (
    <FormForm onSubmit={onSubmit}>
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field name="description">
              {({ input }) => <input type="text" {...input} />}
            </Field>
            <Field name="amount">
              {({ input }) => <input type="text" {...input} />}
            </Field>
            <button type="submit">Submit</button>
          </form>
        );
      }}
    </FormForm>
  );
};

export default AddTransactionForm;
