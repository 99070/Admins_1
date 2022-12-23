import React, { useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import axios from "axios";

const MainServies = () => {
  const [formErrors, setFormError] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    description: "",
    start_date: "",
    end_date: "",
  });
  const [imgPath, setImgPath] = useState("");

  const validate = () => {
    let inputValid = formData;
    let formErrors = {};
    let isValid = true;
    if (!inputValid.username) {
      isValid = false;
      formErrors.username = "Name field is required!";
    }
    if (!inputValid.title) {
      isValid = false;
      formErrors.title = "Title field is required!";
    }
    if (!inputValid.description) {
      isValid = false;
      formErrors.description = "Description field is required!";
    }
    if (!inputValid.start_date) {
      isValid = false;
      formErrors.start_date = "Date is required!";
    }
    if (!inputValid.end_date) {
      isValid = false;
      formErrors.end_date = "Date is required!";
    }
    if (!imgPath) {
      isValid = false;
      formErrors.imgPath = "Image file is required!";
    }
    setFormError(formErrors);
    return isValid;
  };

  const handleCheck = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImg = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    setImgPath(file);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    let Result = { formData, imgPath };
    console.log("Result", Result);
    if (validate()) {
      const ImgData = new FormData();
      ImgData.append("File", imgPath);

      let api = "http://localhost:4000/servies";
      axios
        .post(api, {
          formData,
          ImgData,
        })
        .then((res) => {
          console.log(res.data);
          // window.location.href = "/main_servies_record";
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
              <h4 className="text-primary">Main-Servies</h4>
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
                      value={FormData.username}
                      name="username"
                    />
                    <p style={{ color: "red" }}>{formErrors.username}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleCheck}
                      value={FormData.title}
                      name="title"
                    />
                    <p style={{ color: "red" }}>{formErrors.title}</p>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Description</label>
                    <textarea
                      type="text"
                      className="form-control"
                      rows={2}
                      onChange={handleCheck}
                      value={FormData.description}
                      name="description"
                    />
                    <p style={{ color: "red" }}>{formErrors.description}</p>
                  </div>

                  <div className="col-md-3">
                    <label className="form-label">start-Date</label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={handleCheck}
                      value={FormData.start_date}
                      name="start_date"
                    />
                    <p style={{ color: "red" }}>{formErrors.start_date}</p>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">End-Date</label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={handleCheck}
                      value={FormData.end_date}
                      name="end_date"
                    />
                    <p style={{ color: "red" }}>{formErrors.end_date}</p>
                  </div>
                  <div className="col-md-3 ">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImg}
                      style={{ display: "none" }}
                      id="contained-button-file"
                      name="Img"
                    />
                    <label htmlFor="contained-button-file">
                      <span className="btn bg-red ">
                        <i className="bi bi-file-arrow-up"></i> Upload Image
                      </span>
                    </label>
                    <p style={{ color: "red" }}>{formErrors.imgPath}</p>
                  </div>
                  <div className="col">
            
                  </div>
                  <div className="col">
                    {imgPath ? (
                      <img
                        className="img-200"
                        src={URL.createObjectURL(imgPath)}
                        alt={imgPath}
                      />
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
      </MainLayout>
    </>
  );
};

export default MainServies;
