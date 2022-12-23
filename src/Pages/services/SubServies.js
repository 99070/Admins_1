import React, { useState } from "react";
import MainLayout from "../../Layout/MainLayout";

const SubServies = () => {
  const [formErrors, setFormError] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    document: "",
    description: "",
  });
  const [img, setImg] = useState("");

  const handleImg = (e) => {
    const file = e.target.files[0];
    let a = URL.createObjectURL(file);
    setImg(a);
  };
  const handleCheck = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let inputValid = formData;
    let formErrors = {};
    let isValid = true;
    if (!inputValid.username) {
      isValid = false;
      formErrors.username = "Name field is required!";
    }

    if (!inputValid.description) {
      isValid = false;
      formErrors.description = "Description field is required!";
    }
    if (!inputValid.document) {
      isValid = false;
      formErrors.document = "Document field is required!";
    }
    if (!img) {
      isValid = false;
      formErrors.img = "Image file is required!";
    }
    setFormError(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  return (
    <>
      <MainLayout>
        <div className="container-fluid pt-4 px-4">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-sm-10">
              <h4 className="text-primary">Sub-Servies</h4>
              <div className="bg-light rounded h-100 p-4 shw-1">
                <form
                  className="row g-3 needs-validation"
                  onSubmit={handleSubmit}
                >
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleCheck}
                      name="username"
                      value={""}
                    />
                    <p style={{ color: "red" }}>{formErrors.username}</p>
                  </div>
                  <div className="col-md-4 mx-3">
                    <label className="form-label">Document</label>
                    <select
                      className="form-select"
                      onChange={handleCheck}
                      name="ducument"
                      value={""}
                    >
                      <option value="">Choose services</option>
                      <option value="">123</option>
                      <option value="">123</option>
                      <option value="">123</option>
                      <option value="">123</option>
                      <option value="">123</option>
                    </select>
                    <p style={{ color: "red" }}>{formErrors.document}</p>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Description</label>
                    <textarea
                      onChange={handleCheck}
                      type="text"
                      className="form-control"
                      rows={3}
                    />
                    <p style={{ color: "red" }}>{formErrors.description}</p>
                  </div>

                  <div className="col-md-3 my-5 mx-2">
                    <input
                      className="form-control"
                      type="file"
                      accept="image/*"
                      onChange={handleImg}
                      style={{ display: "none" }}
                      id="contained-button-file"
                      multiple
                    />
                    <label
                      className="lableFile"
                      htmlFor="contained-button-file"
                    >
                      <span className="btn bg-red ">
                        <i className="bi bi-file-arrow-up"></i> Upload Image
                      </span>
                    </label>
                    <p style={{ color: "red" }}>{formErrors.img}</p>
                  </div>
                  <div className="col-md-3">
                    {img ? <img className="img-200" src={img} alt={img} /> : ""}
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
      </MainLayout>
    </>
  );
};

export default SubServies;
