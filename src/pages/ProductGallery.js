import React from "react";
import { Link } from "react-router-dom";
import "./ProductGallery.css";
import Cloth1 from "../images/Cloth1.jpg";
import Cloth2 from "../images/Cloth2.jpg";
import Cloth3 from "../images/Cloth3.jpg";
import Cloth4 from "../images/Cloth4.jpg";
import Cloth5 from "../images/Cloth5.jpg";
import Cloth6 from "../images/Cloth6.jpg";
import Cloth7 from "../images/Cloth7.webp";
import Cloth8 from "../images/Cloth8.jpg";
import Carosol3 from "../images/Carosol3.jpg";
import Toggle from "../components/Toggle";
function ProductGallery() {
  return (
    <>
    <Toggle/>
      <div className="home" style={{ backgroundColor: "#3e5e78" }}>
        {/* 10 Card Container start from here */}
        <h1 className="text-center gallery_heading text-white py-2">Our Product Gallery </h1>
        <div className="container">
          <div className="row">
            {/* Card Number 1 */}
            <div
              className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-sm-12"
              style={{ marginTop: "3rem" }}
            >
              <div className="card">
                <div className="card-img-wrapper">
                  <img
                    className="card-img-top"
                    src={Cloth1}
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
                  {/* <a href="/Explore" className="btn btn-primary">
                      View Details
                    </a> */}
                  <Link to="/Galary" className="btn btn-dark">
                    View Details {'>>'}
                  </Link>
                  {/* <Link to={"/ProductGallery/" + item.id}><img src={ item.images[0]} alt="listing" /></Link> */}
                </div>
              </div>
            </div>

            {/* Card Number 2 */}

            <div
              className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-sm-12"
              style={{ marginTop: "3rem" }}
            >
              <div className="card">
                <div className="card-img-wrapper">
                  <img
                    className="card-img-top"
                    src={Cloth2}
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
                  {/* <a href="/Galary" className="btn btn-primary">
                      View Details
                    </a> */}
                  <Link to="/Galary" className="btn btn-dark">
                  View Details {'>>'}
                  </Link>
                </div>
              </div>
            </div>

            {/* Card Number 3 */}

            <div
              className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-sm-12"
              style={{ marginTop: "3rem" }}
            >
              <div className="card">
                <div className="card-img-wrapper">
                  <img
                    className="card-img-top"
                    src={Cloth3}
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
                  {/* <a href="/Galary" className="btn btn-primary">
                      View Details
                    </a> */}
                  <Link to="/Galary" className="btn btn-dark">
                  View Details {'>>'}
                  </Link>
                </div>
              </div>
            </div>

            {/* Card Number 4 */}

            <div className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12">
              <div className="card">
                <div className="card-img-wrapper">
                  <img
                    className="card-img-top"
                    src={Cloth4}
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
                  {/* <a href="/Android" className="btn btn-primary">
                      View Details
                    </a> */}
                  <Link to="/Android" className="btn btn-dark">
                  View Details {'>>'}
                  </Link>
                </div>
              </div>
            </div>

            {/* Card Number 5 */}

            <div className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12">
              <div className="card">
                <div className="card-img-wrapper">
                  <img
                    className="card-img-top"
                    src={Cloth5}
                    alt="not found"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Fabric Cloths</h5>
                  <p className="card-text">
                    Fabric is cloth or other material produced by weaving
                    together cotton, nylon, wool, silk, or other threads....
                  </p>
                  {/* <a href="/Outsourcing" className="btn btn-primary">
                      View Details
                    </a> */}
                    <br></br>
                    <br></br>
                  <Link to="/Outsourcing" className="btn btn-dark">
                  View Details {'>>'}
                  </Link>
                </div>
              </div>
            </div>

            {/* Card Number 6 */}

            <div className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12">
              <div className="card">
                <div className="card-img-wrapper">
                  <img
                    className="card-img-top"
                    src={Cloth6}
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
                  {/* <a href="/Galary" className="btn btn-primary">
                      View Details
                    </a> */}
                  <Link to="/Galary" className="btn btn-dark">
                  View Details {'>>'}
                  </Link>
                </div>
              </div>
            </div>

            {/* Card Number 7 */}
            <div className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12">
              <div className="card">
                <div className="card-img-wrapper">
                  <img
                    className="card-img-top"
                    src={Cloth7}
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
                  {/* <a href="/Galary" className="btn btn-primary">
                      View Details
                    </a> */}
                  <Link to="/Galary" className="btn btn-dark">
                  View Details {'>>'}
                  </Link>
                </div>
              </div>
            </div>

            {/* Card number 8 */}
            <div className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12">
              <div className="card">
                <div className="card-img-wrapper">
                  <img
                    className="card-img-top "
                    src={Cloth8}
                    height="400"
                    alt="not found"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Fabric Cloths</h5>
                  <p className="card-text">
                    Fabric is cloth or other material produced by weaving
                    together cotton, nylon, wool, silk, or other threads....
                  </p>
                  {/* <a href="/Galary" className="btn btn-primary">
                      View Details
                    </a> */}
                      <br></br>
                  <br></br>
                  <Link to="/Galary" className="btn btn-dark">
                  View Details {'>>'}
                  </Link>
                </div>
              </div>
            </div>

            {/* Card Number 9 */}
            <div className="card-wrapper card-image-title-description col-lg-4 col-md-6 col-xs-12">
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
                  {/* <a href="/Galary" className="btn btn-primary">
                      View Details
                    </a> */}
                      <br></br>
                  <br></br>
                  <Link to="/Galary" className="btn btn-dark">
                  View Details {'>>'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductGallery;
