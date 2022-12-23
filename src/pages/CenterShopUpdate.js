import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CenterShopUpdate() {
  let navigate = useNavigate();
 // const [APIData, setAPIData] = useState([]);
  const [shopID, setID] = useState(null);
  const [shopName, setShopName] = useState("");
  const [personName, setPersonName] = useState("");
  const [shopEmail_ID, setEmail_ID] = useState("");
  const [shopContactNo, setShopContactNo] = useState("");
  const [personContactNo, setPersonContactNo] = useState("");
  const [personEmailID, setPersonEmailID] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [shopBanner, setShopBanner] = useState("");
  const [remarks, setRemarks] = useState("");
  const [checkbox, setCheckbox] = useState(true);

  useEffect(() => {
    setID(localStorage.getItem("shopID"));
    setShopName(localStorage.getItem("shopName"));
    setPersonName(localStorage.getItem("personName"));
    setEmail_ID(localStorage.getItem("shopEmail_ID"));
    setShopContactNo(localStorage.getItem("shopContactNo"));
    setPersonContactNo(localStorage.getItem("personContactNo"));
    setPersonEmailID(localStorage.getItem("personEmailID"));
    setShopAddress(localStorage.getItem("shopAddress"));
    setCity(localStorage.getItem("city"));
    setState(localStorage.getItem("state"));
    setShopBanner(localStorage.getItem("shopBanner"));
    setRemarks(localStorage.getItem("remarks"));
    setCheckbox(localStorage.getItem("checkbox"));
  }, []);

  const updateAPIData = () => {
    console.log(updateAPIData)
    axios
      .put(`http://nias.codelovertechnology.com/ShopMaster/${shopID}`, {
        shopID,
        shopName,
        personName,
        shopEmail_ID,
        shopContactNo,
        personContactNo,
        personEmailID,
        shopAddress,
        city,
        state,
        shopBanner,
        remarks,
        createdBy: "NA",
        createdDate: "2022-11-23T12:56:22.535Z",
        modifiedBy: "NA",
        modifiedDate: "2022-11-23T12:56:22.536Z",
        checkbox,
      })
      .then(() => {
        navigate("/CenterShop");
      });
  };


  return (
    <>
      <div className="Enquiry_Update">
          <div className="container" style={{height:"39rem"}}>
          <Form className="create-form">
            <div className="row">
            <Form.Field className="mt-5">
                  <label className="text-dark col-md-6">Person Full Name :-</label>
                  <input
                    placeholder="EnterName"
                    className="Enquiry_Input col-md-6"
                    value={personName}
                    onChange={(e) => setPersonName(e.target.value)}
                  />
                </Form.Field>
            </div>
             
                <Form.Field className="mt-5">
                  <label className="text-dark col-md-6">Person Contact No :-</label>
                  <input
                    placeholder="EnterEmail"
                    className="Enquiry_Input col-md-6"
                    value={personContactNo}
                    onChange={(e) => setPersonContactNo(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="mt-5">
                  <label className="text-dark col-md-6"> Person Email ID :-</label>
                  <input
                    placeholder="EnterPhone"
                    className=" Enquiry_Input col-md-6"
                    value={personEmailID}
                    onChange={(e) => setPersonEmailID(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="mt-5">
                  <label className="text-dark col-md-6">Shop Name :-</label>
                  <input
                    placeholder="EnterMessage"
                    className="Enquiry_Input col-md-6"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                  />
                </Form.Field>

                <Form.Field className="mt-5">
                  <label className="text-dark col-md-6">Shop Contact No :-</label>
                  <input
                    placeholder="EnterMessage"
                    className="Enquiry_Input col-md-6"
                    value={shopContactNo}
                    onChange={(e) => setShopContactNo(e.target.value)}
                  />
                </Form.Field>

                <Form.Field className="mt-5">
                  <label className="text-dark col-md-6">Shop Email ID :-</label>
                  <input
                    placeholder="EnterMessage"
                    className="Enquiry_Input col-md-6"
                    value={shopEmail_ID}
                    onChange={(e) => setEmail_ID(e.target.value)}
                  />
                </Form.Field>

                <Form.Field className="mt-5">
                  <label className="text-dark col-md-6">Shop Address :-</label>
                  <textarea
                    placeholder="EnterMessage"
                    className="Enquiry_Input col-md-6"
                    value={shopAddress}
                    onChange={(e) => setShopAddress(e.target.value)}
                  />
                </Form.Field>

                <Form.Field className="mt-5">
                  <label className="text-dark col-md-6">City :-</label>
                  <input
                    placeholder="EnterCity"
                    className="Enquiry_Input col-md-6"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Field>


                <Form.Field className="mt-5">
                  <label className="text-dark col-md-6">State :-</label>
                  <input
                    placeholder="EnterMessage"
                    className="Enquiry_Input col-md-6"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="mt-5">
                  <label className="text-dark col-md-6">Shop Banner :-</label>
                  <input
                    placeholder="EnterMessage"
                    className="Enquiry_Input col-md-6"
                    type="file"
                    // value={shopBanner}
                    onChange={(e) => setShopBanner(e.target.value)}
                  />
                </Form.Field>

                <Form.Field className="mt-5">
                  <label className="text-dark col-md-6">Remarks :-</label>
                  <input
                    placeholder="EnterMessage"
                    className="Enquiry_Input col-md-6"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
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
                <Button className="btn btn-primary btn-lg" onClick={updateAPIData} type="submit">
                  Update
                </Button>
              </Form>
          </div>
      </div>
    </>
  );
}

export default CenterShopUpdate;
