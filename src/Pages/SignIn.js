import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [formErrors, setFormError] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    let inputValid = formData;
    let formErrors = {};
    let isValid = true;
    const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!inputValid.email) {
      isValid = false;
      formErrors.email = "Please enter Email ID";
    } else if (!reg.test(inputValid.email)) {
      isValid = false;
      formErrors.email = "Please enter valid Email ID";
    }
    if (!inputValid.password) {
      isValid = false;
      formErrors.password = "Please enter Password";
    } else if (inputValid.password.length < 6) {
      isValid = false;
      formErrors.password = "Password must be more than 6 characters";
    }
    setFormError(formErrors);
    return isValid;
  };

  const handleCheck = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      let api = "http://localhost:3500/login";
      axios.get(api).then((response) => {
        let userExist = false;
        for (let i = 0; i < response.data.length; i++) {
          if (
            formData.email === response.data[i].email &&
            formData.password === response.data[i].password
          ) {
            window.location.href = "/deshboard";
            userExist = true;
            localStorage.setItem("email", response.data[i].email);
            break;
          }
        }

        if (!userExist) {
          alert("Wrong email or Password!", "danger");
        }
      });
    }
  };
  return (
    <>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        <div className="container-fluid">
          <div
            className="row h-100 align-items-center justify-content-center"
            style={{ minHeight: " 100vh" }}
          >
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
              <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3 shw-1">
                <form onSubmit={handleSubmit}>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <a href="/" className="">
                      <h3 className="text-primary">
                        <i className="fa fa-hashtag me-2"></i>DASHMIN
                      </h3>
                    </a>
                    <h3>Sign In</h3>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="email"
                      onChange={handleCheck}
                      value={formData.email}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                    <p style={{ color: "red" }}>{formErrors.email}</p>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      className="form-control"
                      type="password"
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                      autoComplete="off"
                      onChange={handleCheck}
                      value={formData.password}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    <p style={{ color: "red" }}>{formErrors.password}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Check me out
                      </label>
                    </div>
                    <a href="/">Forgot Password</a>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary py-3 w-100 mb-4"
                  >
                    Sign In
                  </button>
                  <p className="text-center mb-0">
                    Don't have an Account? <a href="/">Sign Up</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
