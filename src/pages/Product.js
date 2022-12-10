import React, { useEffect, useState } from "react";
import { TextArea } from "semantic-ui-react";
import Sidebar from "../components/Sidebar";
import "./Product.css";
import axios from "axios";

function Product() {
  const [APIData, setAPIData] = useState([]);
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [productSubTitle, setProductSubTitle] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [mrp, setMRP] = useState("");
  const [offerCode, setOfferCode] = useState("");
  const [productImg1, setProductImg] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const PostData = () => {
    console.log(PostData)
    axios
      .post("http://nias.codelovertechnology.com/ProductMaster", {
        productID: 0,
        productCode,
        productName,
        productSubTitle,
        productCategory,
        productType,
        productDescription,
        mrp,
        offerCode,
        productImg1,
        productImg2: "NA",
        productImg3: "NA",
        remarks: "NA",
        createdBy: "NA",
        createdDate: "2022-11-25T12:53:38.105Z",
        modifiedBy: "NA",
        modifiedDate: "2022-11-25T12:53:38.105Z",
        checkbox,
      })
      .catch((err) => {
        console.log(err);
      });
  };
  axios
    .get("http://nias.codelovertechnology.com/ProductMaster", {
      productID: 0,
      productCode,
      productName,
      productSubTitle,
      productCategory,
      productType,
      productDescription,
      mrp,
      offerCode,
      productImg1,
      productImg2: "NA",
      productImg3: "NA",
      remarks: "NA",
      createdBy: "NA",
      createdDate: "2022-11-25T12:53:38.105Z",
      modifiedBy: "NA",
      modifiedDate: "2022-11-25T12:53:38.105Z",
      checkbox,
    })
    .catch((err) => {
      console.log(err);
    });
  useEffect(() => {
    axios
      .get(`http://nias.codelovertechnology.com/ProductMaster`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  //  DELETE TASK PERFORM HERE
  const onDelete = (id) => {
    axios
      .delete(`http://nias.codelovertechnology.com/ProductMaster/${id}`)
      .then(() => {
        getData();
        alert("Your data has been deleted");
      });
  };
  const getData = () => {
    axios
      .get(`http://nias.codelovertechnology.com/ProductMaster`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <>
      <Sidebar />
      <div className="Product" style={{ marginTop: "8rem" }}>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>Product</b>
                    </h2>
                  </div>
                  <div className="col-sm-6">
                    <a
                      href="#addEmployeeModal"
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="material-icons">&#xE147;</i>{" "}
                      <span>Add New Product</span>
                    </a>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Code</th>
                    <th>Product Name</th>
                    <th>Product SubTitle</th>
                    <th>Product Category</th>
                    <th>Product Type</th>
                    <th>Product Description</th>
                    <th>Product MRP</th>
                    <th>Offer Code</th>
                    <th>Product Image1</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {APIData.map((data) => {
                    return (
                      <tr key={data.productID}>
                        <td>{data.productID}</td>
                        <td>{data.productCode}</td>
                        <td>{data.productName}</td>
                        <td>{data.productSubTitle}</td>
                        <td>{data.productCategory}</td>
                        <td>{data.productType}</td>
                        <td>{data.productDescription}</td>
                        <td>{data.mrp}</td>
                        <td>{data.offerCode}</td>
                        <td>
                          <img
                            src={
                              "http://nias.codelovertechnology.com/ProductMaster" +
                              data.productImg1
                            }
                            width="40"
                            height="30"
                          />
                        </td>
                        <td>
                          <a
                            href="#editEmployeeModal"
                            className="edit"
                            data-toggle="modal"
                          >
                            <i
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Edit"
                            >
                              &#xE254;
                            </i>
                          </a>
                          <a
                            href="#deleteEmployeeModal"
                            className="delete"
                            data-toggle="modal"
                          >
                            <i
                              onClick={() => onDelete(data.productID)}
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Delete"
                            >
                              &#xE872;
                            </i>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title col-md-6">Add Product</h4>
                  <div className="float-right">
                  <button
                    type="button"
                    className="close col-md-6"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                  </div>
                
                </div>
                <div className="container">
                  <div className="row">
                    <div className="form-group col-md-12 mb-3">
                      <label for="validationDefault01">Product Code :-</label>
                      <input
                        onChange={(e) => setProductCode(e.target.value)}
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        placeholder="Enter Product Code"
                        required
                      />
                    </div>
                    <div className="form-group  col-md-12 mb-3">
                      <label for="validationDefault02">Product Name :-</label>
                      <input
                        onChange={(e) => setProductName(e.target.value)}
                        type="text"
                        className="form-control"
                        id="validationDefault02"
                        placeholder="Enter Product Name"
                        required
                      />
                    </div>
                    <div className=" form-group col-md-12 mb-3">
                      <label for="validationDefaultUsername">
                        Product SubTitle :-
                      </label>
                      <input
                        onChange={(e) => setProductSubTitle(e.target.value)}
                        type="text"
                        className="form-control"
                        id="validationDefaultUsername"
                        placeholder="Enter Product SubTitle"
                        aria-describedby="inputGroupPrepend2"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 mb-3">
                      <label for="validationDefault03">
                        Product Category :-
                      </label>
                      <input
                        onChange={(e) => setProductCategory(e.target.value)}
                        type="text"
                        className="form-control"
                        id="validationDefault03"
                        placeholder="Enter Product Category"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <label for="validationDefault04">Product Type :-</label>
                      <input
                        onChange={(e) => setProductType(e.target.value)}
                        type="text"
                        className="form-control"
                        id="validationDefault04"
                        placeholder="Enter Product Type"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <label for="validationDefault05">
                        Product Description :-
                      </label>
                      <TextArea
                        onChange={(e) => setProductDescription(e.target.value)}
                        type="text"
                        className="form-control"
                        id="validationDefault05"
                        placeholder="Enter Product Description"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 mb-3">
                      <label for="validationDefault03">Product MRP :-</label>
                      <input
                        onChange={(e) => setMRP(e.target.value)}
                        type="number"
                        className="form-control"
                        id="validationDefault03"
                        placeholder="Enter MRP"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <label for="validationDefault04">Offer Code :-</label>
                      <input
                        onChange={(e) => setOfferCode(e.target.value)}
                        type="text"
                        className="form-control"
                        id="validationDefault04"
                        placeholder="Enter Offer Code"
                        required
                      />
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <label for="validationDefault05">Product Image1 :-</label>
                      <input
                        onChange={(e) => setProductImg(e.target.files[0])}
                        className="form-control form-control"
                        id="formFileLg"
                        type="file"
                        required
                      />
                      {/* <select
                      onChange={(e) => setState(e.target.value)}
                      className="form-select  form-select-sm"
                      style={{ height: "40px" }}
                    >
                      <option >Choose State</option>
                      <option >Andhra Pradesh</option>
                      <option >Arunachal Pradesh</option>
                      <option >Assam</option>
                      <option >Bihar</option>
                      <option >Chhattisgarh</option>
                      <option >Gujarat</option>
                      <option >Haryana</option>
                      <option >Himachal Pradesh</option>
                      <option >Jharkhand</option>
                      <option >Karnataka</option>
                      <option >Kerala</option>
                      <option >Madhya Pradesh</option>
                      <option >Maharashtra</option>
                      <option >Manipur</option>
                      <option >Meghalaya</option>
                      <option >Mizoram</option>
                      <option >Nagaland</option>
                      <option >Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option >Rajasthan</option>
                      <option >Sikkim</option>
                      <option >Tamil Nadu</option>
                      <option >Telangana</option>
                      <option >Tripura</option>
                      <option >Uttar Pradesh</option>
                      <option >Uttarakhand</option>
                      <option >West Bengal</option>
                    </select> */}
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      onChange={(e) => setCheckbox(!checkbox)}
                      className="form-check-input mt-3 ms-1"
                      type="checkbox"
                      value=""
                      id="invalidCheck2"
                      required
                    />
                    <label
                      className="form-check-label text-dark ms-4"
                      for="invalidCheck2"
                    >
                      Check me out
                    </label>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={PostData}
                    >
                      Submit form
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <div id="editEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Edit Product</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Product Code</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Product Name</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Product SubTitle</label>
                    <textarea className="form-control" required></textarea>
                  </div>
                  <div className="form-group">
                    <label>Product Category</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Product Category</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Product Category</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Product Category</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Product Code</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Product Image1</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    value="Cancel"
                  />
                  <input type="submit" className="btn btn-info" value="Save" />
                </div>
              </form>
            </div>
          </div>
        </div> */}

        {/* <div id="deleteEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Delete Product</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <p className="text-warning">
                    <small>Are you sure you want to delete this product?</small>
                  </p>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    value="Cancel"
                  />
                  <input
                    onClick={(data) => onDelete(data.productID)}
                    type="submit"
                    className="btn btn-danger"
                    value="Delete"
                  />
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Product;
