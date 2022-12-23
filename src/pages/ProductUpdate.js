import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductUpdate() {
    let navigate = useNavigate();
    const [APIData, setAPIData] = useState([]);
    const [productID, setID] = useState(null);
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

  useEffect(() => {
    axios
      .get(`http://nias.codelovertechnology.com/ProductMaster`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

//   useEffect(() => {
//     var ResultForDropdown;
//     axios
//       .get(`http://nias.codelovertechnology.com/ProductMaster`)
//       .then((response) => {
//         ResultForDropdown=response.data;
//           var RoleList=ResultForDropdown.filter(e =>e.masterTable=="Role").map();
//           setRoleDropdownData(RoleList);
//         console.log(response.data);
//       });
//   }, []);

  useEffect(() => {
    setID(localStorage.getItem("productID"));
    setProductCode(localStorage.getItem("productCode"));
    setProductName(localStorage.getItem("productName"));
    setProductSubTitle(localStorage.getItem("productSubTitle"));
    setProductCategory(localStorage.getItem("productCategory"));
    setProductType(localStorage.getItem("productType"));
    setProductDescription(localStorage.getItem("productDescription"));
    setMRP(localStorage.getItem("mrp"));
    setOfferCode(localStorage.getItem("offerCode"));
    setProductImg(localStorage.getItem("productImg1"));
    setCheckbox(localStorage.getItem("checkbox"));
  }, []);



  const updateAPIData = () => {
    axios
      .put(`http://nias.codelovertechnology.com/ProductMaster/${productID}`, {
        productID,
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
      .then(() => {
        navigate("/Product");
      });
  };
  return (
    <div className="UserRegistrationUpdate">
      <div className="container " style={{ height: "39rem" }}>
        <h3 className="text-center mt-3">-: Update Product :-</h3>
        <Form className="create-form">
          <div className="row">
            <Form.Field className="mt-5">
              <label className="text-dark col-md-6">Product Code :-</label>
              <input
                placeholder="EnterProductCode"
                className="Enquiry_Input col-md-6"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
              />
            </Form.Field>
          </div>

          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Product Name :-</label>
            <input
              placeholder="EnterEmail"
              className="Enquiry_Input col-md-6"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Product SubTitle :-</label>
            <input
              placeholder="EnterPhone"
              className=" Enquiry_Input col-md-6"
              value={productSubTitle}
              onChange={(e) => setProductSubTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Product Category :-</label>
            <input
              placeholder="EnterMessage"
              className="Enquiry_Input col-md-6"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Product Type :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Product Description :-</label>
            <textarea
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Product MRP :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={mrp}
              onChange={(e) => setMRP(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Offer Code :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={offerCode}
              onChange={(e) => setOfferCode(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Product Image1 :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={productImg1}
              onChange={(e) => setProductImg(e.target.value)}
            />
          </Form.Field>
          {/* <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Approval :-</label>
            <select
              id="ddlRoleList"
              onChange={(e) => setUserRole(e.target.value)}              
              class="form-select Enquiry_Input col-md-6 float-right"
              aria-label="Default select example"
            >
              {setroleDropdownData.map(({ tableValue}) => (
                <option key={tableValue} value={tableValue}>
                  {tableValue}
                </option>
              ))}
            </select>
          </Form.Field> */}
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
  );
}

export default ProductUpdate;
