import React, { useState, useEffect, useRef } from "react";
import "./Galary.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import Toggle from "../components/Toggle";
import { useParams } from "react-router-dom";

function PubGallery() {
  const [ProductDetailsData, setAPIData] = useState([]);

  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [increse, setIncrease] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [date,setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const ProductIDReq = useParams();



  useEffect(() => {
    total();
  }, [cart]);

  const total = (ProductDetailsData) => {
    let totalVal = 0;
    cart.forEach((ProductDetails, index) => {
      // <div key={index}>
      totalVal += ProductDetails.mrp;
      setCartTotal(totalVal);
    });
  };

  const addToCart = (ProductDetailsData) => {
    setIncrease(Number(increse) + 1);
    // const MRP = ProductDetailsData.mrp;
    console.log("MRP : " + ProductDetailsData.mrp);
    setCart([...cart, ProductDetailsData]);
    console.log(...cart);
  };

  const removeFromCart = (ProductDetailsData) => {
    if (increse > 0) {
      setIncrease(Number(increse) - 1);
    }
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter(
      (ProductDetailsData) =>
        ProductDetailsData.productID !== ProductDetailsData.productID
    );
    setCart(hardCopy);
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API}ProductMaster/${ProductIDReq.ProductIDReq}`
      )
      .then((response) => {
        setAPIData(response.data);
        // localStorage.setItem("storageData", response.data);
      });
  }, []);


  return (
    <>
      <Toggle />
     
      <div
        className="GalleryApi"
        style={{ backgroundColor: "#7e98bd", height: "100vh" }}
      >
        <div className="float-right mt-3 me-5">
          <Badge color="secondary" badgeContent={increse}>
            <AddShoppingCartIcon
              fontSize="large"
              data-toggle="modal"
              data-target="#exampleModal"
            />
          </Badge>
        </div>
        <div className="row" style={{ marginTop: "5rem" }}>
          <div className="PhotoAPI col-md-6 mt-5">
            <img
              src={ProductDetailsData.productImg1}
              className="img-fluid ProductImage"
            />
          </div>
          <div className="ContentAPI col-md-6">
            <div className="row text-center mt-5">
              <p className="title-up">
                {ProductDetailsData.productCode +
                  " - " +
                  ProductDetailsData.productName}
              </p>
            </div>
            <div className="row  text-center mt-3">
              <h2 className="Cotton_heading">
                {ProductDetailsData.productCode +
                  " - " +
                  ProductDetailsData.productName}
              </h2>
            </div>
            <div className="row text-center">
              <h4 className="Galery_price">
                <tr>
                  <td>Rs. {ProductDetailsData.mrp}</td>
                </tr>
              </h4>
            </div>
            <div className="row">
              <div className="col-md-6 text-white">
                <label for="">Description :-</label>
              </div>
              <div className="col-md-6">
                <p>{ProductDetailsData.productDescription}</p>
              </div>
            </div>
            <div className="row" style={{ marginTop: "5rem" }}>
              <button
                className=" btn-success btn col-md-4"
                onClick={() => addToCart(ProductDetailsData)}
              >
                Add Cart
                <AddCircleOutlineIcon />
              </button>
              <button
                className=" btn-success btn- col-md-4"
                onClick={() => removeFromCart()}
              >
                Remove Cart
                <RemoveCircleOutlineIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Start from here */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="header row">
              <h2 class="modal-title col-md-6" id="exampleModalLabel">
                Cart
              </h2>
              <button
                type="button"
                class="close col-md-6"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <br></br>
            <hr></hr>
            <div class="modal-body">
              <div className="Invoice container">
                <div className="Invoice_Header">
                  <header className="text-white text-center mt-5">
                    Invoice
                  </header>
                </div>
                <div className="Company_Info mt-5">
                  <h2 className="text-dark">SK Dressland</h2>
                  <p className="text-dark">
                    Azamgarh,<br></br>UP,
                  </p>
                  <p className="text-dark">9689567452</p>
                </div>
                <div className="Invoice_Body float-right">
                  <table className="table-responsive table table-striped table-bordered">
                    <tr>
                      <th>#Invoice</th>
                      <td>.....</td>
                    </tr>

                    <tr>
                      <th>#Date</th>
                      <td>{date.toLocaleDateString()}</td>
                    </tr>

                    <tr>
                      <th>#Amount Due</th>
                      <td>Rs. {cartTotal}</td>
                    </tr>
                  </table>
                </div>
                <div className="Invoice_Table">
                  <table className="table-responsive table table-striped table-bordered">
                    <tr
                      className="row tr-dark"
                      style={{ backgroundColor: "#c7fff6" }}
                    >
                      <th className="col-md-2">Sr. No.</th>
                      <th className="col-md-4">Description</th>
                      <th className="col-md-2">Rate</th>
                      <th className="col-md-2">Quantity</th>
                      <th className="col-md-2">Price</th>
                    </tr>

                    <tr className="row">
                      <td className="col-md-2">1</td>
                      <td className="col-md-4">
                        {ProductDetailsData.productDescription}
                      </td>
                      <td className="col-md-2">{ProductDetailsData.mrp}</td>
                      <td className="col-md-2">{increse}</td>
                      <td className="col-md-2">{cartTotal}</td>
                    </tr>
                  </table>
                </div>

                <div className="Payment float-right">
                  <table className="table-responsive table table-striped table-bordered">
                    <tr>
                      <th>#CGST</th>
                      <td>.....</td>
                    </tr>

                    <tr>
                      <th>#SGST</th>
                      <td>.....</td>
                    </tr>

                    <tr>
                      <th>#Total</th>
                      <td>Rs.{cartTotal}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <div class="modal-footer">
              <Link to="/LoginPage">
                <button type="button" class="btn btn-primary btn-lg">
                Pay Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PubGallery;
