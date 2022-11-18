import React from "react";
import "./Galary.css";
import Logo from "../images/Logo.png";

function Galary() {
  return (
    <>
      <div className="section-fluid-main">
        <div className="section">
          <div className="info-wrap mob-margin">
            <p className="title-up">Modern Fabric</p>
            <h2>Cotton Fabric</h2>
            <h4 className="Galery_price">
              Rs. 174 <span>Rs. 237</span>
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
                <p>
                  This is very good fabric and also it is very cheap price,
                  comfort, lifelong etc.
                </p>
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
                {/* <div className="section-inline">
                  <p>
                    <span>10</span>kg<br></br>Weight
                  </p>
                </div> */}
              </div>
            </div>
            <h5>Choose upholstery:</h5>
          </div>
          <div className="clearfix"></div>
          <input
            className="color-btn for-color-1"
            type="radio"
            id="color-1"
            name="color-btn"
            checked
          />
          <label className="first-color" for="color-1"></label>
          <input
            className="color-btn for-color-2"
            type="radio"
            id="color-2"
            name="color-btn"
          />
          <label className="color-2" for="color-2"></label>
          <input
            className="color-btn for-color-3"
            type="radio"
            id="color-3"
            name="color-btn"
          />
          <label className="color-3" for="color-3"></label>
          <input
            className="color-btn for-color-4"
            type="radio"
            id="color-4"
            name="color-btn"
          />
          <label className="color-4" for="color-4"></label>
          <input
            className="color-btn for-color-5"
            type="radio"
            id="color-5"
            name="color-btn"
          />
          <label className="color-5" for="color-5"></label>
          <input
            className="color-btn for-color-6"
            type="radio"
            id="color-6"
            name="color-btn"
          />
          <label className="color-6" for="color-6"></label>
          <div className="clearfix"></div>
          <div className="info-wrap">
            <a href="#" className="_btn">
              <i className="uil uil-shopping-cart icon"></i> Add To Cart
            </a>
            <div className="Card_quantity">
            <label for="item-1-quantity" className="labal-Stock text-white">
              Quantity:
            </label>
            <input
              type="text"
              className="AddCert_number"
              name="item-1-quantity"
              id="item-1-quantity"
              value="1"
            />
            </div>
      
          </div>

          <div className="img-wrap chair-1"></div>
          <div className="img-wrap chair-2"></div>
          <div className="img-wrap chair-3"></div>
          <div className="img-wrap chair-4"></div>
          <div className="img-wrap chair-5"></div>
          <div className="img-wrap chair-6"></div>
          <div className="back-color"></div>
          <div className="back-color chair-2"></div>
          <div className="back-color chair-3"></div>
          <div className="back-color chair-4"></div>
          <div className="back-color chair-5"></div>
          <div className="back-color chair-6"></div>

          <a href="/" className="logo" target="_blank">
            <img src={Logo} alt="company_Logo_here" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Galary;
