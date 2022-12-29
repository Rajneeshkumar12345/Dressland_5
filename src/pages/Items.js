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
import CartContext from "./ProductGallery";


function Items({productID}) {
  const [APIData, setAPIData] = useState([]);
  const [UserData, setUserData] = useState([]);
 
  const quantity = 0;
  const {increament} = useContext(CartContext)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}ProductMaster`)
      .then((response) => {
        setAPIData(response.data);
        setUserData(localStorage.getItem("result"));
      });
  }, []);

  var CurrentUserRole = localStorage.getItem("currentUserRole");

  return (
    <>
      {CurrentUserRole == "VENDOR" ? <VendorSidebar /> : <CentorSidebar />}
      {/* <div className="float-right mt-3 me-4">
        <Badge
          color="secondary"
        >
          <AddShoppingCartIcon
            fontSize="large"
            data-toggle="modal"
            data-target="#exampleModal"
          />
        </Badge>
      </div> */}
      <div className="home" style={{ backgroundColor: "#3e5e78" }}>
        <div className="container">
          <div className="row">
            {APIData.map((data) => {
              return (
                <div
                  className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-sm-12"
                  style={{ marginTop: "3rem" }}
                >
                  <div className="card">
                    <div className="card-img-wrapper">
                      <img
                        className="card-img-top"
                        src={data.productImg1}
                        alt="not found"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        {data.productCode + "-" + data.productName}
                      </h5>
                      <p className="card-text">{data.productDescription}</p>
                      <br></br>
                      <div className="Add_Cart">
                        <button className="btn btn-success">Add to Cart</button>
                        <input
                          type="number"
                          className="col-md-3 mt-3"
                          placeholder={quantity}
                        ></input>
                        <AddCircleOutlineIcon
                          className="ms-2"
                         onClick={() => increament(productID)}
                        />
                        <RemoveCircleOutlineIcon
                          className="ms-2"
                          
                        />
                      </div>
                      <Link
                        to={"/Galary/" + data.productID}
                        className="btn btn-dark mt-3"
                      >
                        View Details {">>"}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })};
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
