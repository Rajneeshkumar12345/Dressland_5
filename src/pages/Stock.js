import React from "react";
import "./Stock.css";

function Master() {
  return (
    <>
      <div className="app_master">
        <div class="listing-section" style={{ backgroundColor: "#53c9c4" }}>
          <h1 className="text-center stock_heading">Stocks</h1>
          <div className="row mt-5">
            <div class="product col-md-3 col-sm-12">
              <div class="image-box">
                <div class="images" id="image-1"></div>
              </div>
              <div class="text-box">
                <h2 class="item">Fabric</h2>
                <h3 class="price">Rs. 120</h3>
                <p class="description">A bag of good fabric!</p>
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
            <div class="product col-md-3 col-sm-12">
              <div class="image-box">
                <div class="images" id="image-2"></div>
              </div>
              <div class="text-box">
                <h2 class="item">Fabric</h2>
                <h3 class="price">Rs. 150</h3>
                <p class="description">A bag of good fabric!</p>
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
            <div class="product col-md-3 col-sm-12">
              <div class="image-box">
                <div class="images" id="image-3"></div>
              </div>
              <div class="text-box">
                <h2 class="item">Fabric</h2>
                <h3 class="price">Rs. 200</h3>
                <p class="description">A bag of good fabric!</p>
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
            <div class="product col-md-3 col-sm-12">
              <div class="image-box">
                <div class="images" id="image-4"></div>
              </div>
              <div class="text-box">
                <h2 class="item">Fabric</h2>
                <h3 class="price">Rs. 300</h3>
                <p class="description">Good Fabric!</p>
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
            <div class="product col-md-3 col-sm-12">
              <div class="image-box">
                <div class="images" id="image-5"></div>
              </div>
              <div class="text-box">
                <h2 class="item">Fabric</h2>
                <h3 class="price">Rs. 400</h3>
                <p class="description">Cotton!</p>
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
            <div class="product col-md-3 col-sm-12">
              <div class="image-box">
                <div class="images" id="image-6"></div>
              </div>
              <div class="text-box">
                <h2 class="item">Fabric</h2>
                <h3 class="price">Rs. 450</h3>
                <p class="description">Nice Cotton!</p>
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
            <div class="product col-md-3 col-sm-12">
              <div class="image-box">
                <div class="images" id="image-7"></div>
              </div>
              <div class="text-box">
                <h2 class="item">Fabric</h2>
                <h3 class="price">Rs. 350</h3>
                <p class="description">Good Fabric!</p>
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
            <div class="product col-md-3 col-sm-12">
              <div class="image-box">
                <div class="images" id="image-8"></div>
              </div>
              <div class="text-box">
                <h2 class="item">Fabric</h2>
                <h3 class="price">Rs. 300</h3>
                <p class="description">Good Fabric!</p>
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

        <div class="cart-section" style={{ backgroundColor: "#53c9c4" }}>
          <div class="table-heading">
            <div className="row">
              <h2 class="cart-product card-heading col-md-6 col-sm-12">
                Product
              </h2>
              <h2 class="cart-price card-heading col-md-2 col-sm-12">Price</h2>
              <h2 class="cart-quantity  card-heading  col-md-2 col-sm-12">
                Quantity
              </h2>
              <h2 class="cart-total  card-heading  col-md-2 col-sm-12">
                Total
              </h2>
            </div>
          </div>

          <div class="table-content row">
            <div class="cart-product ">
              <div class="cart-image-box">
                <div class="cart-images" id="image-1"></div>
              </div>
              <h2 class="cart-item">Fabric</h2>
              <p class="cart-description "  className="labal-Stock">A bag of Fabric</p>
            </div>
            <div class="cart-price ">
              <h3 class="price">Rs. 350</h3>
            </div>
            <div class="cart-quantity ">
              <input
                type="text"
                name="cart-1-quantity"
                id="cart-1-quantity"
                value="1"
              />
            </div>
            <div class="cart-total ">
              <h3 class="price">Rs. 350</h3>
              <button
                type="button"
                class="remove"
                name="remove-1"
                id="remove-1"
              >
                x
              </button>
            </div>
          </div>

          <div class="table-content">
            <div class="cart-product">
              <div class="cart-image-box">
                <div class="cart-images" id="image-7"></div>
              </div>
              <h2 class="cart-item">Cotton</h2>
              <p class="cart-description"  className="labal-Stock">A bag of Cotton!</p>
            </div>
            <div class="cart-price">
              <h3 class="price">Rs. 250</h3>
            </div>
            <div class="cart-quantity">
              <input
                type="text"
                name="cart-1-quantity"
                id="cart-1-quantity"
                value="1"
              />
            </div>
            <div class="cart-total">
              <h3 class="price">Rs. 250</h3>
              <button
                type="button"
                class="remove"
                name="remove-2"
                id="remove-2"
              >
                x
              </button>
            </div>
          </div>

          <div class="table-content">
            <div class="cart-product">
              <div class="cart-image-box">
                <div class="cart-images" id="image-3"></div>
              </div>
              <h2 class="cart-item">Levis</h2>
              <p class="cart-description" className="labal-Stock">A bag of Lavis</p>
            </div>
            <div class="cart-price">
              <h3 class="price">Rs. 450</h3>
            </div>
            <div class="cart-quantity">
              <input
                type="text"
                name="cart-1-quantity"
                id="cart-1-quantity"
                value="1"
              />
            </div>
            <div class="cart-total">
              <h3 class="price">Rs. 450</h3>
              <button
                type="button"
                class="remove"
                name="remove-3"
                id="remove-3"
              >
                x
              </button>
            </div>
          </div>

          <div class="coupon">
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

          <div class="checkout">
            <button type="button" name="update" id="update">
              Update
            </button>
            <button type="button" name="checkout" id="checkout">
              Checkout
            </button>
            <div class="final-cart-total">
              <h3 class="price">Rs. 1050</h3>
            </div>
          </div>

          <div class="keep-shopping">
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
