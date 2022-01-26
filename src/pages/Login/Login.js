import { Form, Button } from "react-bootstrap";
import "./Login.scss";
import { ErrorMessage, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, error } = useSelector((store) => store.user);

  // esto antes andaba........

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     navigate(`/home`);
  //   }
  // }, [loginAction(token)]);

  useEffect(() => {
    localStorage.getItem("token");
  }, []);

  return (
    <div className="Login__container">
      <div className="Login__container-h1">
        <h1>Welcome</h1>
      </div>
      <div className="Login__container-login">
        <div className="Login__container-signin">
          <h2>
            Sign in <i className="fas fa-user"></i>{" "}
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
                  <p>Please insert an Password</p>
                </div>
              );
            }

            return errors;
          }}
          onSubmit={({ email, password }, { resetForm }) => {
            resetForm();
            dispatch(loginAction({ email, password }));
            if (loginAction({ email, password })) {
              return navigate(`/home`);
            }
          }}
        >
          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
            <Form onSubmit={handleSubmit}>
              {console.log(errors)}
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
              {/* {touched.email && errors.email && <p>{errors.email}</p>} */}
              <Form.Floating>
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

              <Button
                // onClick={() => {
                //   if (localStorage.getItem("token")) {
                //     navigate("/home");
                //   }
                // }}
                className="Login__btn"
                type="submit"
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
        {error && (
          <div className="Login__error-check">
            <b>Incorrect Email or Password</b>
            <p>Please check your details and try again</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
