import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import _ from "lodash";

const pageSize = 5;
const VendorRecords = () => {
  const [details, SetDetails] = useState([]);
  const [paginated, setPaginated] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  // const [status, setStatus] = useState(false);
  useEffect(() => {
    showdata();
  }, []);
  const showdata = () => {
    let Data = "http://localhost:3600/records";
    axios.get(Data).then((res) => {
      console.log(res);
      
      SetDetails(res.data);
      setPaginated(_(res.data).slice(0).take(pageSize).value());
    });
  };

  const handleDelete = (id) => {
    let Data = `http://localhost:3600/records/${id}`;
    axios.delete(Data).then((res) => {
      showdata();
    });
  };
  const handleStatus = (e) => {
    // setStatus(true);
  };
  const pageCount = details ? Math.ceil(details.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const Paginated = _(details).slice(startIndex).take(pageSize).value();
    setPaginated(Paginated);
  };
  return (
    <>
      <MainLayout>
        <div className="container-fluid pt-4 px-4">
          <div className="col-12">
            <div className=" rounded h-100 p-4 ">
              <h6 className="mb-4">Vendor Records</h6>
              {!paginated ? (
                "No data found"
              ) : (
                <div className="table-responsive">
                  <table className="table table-striped  ">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Aadhaar Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Number</th>
                        <th scope="col">city</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginated.map((e) => (
                        <tr key={e.id}>
                          <th>{e.id}</th>
                          <td>
                            {e.firstname} {e.lastname}
                          </td>
                          <td>{e.email}</td>
                          <td>{e.aadhar}</td>
                          <td>{e.address}</td>
                          <td>{e.number}</td>
                          <td>{e.city}</td>
                          <td>
                            <Link
                              to={`/editvendor/${e.id}`}
                              className="btn btn-primary mx-1 my-1"
                            >
                              <i className="bi bi-pencil-fill"></i>
                            </Link>

                            <button
                              type="button"
                              className="btn bg-red mx-1 my-1"
                              onClick={() => handleDelete(e.id)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                            <button
                              type="button"
                              className="btn bg-green mx-1 my-1"
                              onClick={handleStatus}
                            >
                              <i className="bi bi-toggle2-off "></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                  )}
            </div>
            <nav className="d-flex justify-content-center my-3">
              <ul className="pagination">
                {pages.map((page, index) => (
                  <li
                    key={index}
                    className={
                      page === currentPage ? "page-item active" : "page-item"
                    }
                  >
                    <p className="page-link" onClick={() => pagination(page)}>
                      {page}
                    </p>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default VendorRecords;
