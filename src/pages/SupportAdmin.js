import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import Sidebar from "../components/Sidebar";
import "./EnquiryForm.css";
import axios from "axios";

function SupportAdmin() {
  const [APIData, setAPIData] = useState([]);
  const [checkbox, setCheckbox] = useState(false);

  const setData = (data) => {
    console.log(data);
    let { supportID, userID, message, queryImages, ticketStatus, checkbox } =
      data;
    localStorage.setItem("supportID", supportID);
    localStorage.setItem("userID", userID);
    localStorage.setItem("message", message);
    localStorage.setItem("queryImages", queryImages);
    localStorage.setItem("ticketStatus", ticketStatus);
    localStorage.setItem("checkbox", checkbox);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}SupportMaster`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const onDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_API}SupportMaster/${id}`).then(() => {
      getData();
      alert("Your data has been deleted");
    });
  };
  const getData = () => {
    axios.get(`${process.env.REACT_APP_API}SupportMaster`).then((getData) => {
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
                      Manage <b>Support</b>
                    </h2>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Support ID</th>
                    <th>User ID</th>
                    <th>Message</th>
                    <th>Querry Image</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {APIData.map((data) => {
                    return (
                      <tr key={data.supportID}>
                        <td>{data.supportID}</td>
                        <td>{data.userID}</td>
                        <td>{data.message}</td>
                        <td>
                          <img src={data.queryImages} width={40} height={60} />
                        </td>
                        <td>{data.ticketStatus}</td>

                        <td>
                          <Link to="/SupportAdminUpdate">
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
                              onClick={() => onDelete(data.supportID)}
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Delete"
                            >
                              &#xE872;
                            </i>
                          </a>
                          <Link to="/SupportAdminUpdate">
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
          {/* <div id="addEmployeeModal" className="modal fade">
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
          </div> */}
        </div>
      </div>
    </>
  );
}

export default SupportAdmin;
