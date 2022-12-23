import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import MainLayout from "../Layout/MainLayout";

const Vendor = () => {
  const [formErrors, setFormError] = useState({});
  const [File, setFile] = useState("");
  const [Document, setDocumnet] = useState("");
  const [FormData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    number: "",
    file: "",
    password: "",
    confirm_password: "",
  });
  const handleFile = (e) => {
    const file = e.target.files[0];
    let a = URL.createObjectURL(file);
    setFile(a);
  };

  const handleDocx = (e) => {
    const userDocx = e.target.value;
    setDocumnet(userDocx);
  };
  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };
  const validate = () => {
    let inputValid = FormData;
    let formErrors = {};
    let isValid = true;
    const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    // var regexp = /^\d{12}$/;
    // if (!inputValid.aadhar) {
    //   isValid = false;
    //   formErrors.aadhar = "Aadhar Number field is required!";
    // } else if (!regexp.test(inputValid.aadhar)) {
    //   isValid = false;
    //   formErrors.aadhar = "This is not a valid Aadhar Number";
    // }
    if (!inputValid.firstname) {
      isValid = false;
      formErrors.firstname = "Firstname field is required!";
    }
    if (!inputValid.lastname) {
      isValid = false;
      formErrors.lastname = "Lastname field is required!";
    }
    if (!inputValid.email) {
      isValid = false;
      formErrors.email = "Email field is required ";
    } else if (!reg.test(inputValid.email)) {
      isValid = false;
      formErrors.email = "This is not a valid email";
    }
    if (!inputValid.address) {
      isValid = false;
      formErrors.address = "Address field is required!";
    }
    if (!inputValid.city) {
      isValid = false;
      formErrors.city = "City field is required!";
    }
    if (!inputValid.number) {
      isValid = false;
      formErrors.number = "Number field is required!";
    } else if (inputValid.number.length !== 10) {
      isValid = false;
      formErrors.number = "Number must be 10 characters";
    }
    if (!inputValid.password) {
      isValid = false;
      formErrors.password = "Password field is required!";
    } else if (inputValid.password.length < 6) {
      isValid = false;
      formErrors.password = "Password must be more than 6 characters";
    }
    if (!inputValid.confirm_password) {
      isValid = false;
      formErrors.confirm_password = "Confirm Password field is required!";
    } else if (inputValid.confirm_password.length < 6) {
      isValid = false;
      formErrors.confirm_password = "Password must be more than 6 characters";
    } else if (inputValid.password !== inputValid.confirm_password) {
      isValid = false;
      formErrors.confirm_password =
        "Confirm password did not match:Please try again...";
    }
    if (!Document) {
      isValid = false;
      formErrors.Document = "Ducument field is required!";
    }
    if (!File) {
      isValid = false;
      formErrors.File = "File field is required!";
    }
    setFormError(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      let api = "http://localhost:3600/records";
      axios
        .post(api, FormData)
        .then((res) => {
          console.log(res.data);
          window.location.href = "/records";
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <>
      <MainLayout>
        <div className="container-fluid pt-4 px-4">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-sm-10">
              <h4 className="text-primary">Add New Vendor</h4>
              <div className="bg-light rounded h-100 p-4 shw-1">
                <form
                  className="row g-3 needs-validation"
                  onSubmit={handleSubmit}
                >
                  <div className="col-md-4">
                    <label className="form-label">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      value={FormData.firstname}
                      name="firstname"
                    />
                    <span style={{ color: "red" }}>{formErrors.firstname}</span>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      value={FormData.lastname}
                      name="lastname"
                    />
                    <span style={{ color: "red" }}>{formErrors.lastname}</span>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={handleChange}
                      value={FormData.email}
                      name="email"
                    />
                    <span style={{ color: "red" }}>{formErrors.email}</span>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">address</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      value={FormData.address}
                      name="address"
                    />
                    <span style={{ color: "red" }}>{formErrors.address}</span>
                  </div>

                  <div className="col-md-3">
                    <label className="form-label">City</label>
                    <select
                      className="form-select"
                      onChange={handleChange}
                      value={FormData.city}
                      name="city"
                      defaultValue={FormData.city.defaultValue}
                    >
                      <option defaultValue="">Choose...</option>
                      <option>Indore</option>
                      <option>Bhopal</option>
                      <option>Ujjain</option>
                    </select>
                    <span style={{ color: "red" }}>{formErrors.city}</span>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Mobail No.</label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={handleChange}
                      value={FormData.number}
                      name="number"
                    />
                    <span style={{ color: "red" }}>{formErrors.number}</span>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={handleChange}
                      value={FormData.password}
                      name="password"
                      autoComplete="off"
                    />
                    <span style={{ color: "red" }}>{formErrors.password}</span>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={handleChange}
                      value={FormData.confirm_password}
                      name="confirm_password"
                      autoComplete="off"
                    />
                    <span style={{ color: "red" }}>
                      {formErrors.confirm_password}
                    </span>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Document</label>
                    <select
                      className="form-select"
                      onChange={(e) => handleDocx(e)}
                      name="ducument"
                    >
                      <option value="">Choose your Documnet type</option>
                      <option value="1">Aadhaar Number</option>
                      <option value="">Passport</option>
                      <option value="">10th</option>
                    </select>
                    <span style={{ color: "red" }}>{formErrors.Document}</span>
                  </div>
                  {Document === "1" && (
                    <div className="col-md-4">
                      <label className="form-label">Aadhaar Number</label>
                      <input
                        type="number"
                        className="form-control"
                        name="aadhar"
                        autoComplete="off"
                      />
                    </div>
                  )}

                  <div className="col-md-3 my-5">
                    <input
                      onChange={handleFile}
                      name="file"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      id="contained-button-file"
                    />
                    <label
                      className="lableFile"
                      htmlFor="contained-button-file"
                    >
                      <span className="btn  bg-red ">
                        <i className="bi bi-file-arrow-up"></i> Upload Image
                      </span>
                    </label>
                    <p style={{ color: "red" }}>{formErrors.File}</p>
                  </div>
                  <div className="col ">
                    {File ? (
                      <img className="srcfile" src={File} alt={File} />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </MainLayout>
    </>
  );
};

export default Vendor;
