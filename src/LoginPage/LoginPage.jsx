import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../_actions";

function LoginPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const location = useLocation();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: "/" } };

      console.log(username);
      dispatch(userActions.login(username, password, from));
    }
  }

  return (
    <div
      className="container-fluid "
      style={{ width: "30rem", marginTop: "10%" }}
    >
      <div className="card text-left ">
        <div className="card-header alert-warning">
          <h3>Login</h3>
        </div>
        <div className="p-3  bg-light text-dark">
          <form name="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                className={
                  "form-control" + (submitted && !username ? " is-invalid" : "")
                }
              />
              {submitted && !username && (
                <div className="invalid-feedback">Username is required</div>
              )}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className={
                  "form-control" + (submitted && !password ? " is-invalid" : "")
                }
              />
              {submitted && !password && (
                <div className="invalid-feedback">Password is required</div>
              )}
            </div>

            <div className="form-group mb-2 d-flex m-0">
              <button className="btn btn-warning ">
                {loggingIn && (
                  <span className="spinner-border spinner-border-sm "></span>
                )}
                Login
              </button>

              <Link to="/register" className="btn btn-warning mx-2">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export { LoginPage };
