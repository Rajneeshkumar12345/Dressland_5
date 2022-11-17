import React, {useState} from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";


const MainDash = () => {
 

  return (
    <div className="MainDash">
      <h1><span style={{color:"#08b305"}}>SK</span> DRESSLAND</h1>
      <Cards />
      <Table />

      
     </div>
  );
};

export default MainDash;