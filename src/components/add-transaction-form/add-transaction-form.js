import React from "react";
import { Field, Form } from "react-final-form";

const AddTransactionForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field name="description">
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
