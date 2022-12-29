import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserRegistrationUpdate() {
  const [setroleDropdownData, setRoleDropdownData] = useState([]);
  let navigate = useNavigate();
  const [userID, setID] = useState(null);
  const [userName, setUserName] = useState("");
  const [address, setUserAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email_ID, setEmail] = useState("");
  const [contactNo, setContact] = useState("");
  const [userCenter, setCenter] = useState("");
  const [password, setPassword] = useState("");
  const [remarks, setRemarks] = useState("");
  const [userRole, setUserRole] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  
  useEffect(() => {
    var ResultForDropdown;
    axios
      .get(`${process.env.REACT_APP_API}MastersAPI`)
      .then((response) => {
        ResultForDropdown=response.data;
          var RoleList=ResultForDropdown.filter(e =>e.masterTable == "Role");
          setRoleDropdownData(RoleList);
      });
  }, []);

  useEffect(() => {
    setID(localStorage.getItem("userID"));
    setUserName(localStorage.getItem("userName"));
    setUserAddress(localStorage.getItem("address"));
    setCity(localStorage.getItem("city"));
    setState(localStorage.getItem("state"));
    setEmail(localStorage.getItem("email_ID"));
    setContact(localStorage.getItem("contactNo"));
    setCenter(localStorage.getItem("userCenter"));
    setPassword(localStorage.getItem("password"));
  //  setUserRole(localStorage.getItem("userRole"));
    setRemarks(localStorage.getItem("remarks"));
    setCheckbox(localStorage.getItem("checkbox"));
  }, []);



  const updateAPIData = () => {
    axios
      .put(`${process.env.REACT_APP_API}UserMaster/${userID}`, {
        userID,
        userType:'NA',
        userName,
        address,
        city,
        state,
        email_ID,
        contactNo,
        userCenter,
        userRole,
        password,
        remarks,
        createdBy: "NA",
        createdDate: "2022-11-26T12:54:40.646Z",
        modifiedBy: "NA",
        modifiedDate: "2022-11-26T12:54:40.646Z",
        checkbox,
      })
      .then(() => {
        navigate("/UserAdmin");
      });
  };
  return (
    <div className="UserRegistrationUpdate">
      <div className="container " style={{ height: "39rem" }}>
        <Form className="create-form">
          <div className="row">
            <Form.Field className="mt-5">
              <label className="text-dark col-md-6">User Name :-</label>
              <input
                placeholder="EnterName "
                className="Enquiry_Input col-md-6"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Field>
          </div>

          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">User Email :-</label>
            <input
              placeholder="EnterEmail"
              className="Enquiry_Input col-md-6"
              value={email_ID}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">User Contact :-</label>
            <input
              placeholder="EnterPhone"
              className=" Enquiry_Input col-md-6"
              value={contactNo}
              onChange={(e) => setContact(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Address :-</label>
            <textarea
              placeholder="EnterMessage"
              className="Enquiry_Input col-md-6"
              value={address}
              onChange={(e) => setUserAddress(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">City :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">State :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">UserCenter :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={userCenter}
              onChange={(e) => setCenter(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Remarks :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Password :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Approval :-</label>
            <select
              id="ddlRoleList"
              onChange={(e) => setUserRole(e.target.value)}              
              class="form-select Enquiry_Input col-md-6 float-right"
              aria-label="Default select example"
            >
            <option selected>Please Select Role</option>
              {setroleDropdownData.map(({ tableValue}) => (
                <option key={tableValue} value={tableValue}>
                  {tableValue}
                </option>
              ))}
            </select>
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
  );
}

export default UserRegistrationUpdate;
