import React, { useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

//local imports
import FormikControl from "../../components/FormControl/FormikControl";
import { Context } from "../../context/Context";
import "./Login.css";

export default function Login() {
  const initialValues = {
    email: "",
    password: ""
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required!")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is required!")
      .min(8, "Password length must be greater than 8")
  });
  const { dispatch } = useContext(Context);

  const onSubmit = async (values, submitProps) => {
    console.log("Form values", values);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", values);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      submitProps.setSubmitting(false);
      submitProps.resetForm();
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        className="loginForm"
      >
        {formik => (
          <Form className="loginForm">
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email"
              className="loginInput"
              placeholder="Type Email"
            />
            <FormikControl
              control="input"
              type="password"
              name="password"
              label="Password"
              className="loginInput"
              placeholder="Type Password"
            />
            <button
              className="loginButton"
              type="submit"
              disabled={!formik.isValid && formik.isSubmitting}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
      <button className="loginRegisterButton" type="submit">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
