import React from "react";
import { Routes, Route } from "react-router-dom";
import Deshboard from "./Pages/Deshboard";
import Vendor from "./Pages/Vendor";
import Supplier from "./Pages/Supplier";
import Editvendor from "./Pages/EditPages/Editvendor";
import VendorRecords from "./Pages/Records/VendorRecords";
import SignIn from "./Pages/SignIn";
import MainServies from "./Pages/services/MainServies";
import SubServies from "./Pages/services/SubServies";
import MainServiesRecords from "./Pages/Records/MainServiesRecords";
import EditMainServies from "./Pages/EditPages/EditMainServies";
import EditSubServies from "./Pages/EditPages/EditSubServies";
import SubServiesRecords from "./Pages/Records/SubServiesRecords";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/deshboard" element={<Deshboard />} />
        <Route path="/records" element={<VendorRecords />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/editvendor/:id" element={<Editvendor />} />
        <Route path="/mainservies" element={<MainServies />} />
        <Route path="/subservies" element={<SubServies />} />
        <Route path="/main_servies_record" element={<MainServiesRecords />} />
        <Route path="/sub_servies_record" element={   <SubServiesRecords/>} />
        <Route path="/edit_main_servies/:id" element={<EditMainServies />} />
        <Route path="/ edit_sub_servies/:id" element={ <EditSubServies/>} />
       
       </Routes>
    </>
  );
};

export default App;
