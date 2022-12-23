import axios from "axios";
import React, { useState, useEffect } from "react";
import CentorSidebar from "../components/CentorSidebar";
import Sidebar from "../components/Sidebar";

function CentorTransaction() {
  const [APIData, setAPIData] = useState([]);
  const [productName, setProductName] = useState("");
  const [unit, setUnit] = useState("");
  const [referenceNo, setReferenceNo] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  axios
    .get("http://nias.codelovertechnology.com/Trancation", {
      trancationID: 0,
      userID: 0,
      productID: 0,
      productName,
      quantity: 0,
      unit,
      price: 0,
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
      .get(`http://nias.codelovertechnology.com/Trancation`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  return (
    <>
      <CentorSidebar />
      <div className="UserAdmin">
        <div className="container-xl" style={{ marginTop: "7rem" }}>
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Centor <b>Transaction</b>
                    </h2>
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
                    <th>Price</th>
                    <th>Reference No</th>
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
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CentorTransaction;
