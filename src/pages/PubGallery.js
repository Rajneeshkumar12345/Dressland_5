import React, { useState, useEffect } from "react";
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
  const [increse, setIncrease] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [date,setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const ProductIDReq = useParams();


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

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
        className="section-fluid-main"
        style={{ backgroundColor: "#7e98bd" }}
      >
        <div className="section">
          <div className="Galaery_API_Image">
            <img
              src={ProductDetailsData.productImg1}
              height="200"
              width="100"
            />
          </div>
          <div className="info-wrap mob-margin">
            <p className="title-up">
              {ProductDetailsData.productCode +
                " - " +
                ProductDetailsData.productName}
            </p>
            <div className="float-right">
              <Badge color="secondary" badgeContent={increse}  onClick={handleShow}>
                <AddShoppingCartIcon
                  fontSize="large"
                  data-toggle="modal"
                   data-target="#exampleModal"
                />
              </Badge>
            </div>

            <h2 className="Cotton_heading">
              {ProductDetailsData.productCode +
                " - " +
                ProductDetailsData.productName}
            </h2>
            <h4 className="Galery_price">
              <tr>
                <td>Rs. {ProductDetailsData.mrp}</td>
              </tr>
            </h4>
            <div className="section-fluid">
              <input
                className="desc-btn"
                type="radio"
                id="desc-1"
                name="desc-btn"
                checked
              />
              <label for="desc-1">Description</label>
              <input
                className="desc-btn"
                type="radio"
                id="desc-2"
                name="desc-btn"
              />
              <label for="desc-2">Details</label>
              <div className="section-fluid desc-sec accor-1">
                <p>{ProductDetailsData.productDescription}</p>
              </div>
              <div className="section-fluid desc-sec accor-2">
                <div className="section-inline">
                  <p>
                    <span>35</span>cm<br></br>Lenght
                  </p>
                </div>
                <div className="section-inline">
                  <p>
                    <span>25</span>cm<br></br>Width
                  </p>
                </div>
                <div className="section-inline">
                  <p>
                    <span>45</span>cm<br></br>Height
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix"></div>
          <div className="info-wrap">
            <div className="Card_quantity row">
              <button
                className=" btn-success btn-sm col-md-5 mt-4"
                onClick={() => addToCart(ProductDetailsData)}
              >
                Add Cart
                <AddCircleOutlineIcon />
              </button>
              <button
                className=" btn-success tn-sm col-md-5 mt-4"
                onClick={(ProductDetailsData) =>
                  removeFromCart(ProductDetailsData)
                }
              >
                Remove Cart
                <RemoveCircleOutlineIcon />
              </button>
            </div>
          </div>

          {/* <div className="cart ms-2">
          <h4>Price:-</h4>
              <div>{listItems}</div>
               <div>{cartItems}</div>
              <div className="total">Total Price:{cartTotal}</div>
          </div> */}
        </div>
      </div>

      {/* Modal Start from here */}
      <div
      show={show} onHide={handleClose}
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
              <h2
                class="modal-title col-md-6 text-center"
                id="exampleModalLabel"
              >
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
              {/* <h4>Total Price:-</h4>
              <div className="total">Total:{cartTotal}</div> */}
              <div className="Invoice container">
                <div className="Invoice_Header">
                  <header className="text-white text-center mt-5">
                    Invoice
                  </header>
                </div>
                <div className="Company_Info mt-5">
                  <h2 className="text-dark">SK Dressand</h2>
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
                      <td className="col-md-4">{ProductDetailsData.productDescription}</td>
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
