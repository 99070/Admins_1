import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";

const Vendor = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [formErrors, setFormError] = useState({});
  const [FormData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    number: "",
  });
  const { firstname, lastname, email, address, city, number } = FormData;

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };
  const validate = () => {
    let inputValid = FormData;
    let formErrors = {};
    let isValid = true;
    const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
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
    setFormError(formErrors);
    return isValid;
  };

  useEffect(() => {
    async function getVendor() {
      try {
        const vendor = await axios.get(`http://localhost:3600/records/${id}`);
        setFormData(vendor.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getVendor();
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios.put(`http://localhost:3600/records/${id}`, FormData);
        navigate("/records");
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
  };

  return (
    <>
      <MainLayout>
        <div className="container-fluid pt-4 px-4">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-sm-10">
              <h4 className="text-primary">Edit Vendor</h4>
              <div className="bg-light rounded h-100 p-4 shw-1">
                <form
                  className="row g-3 needs-validation"
                  onSubmit={(e) => handleEdit(e)}
                >
                  <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom01"
                      onChange={handleChange}
                      value={firstname}
                      name="firstname"
                    />
                    <span style={{ color: "red" }}>{formErrors.firstname}</span>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom02"
                      onChange={handleChange}
                      value={lastname}
                      name="lastname"
                    />
                    <span style={{ color: "red" }}>{formErrors.lastname}</span>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="validationCustom03" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="validationCustom03"
                      onChange={handleChange}
                      value={email}
                      name="email"
                    />
                    <span style={{ color: "red" }}>{formErrors.email}</span>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label">
                      address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom04"
                      onChange={handleChange}
                      value={address}
                      name="address"
                    />
                    <span style={{ color: "red" }}>{formErrors.address}</span>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">
                      City
                    </label>
                    <select
                      className="form-select"
                      id="validationCustom05"
                      onChange={handleChange}
                      value={city}
                      name="city"
                      defaultValue={FormData.city.defaultValue}
                    >
                      <option value="">Choose...</option>
                      <option>Indore</option>
                      <option>Bhopal</option>
                      <option>Ujjain</option>
                    </select>
                    <span style={{ color: "red" }}>{formErrors.city}</span>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="validationCustom06" className="form-label">
                      Mobail No.
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="validationCustom06"
                      onChange={handleChange}
                      value={number}
                      name="number"
                    />
                    <span style={{ color: "red" }}>{formErrors.number}</span>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Vendor;
