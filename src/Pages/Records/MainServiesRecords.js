import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import _ from "lodash";

import MainLayout from "../../Layout/MainLayout";
const pageSize = 3;
const MainServiesRecords = () => {
  const [details, SetDetails] = useState([]);
  const [paginated, setPaginated] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  // const [status, setStatus] = useState(false);
  useEffect(() => {
    showdata();
  }, []);
  const showdata = () => {
    let Data = "http://localhost:4000/servies";
    axios.get(Data).then((res) => {
      SetDetails(res.data);
      // console.log(res.data);

      setPaginated(_(res.data).slice(0).take(pageSize).value());
    });
  };

  const handleDelete = (id) => {
    let Data = `http://localhost:4000/servies/${id}`;
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
              <h6 className="mb-4">Main-servies-Records</h6>
              {!paginated ? (
                "No data found"
              ) : (
                <div className="table-responsive">
                  <table className="table table-striped  ">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Titel</th>
                        <th scope="col">Description</th>
                        <th scope="col">Start-Date</th>
                        <th scope="col">End-Date</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginated.map((e) => (
                        <tr key={e.id}>
                          <th>{e.id}</th>
                          <td>
                            <img
                              width={100}
                              height={80}
                              src={e.imgPath}
                              alt={e.imgPath}
                            />
                            {/* <img className="rounded-circle flex-shrink-0" src="img/user.jpg" width={40} height={40} alt="" /> */}
                          </td>
                          <td>{e.formData.username}</td>
                          <td>{e.formData.title}</td>
                          <td>{e.formData.description}</td>
                          <td>{e.formData.start_date}</td>
                          <td>{e.formData.end_date}</td>
                          <td>
                            <Link
                              to={`/edit_main_servies/${e.id}`}
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
            <nav className="d-flex justify-content-center ">
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

export default MainServiesRecords;
