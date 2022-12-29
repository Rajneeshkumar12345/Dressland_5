import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import Sidebar from "../components/Sidebar";
import "./EnquiryForm.css";
import axios from "axios";

function EnquiryForm() {
  const [APIData, setAPIData] = useState([]);

  const [name, setName] = useState("");
  const [email_ID, setEmail] = useState("");
  const [contactNo, setPhone] = useState("");
  const [enqMessage, setEnquiry] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const setData = (data) => {
    console.log(data);
    let { enquiryID, name, email_ID, contactNo, enqMessage, checkbox } = data;
    localStorage.setItem("enquiryID", enquiryID);
    localStorage.setItem("name", name);
    localStorage.setItem("email_ID", email_ID);
    localStorage.setItem("contactNo", contactNo);
    localStorage.setItem("enqMessage", enqMessage);
    localStorage.setItem("checkbox", checkbox);
  };

  const PostData = () => {
    console.log(name);
    console.log(email_ID);
    console.log(contactNo);
    console.log(enqMessage);
    axios.post(`${process.env.REACT_APP_API}EnquiryMaster`, {
      enquiryID: 0,
      name,
      contactNo,
      email_ID,
      enqMessage,
      replyMessage: "NA",
      remarks: "NA",
      enquiryStatus: "NA",
      createdBy: "NA",
      createdDate: "2022-11-25",
      modifiedBy: "NA",
      modifiedDate: "2022-11-25",
      checkbox,
    });
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}EnquiryMaster`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const onDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API}EnquiryMaster/${id}`)
      .then(() => {
        getData();
        alert("Your data has been deleted");
      });
  };
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_API}EnquiryMaster`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <>
      <Sidebar />
      <div className="Product" style={{ marginTop: "7rem" }}>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6 col-md-6">
                    <h2>
                      Manage <b>Enquiry</b>
                    </h2>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <a
                      href="#addEmployeeModal"
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="material-icons">&#xE147;</i>{" "}
                      <span>Add New Enquiry</span>
                    </a>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Enquiry</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {APIData.map((data) => {
                    return (
                      <tr key={data.enquiryID}>
                        <td>{data.enquiryID}</td>
                        <td>{data.name}</td>
                        <td>{data.email_ID}</td>
                        <td>{data.contactNo}</td>
                        <td>{data.enqMessage}</td>

                        <td>
                        <Link to="/EnquiryUpdate2">
                            <button
                              onClick={() => setData(data)}
                              className="btn btn-success"
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
                              onClick={() => onDelete(data.enquiryID)}
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Delete"
                            >
                              &#xE872;
                            </i>
                          </a>
                          <Link to="/EnquiryUpdate">
                            <button
                              onClick={() => setData(data)}
                              className="btn btn-primary"
                            >
                              Reply
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* ADD ENQUIRY POPUP START FROM HERE */}
          <div id="addEmployeeModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title col-md-6">Add Enquiry</h4>
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
                    <div className="form-group">
                      <label>Customer Name</label>
                      <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Enquiry</label>
                      <textarea
                        onChange={(e) => setEnquiry(e.target.value)}
                        className="form-control"
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        className="form-check-input ms-1"
                        id="exampleCheck1"
                        checked={checkbox}
                        onChange={() => setCheckbox(!checkbox)}
                      />
                      <label
                        className="form-check-label ms-4"
                        for="exampleCheck1"
                        style={{ marginTop: "-10px" }}
                      >
                        Check me out
                      </label>
                    </div>
                
                  <div className="form-group">
                  <button
                      className="btn btn-primary float-right"
                      onClick={PostData}
                    >
                      Submit
                    </button>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>


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
                    <p>Are you sure you want to delete this product?</p>
                    <p className="text-warning">
                      <small>This action cannot be undone.</small>
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
      </div>
    </>
  );
}

export default EnquiryForm;
