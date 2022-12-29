import React, { useState, useRef } from "react";
import axios from "axios";
import Toggle from "../components/Toggle";
import "./UserRegistration.css";
import { useNavigate } from "react-router-dom";

function UserRegistration() {
  const [userName, setUserName] = useState("");
  const [address, setUserAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email_ID, setEmail] = useState("");
  const [contactNo, setContact] = useState("");
  const [userCenter, setCenter] = useState("");
  const [password, setPassword] = useState("");
  const [remarks, setRemarks] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const errRef = useRef();
  const [Msg, setMsg] = useState("");

  const navigate = useNavigate();

  const UserRegistered = () => {
    axios
      .post(`${process.env.REACT_APP_API}UserMaster`, {
        userID: 0,
        userType: "NA",
        userName,
        address,
        city,
        state,
        email_ID,
        contactNo,
        userCenter,
        userRole: "NA",
        password,
        remarks,
        createdBy: "NA",
        createdDate: "2022-11-26T12:54:40.646Z",
        modifiedBy: "NA",
        modifiedDate: "2022-11-26T12:54:40.646Z",
        checkbox,
      })
      .then(() => {
        setMsg("Data has been Submitted Successfully");
        setTimeout(() => {
          navigate("/");
        }, 5000);
      });
  };

  return (
    <>
      <Toggle />
      <div
        className="userRegistration"
        style={{ backgroundColor: "#40c960", marginTop: "5rem" }}
      >
        <h1 className="text-center User_heading py-3">Apply For Center</h1>
        <div className="container ">
          <form>
            <div className="row jumbotron">
              <div className="col-sm-6 form-group">
                <label htmlFor="name-f">User Name :</label>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  className="form-control"
                  name="fname"
                  id="name-f"
                  placeholder="Enter your  name."
                  required
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="email">Email(User ID) :</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter your email."
                  required
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="tel">Phone :</label>
                <input
                  onChange={(e) => setContact(e.target.value)}
                  type="tel"
                  name="phone"
                  className="form-control"
                  id="tel"
                  placeholder="Enter Your Contact Number."
                  required
                />
              </div>

              <div className="col-sm-6 form-group">
                <label htmlFor="address-1">Address :</label>
                <input
                  onChange={(e) => setUserAddress(e.target.value)}
                  type="address"
                  className="form-control"
                  name="Locality"
                  id="address-1"
                  placeholder="Locality/House/Street no."
                  required
                />
              </div>
              <div className="col-sm-4 form-group">
                <label htmlFor="address-2">City :</label>
                <input
                  onChange={(e) => setCity(e.target.value)}
                  type="address"
                  className="form-control"
                  name="address"
                  id="address-2"
                  placeholder="City Name."
                  required
                />
              </div>
              <div className="col-sm-4 form-group">
                <label htmlFor="State">State :</label>
                <input
                  onChange={(e) => setState(e.target.value)}
                  type="address"
                  className="form-control"
                  name="State"
                  id="State"
                  placeholder="Enter your state name."
                  required
                />
              </div>
              <div className="col-sm-4 form-group">
                <label htmlFor="zip">UserCenter :</label>
                <input
                  onChange={(e) => setCenter(e.target.value)}
                  type="zip"
                  className="form-control"
                  name="Zip"
                  id="zip"
                  placeholder="Postal-Code."
                  required
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="address-1">Remarks :</label>
                <input
                  onChange={(e) => setRemarks(e.target.value)}
                  type="address"
                  className="form-control"
                  name="Locality"
                  id="address-1"
                  placeholder="Remarks"
                  required
                />
              </div>
              <div className="col-sm-6 form-group"></div>
              <div className="col-sm-6 form-group">
                <label htmlFor="pass">Password :</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="Password"
                  name="password"
                  className="form-control"
                  id="pass"
                  placeholder="Enter your password."
                  required
                />
              </div>
              <div className="col-sm-6 form-group">
                <label htmlFor="pass2">Confirm Password :</label>
                <input
                  type="Password"
                  name="cnf-password"
                  className="form-control"
                  id="pass2"
                  placeholder="Re-enter your password."
                  required
                />
              </div>
              <div className="col-sm-12">
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
                  &nbsp;I accept all terms and conditions.
                </label>
              </div>

              <div className="col-sm-12 form-group mb-0">
                <button
                  className="btn btn-primary float-right "
                  onClick={UserRegistered}
                >
                  Submit
                </button>
              </div>
              <p
                ref={errRef}
                className={Msg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {Msg}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserRegistration;
