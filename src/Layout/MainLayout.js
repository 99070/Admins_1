import React from "react";
// import Spinner from "../components/Spinner";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const MainLayout = (props) => {
  return (
    <>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        {/* <Spinner /> */}
      
        <Sidebar />
        <div className="content">
          <Topbar />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
