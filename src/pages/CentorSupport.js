import React, { useState, useEffect } from "react";
import VendorSidebar from "../components/VendorSidebar";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CentorSidebar from "../components/CentorSidebar";

function CentorSupport() {
  const navigate = useNavigate();
  const [setroleDropdownData, setRoleDropdownData] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [queryImages, setImages] = useState("");
  const [message, setMsg] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const PostData = () => {
    let user = localStorage.getItem("userId");
    axios
      .post(`${process.env.REACT_APP_API}SupportMaster`, {
        supportID: 0,
        userID: "User ID:-" + user + "," + "Support Type:-" + userRole + "",
        message,
        queryImages,
        ticketStatus: "Success",
        adminReply: "",
        createdBy: "",
        createdDate: "2022-12-28",
        modifiedBy: "",
        modifiedDate: "2022-12-28",
        checkbox,
      })
      .then(() => {
        navigate("/VendorDashboard");
      });
  };

  useEffect(() => {
    var ResultForDropdown;
    axios.get(`${process.env.REACT_APP_API}MastersAPI`).then((response) => {
      ResultForDropdown = response.data;
      var RoleList = ResultForDropdown.filter(
        (e) => e.masterTable == "Support_Type"
      );
      setRoleDropdownData(RoleList);
    });
  }, []);

  return (
    <>
    <CentorSidebar/>
      <div
        className="Support"
        style={{
          backgroundColor: "#c9c997",
          height: "39.1rem",
          marginTop: "5rem",
        }}
      >
        <div className="container">
          <Form className="create-form">
            <Form.Field className="mt-5">
              <div className="row">
                <label className="text-dark Vendor_Support col-md-6">
                  Support Type :-
                </label>
                <select
                  id="ddlRoleList"
                  onChange={(e) => setUserRole(e.target.value)}
                  class="form-select col-md-6"
                  aria-label="Default select example"
                >
                  <option selected>Please Select Role</option>
                  {setroleDropdownData.map(({ tableValue }) => (
                    <option key={tableValue} value={tableValue}>
                      {tableValue}
                    </option>
                  ))}
                </select>
              </div>
            </Form.Field>

            <Form.Field className="mt-5">
              <div className="row">
                <label className="text-dark  Vendor_Support col-md-6">
                  {" "}
                  Upload image :- :-
                </label>
                <input
                  placeholder="EnterEmail"
                  className="Enquiry_Input col-md-6"
                  id="formFileLg"
                  type="file"
                  onChange={(e) =>
                    setImages("/images/ProductImages/" + e.target.files[0].name)
                  }
                />
              </div>
            </Form.Field>
            <Form.Field className="mt-5">
              <div className="row">
                <label className="text-dark Vendor_Support col-md-6">
                  Message :-
                </label>
                <textarea
                  placeholder="EnterMsg"
                  className=" Enquiry_Input col-md-6"
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
            </Form.Field>
            <Form.Field className="mt-5 ms-2">
              <Checkbox
                className="text-dark"
                label="Check me out"
                value={checkbox}
                onChange={(e) => setCheckbox(!checkbox)}
              />
            </Form.Field>
            <Button
              className="btn btn-primary btn-lg"
              onClick={PostData}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default CentorSupport;
