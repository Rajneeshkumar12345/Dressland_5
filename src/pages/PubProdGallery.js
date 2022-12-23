import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductGallery.css";
import Toggle from "../components/Toggle";
import axios from "axios";
import LoginPage from "../components/LoginPage";
import VendorSidebar from "../components/VendorSidebar";
import CentorSidebar from "../components/CentorSidebar";

function PubProdGallery() {
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
    
   

    return (
    <> 
  <Toggle/>
      <div className="home" style={{ backgroundColor: "#3e5e78" }}>
        {/* 10 Card Container start from here */}
        <h1 className="text-center gallery_heading text-white py-2">
          Our Product Gallery{" "}
        </h1>
        <div className="container">
          <div className="row">
            {/* Card Number 1 */}
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
                      <Link
                        to={"/PubGallery/" + data.productID}
                        className="btn btn-dark"
                      >
                        View Details {">>"}
                      </Link>
                      {/* <Link to={"/ProductGallery/" + item.id}><img src={ item.images[0]} alt="listing" /></Link> */}
                    </div>
                  </div>
                </div>
              );
            })}
            ;{/* Card Number 9 */}
            {/* <div className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12">
              <div className="card">
                <div className="card-img-wrapper">
                  <img
                    className="card-img-top"
                    src={Carosol3}
                    alt="not found"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Fabric Cloths</h5>
                  <p className="card-text">
                    Fabric is cloth or other material produced by weaving
                    together cotton, nylon, wool, silk, or other threads....
                  </p>
                
                      <br></br>
                  <br></br>
                  <Link to="/Galary" className="btn btn-dark">
                  View Details {'>>'}
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PubProdGallery;
