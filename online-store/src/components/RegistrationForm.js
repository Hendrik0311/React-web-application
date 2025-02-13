import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const UserContext = createContext({
  username: null,
  setLoggedInUser: () => {},
});

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [loggedInUser, setLoggedInUser] = useState(null);

  const Navigate = useNavigate();

  //validation of the email
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
      //this makes sure that there is a @ sign and after that there needs to .
    } else if (
      !/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted:", values);
    setFormData(values);
    setLoggedInUser(values.username);
    Navigate("/login", { state: { username: values.username } });
    setSubmitting(false);
  };

  return (
    <UserContext.Provider
      value={{ username: formData.username, setLoggedInUser }}
    >
      <div>
        <h1>Registration Form</h1>
        <Formik
          initialValues={formData}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <label>
                First Name:
                <Field type="text" name="firstName" />
                <ErrorMessage name="firstName" component="div" />
              </label>
              <br />
              <label>
                Last Name:
                <Field type="text" name="lastName" />
                <ErrorMessage name="lastName" component="div" />
              </label>
              <br />
              <label>
                Username:
                <Field type="text" name="username" />
                <ErrorMessage name="username" component="div" />
              </label>
              <br />
              <label>
                Email:
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </label>
              <br />
              <label>
                Password:
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </label>
              <br />
              <button type="submit" disabled={isSubmitting}>
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </UserContext.Provider>
  );
}

export { UserContext };
export default RegistrationForm;
