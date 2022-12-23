import React, {useState} from "react";
import Cards from "./Cards/Cards";
import Table from "./Table/Table";

import "./MainDash/MainDash.css";
import CentorSidebar from "./CentorSidebar";
const CentorDahboard = () => {
  return (
    <>
    <div className="VendorDashboard">
   <CentorSidebar/>
    <div className="MainDash" style={{marginTop:"5rem"}}>
      <h1 className="SK_Heading"><span style={{color:"#08b305"}}>SK</span> DRESSLAND</h1>
    <Cards/>
    <Table/>
     </div>
    </div>
    </>
  );
};

export default CentorDahboard;