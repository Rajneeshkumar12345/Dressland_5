import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TransactionUpdate() {
    let navigate = useNavigate();
  const [trancationID, setTrancationID] = useState(null);
  const [userID, setUserID] = useState("");
  const [productID, setProductID] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [referenceNo, setReferenceNo] = useState("");
  const [checkbox, setCheckbox] = useState(false);


  useEffect(() => {
    setTrancationID(localStorage.getItem("trancationID"));
    setProductID(localStorage.getItem("productID"));
    setUserID(localStorage.getItem("userID"));
    setProductName(localStorage.getItem("productName"));
    setQuantity(localStorage.getItem("quantity"));
    setPrice(localStorage.getItem("price"));
    setUnit(localStorage.getItem("unit"));
    setReferenceNo(localStorage.getItem("referenceNo"));
    setCheckbox(localStorage.getItem("checkbox"));
  }, []);



  const updateAPIData = () => {
    axios
      .put(`${process.env.REACT_APP_API}Trancation/${trancationID}`, {
        trancationID,
        userID,
        productID,
        productName,
        quantity,
        unit,
        price,
        referenceNo,
        remarks: "NA",
        createdBy: "NA",
        createdDate: "2022-12-08",
        modifiedBy: "NA",
        modifiedDate: "2022-12-08",
        checkbox,
      })
      .then(() => {
        navigate("/Transaction");
      });
  };
  return (
    <>
    <div className="UserRegistrationUpdate">
      <div className="container " style={{ height: "39rem" }}>
        <h3 className="text-center mt-3">-: Update Transaction :-</h3>
        <Form className="create-form">
          <div className="row">
            <Form.Field className="mt-5">
              <label className="text-dark col-md-6">User ID :-</label>
              <input
                placeholder="EnterProductCode"
                className="Enquiry_Input col-md-6"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
              />
            </Form.Field>
          </div>

          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Product ID :-</label>
            <input
              placeholder="EnterEmail"
              className="Enquiry_Input col-md-6"
              value={productID}
              onChange={(e) => setProductID(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Product Name :-</label>
            <input
              placeholder="EnterPhone"
              className=" Enquiry_Input col-md-6"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Quantity :-</label>
            <input
              placeholder="EnterMessage"
              className="Enquiry_Input col-md-6"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Unit :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Total Price :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Reference No :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={referenceNo}
              onChange={(e) => setReferenceNo(e.target.value)}
            />
          </Form.Field>
       
          <Form.Field className="mt-5 ms-2">
            <Checkbox
              className="text-dark ms-2"
              label="Check me out"
              value={checkbox}
              onChange={(e) => setCheckbox(!checkbox)}
            />
          </Form.Field>
          <Button
            className="btn btn-primary btn-lg"
            onClick={updateAPIData}
            type="submit"
          >
            Submit
          </Button>
          
        </Form>
      </div>
    </div>
    
    </>
  )
}

export default TransactionUpdate