import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormComponent = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
  isSubmitting,
  setFieldValue,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckBox">
        <Form.Check
          name="check-me-out"
          type="checkbox"
          label="Check me out"
          onChange={() => setFieldValue('checkbox', !values.checkbox)}
          checked={values.checkbox}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </Form>
  );
};

export default FormComponent;
