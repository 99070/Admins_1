import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-light navbar-light">
          <Link to="/" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary">
              <i className="fa fa-hashtag me-2"></i>
              DASHMIN
            </h3>
          </Link>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img className="rounded-circle rc" src="img/user.jpg" alt="img" />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Jhon Doe</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <Link to="/deshboard" className="nav-item nav-link active my-1">
              <i className="fa fa-tachometer-alt me-2"></i>Dashboard
            </Link>
            <div className="nav-item dropdown ">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-laptop me-2"></i>Servies
              </a>
              <div className="dropdown-menu bg-transparent border-0">
                <Link to="/mainservies" className="dropdown-item text-center">
                  <b>Main-Services</b>
                </Link>
                <Link to="/subservies" className="dropdown-item text-center">
                  <b>Sub-Services</b>
                </Link>
              </div>
            </div>

            <Link to="/vendor" className="nav-item nav-link ">
              <i className="fa fa-keyboard me-2"></i>Vendor
            </Link>
            <Link
              to="/supplier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        "
              className="nav-item nav-link "
            >
              <i className="fa fa-th me-2"></i>Supplier
            </Link>
            <div className="nav-item dropdown ">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-table me-2"></i>Tables
              </a>
              <div className="dropdown-menu bg-transparent border-0">
                <Link to="/records" className="nav-item nav-link text-left ">
                  <b>Vendor Records</b>
                </Link>
                <Link
                  to="/main_servies_record"
                  className="nav-item nav-link text-left "
                >
                  <b>Main Servies Records</b>
                </Link>
                <Link
                  to="/sub_servies_record"
                  className="nav-item nav-link text-left "
                >
                  <b>Sub Servies Records</b>
                </Link>
              </div>
            </div>
            <Link to="/" className="nav-item nav-link ">
              <i className="fa fa-chart-bar me-2"></i>Charts
            </Link>
            <Link to="/" className="nav-item nav-link ">
              <i className="bi  bi-box-arrow-in-right me-2"></i>SignIn
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
