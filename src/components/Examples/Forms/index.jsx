import React from 'react';
import BootstrapForm from './Forms';
import { Formik, Field, ErrorMessage, Form, withFormik } from 'formik';

// Reducing boilerplate code.
const Form2 = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      {({ isSubmitting, dirty }) => (
        <Form>
          <p>{dirty}</p>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="p" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="p" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

const BootstrapFormWithFormik = () => {
  return (
    <Formik
      initialValues={{
        email: 'llauderesv@gmail.com',
        password: 'test',
        checkbox: true,
      }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.checkbox) {
          errors.checkbox = 'Required';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      render={props => <BootstrapForm {...props} />}
    />
  );
};

export default BootstrapFormWithFormik;
