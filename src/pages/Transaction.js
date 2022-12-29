import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function Transaction() {
  const [APIData, setAPIData] = useState([]);

  const [userID, setUserID] = useState("");
  const [productID, setProductID] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [referenceNo, setReferenceNo] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const setData = (data) => {
    console.log(data);
    let {
      trancationID,
      userID,
      productID,
      productName,
      quantity,
      unit,
      price,
      referenceNo,
      checkbox,
    } = data;
    localStorage.setItem("trancationID", trancationID);
    localStorage.setItem("userID", userID);
    localStorage.setItem("productID", productID);
    localStorage.setItem("productName", productName);
    localStorage.setItem("quantity", quantity);
    localStorage.setItem("unit", unit);
    localStorage.setItem("price", price);
    localStorage.setItem("referenceNo", referenceNo);
    localStorage.setItem("checkbox", checkbox);
  };

  const HandlePostData = () => {
    axios.post(`${process.env.REACT_APP_API}Trancation`, {
      trancationID: 0,
      userID,
      productID,
      productName,
      quantity,
      unit,
      price,
      referenceNo,
      remarks: "NA",
      createdBy: "NA",
      createdDate: "2022-12-08T13:22:36.631Z",
      modifiedBy: "NA",
      modifiedDate: "2022-12-08T13:22:36.632Z",
      checkbox,
    });
  };

  axios
    .get(`${process.env.REACT_APP_API}Trancation`, {
      trancationID: 0,
      userID,
      productID,
      productName,
      quantity,
      unit,
      price,
      referenceNo,
      remarks: "NA",
      createdBy: "NA",
      createdDate: "2022-12-08T13:22:36.631Z",
      modifiedBy: "NA",
      modifiedDate: "2022-12-08T13:22:36.632Z",
      checkbox,
    })
    .catch((err) => {
      console.log(err);
    });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}Trancation`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const onDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API}Trancation/${id}`)
      .then(() => {
        getData();
        alert("Your data has beeen deleted");
      });
  };
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_API}Trancation`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <>
      <Sidebar />
      <div className="UserAdmin">
        <div className="container-xl" style={{ marginTop: "7rem" }}>
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>Transaction</b>
                    </h2>
                  </div>
                  <div className="col-sm-6">
                    <a
                      href="#addEmployeeModal"
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="material-icons">&#xE147;</i>{" "}
                      <span>Add New Transaction</span>
                    </a>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>User ID</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Total Price</th>
                    <th>Reference No</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {APIData.map((data) => {
                    return (
                      <tr key={data.trancationID}>
                        <td>{data.trancationID}</td>
                        <td>{data.userID}</td>
                        <td>{data.productID}</td>
                        <td>{data.productName}</td>
                        <td>{data.quantity}</td>
                        <td>{data.unit}</td>
                        <td>{data.price}</td>
                        <td>{data.referenceNo}</td>
                        <td>{data.remarks}</td>
                        <td>
                          <Link to="/TransactionUpdate">
                            <button
                              className="btn btn-info"
                              onClick={() => setData(data)}
                            >
                              Edit
                            </button>
                          </Link>
                          <a
                            href="#deleteEmployeeModal"
                            className="delete"
                            data-toggle="modal"
                          >
                            <i
                              onClick={() => onDelete(data.trancationID)}
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
                  <h4 className="modal-title col-md-6">Add User</h4>
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
                  <div className=" form-group">
                    <label htmlFor="email">User ID :</label>
                    <input
                      onChange={(e) => setUserID(e.target.value)}
                      type="number"
                      className="form-control"
                      name="number"
                      id="number"
                      placeholder="Enter User ID."
                      required
                    />
                  </div>
                  <div className=" form-group">
                    <label htmlFor="email">Product ID :</label>
                    <input
                      onChange={(e) => setProductID(e.target.value)}
                      type="number"
                      className="form-control"
                      name="number"
                      id="number"
                      placeholder="Enter Product ID."
                      required
                    />
                  </div>
                  <div className=" form-group">
                    <label htmlFor="name-f">Product Name :</label>
                    <input
                      onChange={(e) => setProductName(e.target.value)}
                      type="text"
                      className="form-control"
                      name="fname"
                      id="name-f"
                      placeholder="Enter your Product name."
                      required
                    />
                  </div>
                  <div className=" form-group">
                    <label htmlFor="email">Quantity :</label>
                    <input
                      onChange={(e) => setQuantity(e.target.value)}
                      type="number"
                      className="form-control"
                      name="number"
                      id="number"
                      placeholder="Enter Quantity."
                      required
                    />
                  </div>
                  <div className=" form-group">
                    <label htmlFor="email">Unit :</label>
                    <input
                      onChange={(e) => setUnit(e.target.value)}
                      type="number"
                      className="form-control"
                      name="number"
                      id="number"
                      placeholder="Enter Unit."
                      required
                    />
                  </div>
                  <div className=" form-group">
                    <label htmlFor="email">Total Price :</label>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      type="number"
                      className="form-control"
                      name="number"
                      id="number"
                      placeholder="Enter Price."
                      required
                    />
                  </div>
                  <div className=" form-group">
                    <label htmlFor="tel">Reference No :</label>
                    <input
                      onChange={(e) => setReferenceNo(e.target.value)}
                      type="text"
                      name="number"
                      className="form-control"
                      id="tel"
                      placeholder="Enter Your Contact Number."
                      required
                    />
                  </div>
                  <div className="">
                    <input
                      onChange={(e) => setCheckbox(!checkbox)}
                      type="checkbox"
                      className="form-check d-inline"
                      id="chb"
                      required
                    />
                    <label
                      htmlFor="chb"
                      className="form-check-label"
                      style={{ marginTop: "-10px" }}
                    >
                      &nbsp; Check me out.
                    </label>
                  </div>

                  <div className=" form-group mb-0">
                    <button
                      className="btn btn-primary float-right "
                      onClick={HandlePostData}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction;
