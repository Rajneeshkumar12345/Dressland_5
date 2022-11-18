import React from "react";
import Sidebar from "../components/Sidebar";
import "./Stock.css";

function Master() {
  return (
    <>
    <Sidebar/>
      <div className="app_master"  style={{marginTop:"5rem"}}>
        <div className="listing-section" style={{ backgroundColor: "#53c9c4" }}>
          <h1 className="text-center stock_heading">Stocks</h1>
          <div className="row mt-5">
            <div className="product col-md-3 col-sm-12">
              <div className="image-box">
                <div className="images" id="image-1"></div>
              </div>
              <div className="text-box">
                <h2 className="item">Fabric</h2>
                <h3 className="price">Rs. 120</h3>
                <p className="description">A bag of good fabric!</p>
                <label for="item-1-quantity" className="labal-Stock">Quantity:</label>
                <input
                  type="text"
                  name="item-1-quantity"
                  id="item-1-quantity"
                  value="1"
                />
                <button type="button" name="item-1-button" id="item-1-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product col-md-3 col-sm-12">
              <div className="image-box">
                <div className="images" id="image-2"></div>
              </div>
              <div className="text-box">
                <h2 className="item">Fabric</h2>
                <h3 className="price">Rs. 150</h3>
                <p className="description">A bag of good fabric!</p>
                <label for="item-2-quantity" className="labal-Stock">Quantity:</label>
                <input
                  type="text"
                  name="item-2-quantity"
                  id="item-2-quantity"
                  value="1"
                />
                <button type="button" name="item-2-button" id="item-2-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product col-md-3 col-sm-12">
              <div className="image-box">
                <div className="images" id="image-3"></div>
              </div>
              <div className="text-box">
                <h2 className="item">Fabric</h2>
                <h3 className="price">Rs. 200</h3>
                <p className="description">A bag of good fabric!</p>
                <label for="item-3-quantity" className="labal-Stock">Quantity:</label>
                <input
                  type="text"
                  name="item-3-quantity"
                  id="item-3-quantity"
                  value="1"
                />
                <button type="button" name="item-3-button" id="item-3-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product col-md-3 col-sm-12">
              <div className="image-box">
                <div className="images" id="image-4"></div>
              </div>
              <div className="text-box">
                <h2 className="item">Fabric</h2>
                <h3 className="price">Rs. 300</h3>
                <p className="description">Good Fabric!</p>
                <label for="item-4-quantity" className="labal-Stock">Quantity:</label>
                <input
                  type="text"
                  name="item-4-quantity"
                  id="item-4-quantity"
                  value="1"
                />
                <button type="button" name="item-4-button" id="item-4-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="product col-md-3 col-sm-12">
              <div className="image-box">
                <div className="images" id="image-5"></div>
              </div>
              <div className="text-box">
                <h2 className="item">Fabric</h2>
                <h3 className="price">Rs. 400</h3>
                <p className="description">Cotton!</p>
                <label for="item-1-quantity" className="labal-Stock">Quantity:</label>
                <input
                  type="text"
                  name="item-1-quantity"
                  id="item-1-quantity"
                  value="1"
                />
                <button type="button" name="item-1-button" id="item-1-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product col-md-3 col-sm-12">
              <div className="image-box">
                <div className="images" id="image-6"></div>
              </div>
              <div className="text-box">
                <h2 className="item">Fabric</h2>
                <h3 className="price">Rs. 450</h3>
                <p className="description">Nice Cotton!</p>
                <label for="item-2-quantity" className="labal-Stock">Quantity:</label>
                <input
                  type="text"
                  name="item-2-quantity"
                  id="item-2-quantity"
                  value="1"
                  className="inp"
                />
                <button type="button" name="item-2-button" id="item-2-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product col-md-3 col-sm-12">
              <div className="image-box">
                <div className="images" id="image-7"></div>
              </div>
              <div className="text-box">
                <h2 className="item">Fabric</h2>
                <h3 className="price">Rs. 350</h3>
                <p className="description">Good Fabric!</p>
                <label for="item-3-quantity" className="labal-Stock">Quantity:</label>
                <input
                  type="text"
                  name="item-3-quantity"
                  id="item-3-quantity"
                  value="1"
                />
                <button type="button" name="item-3-button" id="item-3-button">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product col-md-3 col-sm-12">
              <div className="image-box">
                <div className="images" id="image-8"></div>
              </div>
              <div className="text-box">
                <h2 className="item">Fabric</h2>
                <h3 className="price">Rs. 300</h3>
                <p className="description">Good Fabric!</p>
                <label for="item-4-quantity" className="labal-Stock">Quantity:</label>
                <input
                  type="text"
                  name="item-4-quantity"
                  id="item-4-quantity"
                  value="1"
                />
                <button type="button" name="item-4-button" id="item-4-button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-section" style={{ backgroundColor: "#53c9c4" }}>
          <div className="table-heading">
            <div className="row">
              <h2 className="cart-product card-heading col-md-6 col-sm-12">
                Product
              </h2>
              <h2 className="cart-price card-heading col-md-2 col-sm-12">Price</h2>
              <h2 className="cart-quantity  card-heading  col-md-2 col-sm-12">
                Quantity
              </h2>
              <h2 className="cart-total  card-heading  col-md-2 col-sm-12">
                Total
              </h2>
            </div>
          </div>

          <div className="table-content row">
            <div className="cart-product ">
              <div className="cart-image-box">
                <div className="cart-images" id="image-1"></div>
              </div>
              <h2 className="cart-item">Fabric</h2>
              <p className="cart-description "  class="labal-Stock">A bag of Fabric</p>
            </div>
            <div className="cart-price ">
              <h3 className="price">Rs. 350</h3>
            </div>
            <div className="cart-quantity ">
              <input
                type="text"
                name="cart-1-quantity"
                id="cart-1-quantity"
                value="1"
              />
            </div>
            <div className="cart-total ">
              <h3 className="price">Rs. 350</h3>
              <button
                type="button"
                className="remove"
                name="remove-1"
                id="remove-1"
              >
                x
              </button>
            </div>
          </div>

          <div className="table-content">
            <div className="cart-product">
              <div className="cart-image-box">
                <div className="cart-images" id="image-7"></div>
              </div>
              <h2 className="cart-item">Cotton</h2>
              <p className="cart-description"  class="labal-Stock">A bag of Cotton!</p>
            </div>
            <div className="cart-price">
              <h3 className="price">Rs. 250</h3>
            </div>
            <div className="cart-quantity">
              <input
                type="text"
                name="cart-1-quantity"
                id="cart-1-quantity"
                value="1"
              />
            </div>
            <div className="cart-total">
              <h3 className="price">Rs. 250</h3>
              <button
                type="button"
                className="remove"
                name="remove-2"
                id="remove-2"
              >
                x
              </button>
            </div>
          </div>

          <div className="table-content">
            <div className="cart-product">
              <div className="cart-image-box">
                <div className="cart-images" id="image-3"></div>
              </div>
              <h2 className="cart-item">Levis</h2>
              <p className="cart-description" class="labal-Stock">A bag of Lavis</p>
            </div>
            <div className="cart-price">
              <h3 className="price">Rs. 450</h3>
            </div>
            <div className="cart-quantity">
              <input
                type="text"
                name="cart-1-quantity"
                id="cart-1-quantity"
                value="1"
              />
            </div>
            <div className="cart-total">
              <h3 className="price">Rs. 450</h3>
              <button
                type="button"
                className="remove"
                name="remove-3"
                id="remove-3"
              >
                x
              </button>
            </div>
          </div>

          <div className="coupon">
            <input
              type="text"
              name="coupon"
              id="coupon"
              placeholder="COUPON CODE"
            />
            <button type="button" name="coupon" id="coupon">
              Submit
            </button>
          </div>

          <div className="checkout">
            <button type="button" name="update" id="update">
              Update
            </button>
            <button type="button" name="checkout" id="checkout">
              Checkout
            </button>
            <div className="final-cart-total">
              <h3 className="price">Rs. 1050</h3>
            </div>
          </div>

          <div className="keep-shopping">
            <button type="button" name="keep-shopping" id="keep-shopping">
              Keep Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Master;
