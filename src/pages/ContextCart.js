import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./ProductGallery.css";
import axios from "axios";
import VendorSidebar from "../components/VendorSidebar";
import CentorSidebar from "../components/CentorSidebar";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge } from "@mui/material";
import { data } from "jquery";
import Items from "./Items";
import {CartContext} from './ProductGallery'


function ContextCart({productID}) {
  const [APIData, setAPIData] = useState([]);
  const [UserData, setUserData] = useState([]);
  

  useEffect(() => {
    axios
      .get(`http://nias.codelovertechnology.com/ProductMaster`)
      .then((response) => {
        setAPIData(response.data);
        setUserData(localStorage.getItem("result"));
      });
  }, []);

  var CurrentUserRole = localStorage.getItem("currentUserRole");

  return (
    <>
      {CurrentUserRole == "VENDOR" ? <VendorSidebar /> : <CentorSidebar />}
      <div className="float-right mt-3 me-4">
        <Badge
          color="secondary"
        >
          <AddShoppingCartIcon
            fontSize="large"
            data-toggle="modal"
            data-target="#exampleModal"
          />
        </Badge>
      </div>
      <div className="home" style={{ backgroundColor: "#3e5e78" }}>
        <h1 className="text-center gallery_heading text-white py-2">
          Our Product Gallery{" "}
        </h1>
        <div className="container">
          <div className="row">
            {APIData.map((data) => {
              return (
                <Items key={data.productID} {...data}/>
              );
            })};
           
          </div>
        </div>
      </div>
    </>
  );
}

export default ContextCart;
