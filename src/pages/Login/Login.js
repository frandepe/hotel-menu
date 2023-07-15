import { Form, Button } from "react-bootstrap";
import "./Login.scss";
import { ErrorMessage, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/auth";
import { useNavigate } from "react-router-dom";
import { registerAction } from "../../redux/register";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRegistrando, setIsRegistrando] = useState(false);
  const { token, error } = useSelector((store) => store.user);

  /*useEffect(() => {
    window.localStorage.getItem("token") && navigate("/home");
  }, [window.localStorage.getItem("token")]); */

  return (
    <div className="Login__container">
      <div className="Login__container-h1">
        <h1>Welcome</h1>
      </div>
      <div className="Login__container-login">
        <div className="Login__container-signin">
          <h2>
            {isRegistrando ? "Sign Up" : "Login"}{" "}
            <i className="fas fa-user"></i>{" "}
          </h2>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(valores) => {
            let errors = {};
            if (!valores.email) {
              errors.email = (
                <div className="Login__errorsEmail">
                  <p>Please insert an Email</p>
                </div>
              );
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.email
              )
            ) {
              errors.email = (
                <div className="Login__errorsEmail">
                  <p>• Email must have an @ and end in .com.</p>
                  <p>
                    • Email can only contain letters, numbers, periods, hyphens
                    and hyphens under
                  </p>
                </div>
              );
            }

            if (!valores.password) {
              errors.password = (
                <div className="Login__errorsEmail">
                  <p>Please insert a Password</p>
                </div>
              );
            }

            if (!valores.name && isRegistrando) {
              errors.name = (
                <div className="Login__errorsEmail">
                  <p>Please insert your name</p>
                </div>
              );
            }

            if (!valores.lastName && isRegistrando) {
              errors.lastName = (
                <div className="Login__errorsEmail">
                  <p>Please insert your last name</p>
                </div>
              );
            }

            return errors;
          }}
          onSubmit={({ email, password, name, lastName }, { resetForm }) => {
            resetForm();
            if (isRegistrando) {
              dispatch(registerAction({ email, password, name, lastName }));
            }
            if (!isRegistrando) {
              dispatch(loginAction({ email, password }));
            }
          }}
        >
          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Floating className="mb-3">
                <Form.Control
                  name="email"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="email">Email address</label>
                <ErrorMessage
                  name="email"
                  component={() => <p>{errors.email}</p>}
                />
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="password">Password</label>
                <ErrorMessage
                  name="password"
                  component={() => <p>{errors.password}</p>}
                />
              </Form.Floating>
              {isRegistrando && (
                <Form.Floating className="mb-3">
                  <Form.Control
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="name">Name</label>
                  <ErrorMessage
                    name="name"
                    component={() => <p>{errors.name}</p>}
                  />
                </Form.Floating>
              )}
              {isRegistrando && (
                <Form.Floating>
                  <Form.Control
                    name="lastName"
                    id="lastName"
                    type="text"
                    placeholder="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="name">Last Name</label>
                  <ErrorMessage
                    name="lastName"
                    component={() => <p>{errors.lastName}</p>}
                  />
                </Form.Floating>
              )}
              <p
                className="Login__doYouHaveAnAccount"
                onClick={() => setIsRegistrando(!isRegistrando)}
              >
                {isRegistrando
                  ? "Do you have an account yet? Login"
                  : "Do not have an account yet? Sign Up!"}
              </p>
              <Button className="Login__btn" type="submit">
                {isRegistrando ? "Sign Up" : "Login"}
              </Button>
            </Form>
          )}
        </Formik>
        {error && (
          <div className="Login__error-check">
            <b>incorrect data</b>
            <p>Please check your details and try again</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
