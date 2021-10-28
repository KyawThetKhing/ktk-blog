import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";

//local imports
import FormikControl from "../../components/FormControl/FormikControl";
import "./Register.css";

export default function Register() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required!"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required!"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
        "Password must contain at least one special character"
      )
      .min(8, "Password length must be greater than 8"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), ""],
        "Confirm Password must match with Password"
      )
      .required("Confirmed password is required")
  });
  const [error, setError] = useState(false);

  const onSubmit = async (values, submitProps) => {
    console.log("Values", values);
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username: values.username,
        email: values.email,
        password: values.password
      });

      submitProps.setSubmitting(false);
      submitProps.resetForm();
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form className="registerForm">
            <FormikControl
              control="input"
              type="text"
              name="username"
              label="Username"
              className="registerInput"
              placeholder="Type Username"
            />
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email"
              className="registerInput"
              placeholder="Type Email"
            />
            <FormikControl
              control="input"
              type="password"
              name="password"
              label="Password"
              className="registerInput"
              placeholder="Type Password"
            />
            <FormikControl
              control="input"
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              className="registerInput"
              placeholder="Type Confirm Password"
            />
            <button
              className="registerButton"
              type="submit"
              disabled={!formik.isValid && formik.isSubmitting}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </div>
      )}
    </div>
  );
}
