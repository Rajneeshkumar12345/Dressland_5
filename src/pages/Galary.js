import React from "react";
import "./Galary.css";
import Logo from "../images/Logo.png";

function Galary() {
  return (
    <>
      <div class="section-fluid-main">
        <div class="section">
          <div class="info-wrap mob-margin">
            <p class="title-up">Modern Fabric</p>
            <h2>Cotton Fabric</h2>
            <h4 className="Galery_price">
              Rs. 174 <span>Rs. 237</span>
            </h4>
            <div class="section-fluid">
              <input
                class="desc-btn"
                type="radio"
                id="desc-1"
                name="desc-btn"
                checked
              />
              <label for="desc-1">Description</label>
              <input
                class="desc-btn"
                type="radio"
                id="desc-2"
                name="desc-btn"
              />
              <label for="desc-2">Details</label>
              <div class="section-fluid desc-sec accor-1">
                <p>
                  This is very good fabric and also it is very cheap price,
                  comfort, lifelong etc.
                </p>
              </div>
              <div class="section-fluid desc-sec accor-2">
                <div class="section-inline">
                  <p>
                    <span>35</span>cm<br></br>Lenght
                  </p>
                </div>
                <div class="section-inline">
                  <p>
                    <span>25</span>cm<br></br>Width
                  </p>
                </div>
                <div class="section-inline">
                  <p>
                    <span>45</span>cm<br></br>Height
                  </p>
                </div>
                {/* <div class="section-inline">
                  <p>
                    <span>10</span>kg<br></br>Weight
                  </p>
                </div> */}
              </div>
            </div>
            <h5>Choose upholstery:</h5>
          </div>
          <div class="clearfix"></div>
          <input
            class="color-btn for-color-1"
            type="radio"
            id="color-1"
            name="color-btn"
            checked
          />
          <label class="first-color" for="color-1"></label>
          <input
            class="color-btn for-color-2"
            type="radio"
            id="color-2"
            name="color-btn"
          />
          <label class="color-2" for="color-2"></label>
          <input
            class="color-btn for-color-3"
            type="radio"
            id="color-3"
            name="color-btn"
          />
          <label class="color-3" for="color-3"></label>
          <input
            class="color-btn for-color-4"
            type="radio"
            id="color-4"
            name="color-btn"
          />
          <label class="color-4" for="color-4"></label>
          <input
            class="color-btn for-color-5"
            type="radio"
            id="color-5"
            name="color-btn"
          />
          <label class="color-5" for="color-5"></label>
          <input
            class="color-btn for-color-6"
            type="radio"
            id="color-6"
            name="color-btn"
          />
          <label class="color-6" for="color-6"></label>
          <div class="clearfix"></div>
          <div class="info-wrap">
            <a href="#" class="_btn">
              <i class="uil uil-shopping-cart icon"></i> Add To Cart
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

          <div class="img-wrap chair-1"></div>
          <div class="img-wrap chair-2"></div>
          <div class="img-wrap chair-3"></div>
          <div class="img-wrap chair-4"></div>
          <div class="img-wrap chair-5"></div>
          <div class="img-wrap chair-6"></div>
          <div class="back-color"></div>
          <div class="back-color chair-2"></div>
          <div class="back-color chair-3"></div>
          <div class="back-color chair-4"></div>
          <div class="back-color chair-5"></div>
          <div class="back-color chair-6"></div>

          <a href="/" class="logo" target="_blank">
            <img src={Logo} alt="company_Logo_here" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Galary;
