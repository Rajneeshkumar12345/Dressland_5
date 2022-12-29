import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "./Master.css";
import Read from "./Read";
import axios from "axios";
import { Link } from "react-router-dom";

function Master() {
  const [APIData, setAPIData] = useState([]);
  const [id, setID] = useState(null);
  const [tableValue, setTableValue] = useState("");
  const [sequence, setSequence] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [masterTable, setMasterTable] = useState("");

  const setData = (data) => {
    console.log(data);
    let { masterID, tableValue, sequence, masterTable, checkbox } = data;
    localStorage.setItem("masterID", masterID);
    localStorage.setItem("tableValue", tableValue);
    localStorage.setItem("sequence", sequence);
    localStorage.setItem("masterTable", masterTable);
    localStorage.setItem("checkbox", checkbox);
  };

  const PostData = () => {
    axios.post(`${process.env.REACT_APP_API}MastersAPI`, {
      masterID: 0,
      masterTable,
      tableValue,
      sequence,
      createdBy: "Admin",
      createdDate: "2022-11-22T00:00:00",
      modifiedBy: "Admin",
      modifiedDate: "2022-11-22T00:00:00",
      checkbox,
    });
    // .then((error) =>{
    //  alert(error)
    // })
  };

  axios
    .get(`${process.env.REACT_APP_API}MastersAPI`, {
      masterID: 0,
      masterTable,
      tableValue,
      sequence,
      createdBy: "Admin",
      createdDate: "2022-11-22T00:00:00",
      modifiedBy: "Admin",
      modifiedDate: "2022-11-22T00:00:00",
      checkbox,
    })
    .catch((err) => {
      console.log(err);
    });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}MastersAPI`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const onDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API}MastersAPI/${id}`)
      .then(() => {
        getData();
        alert("Your data has beeen deleted");
      });
  };
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_API}MastersAPI`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <>
      <Sidebar />
      {/* <Read/> */}
      <div className="Product" style={{ marginTop: "7rem" }}>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>Master</b>
                    </h2>
                  </div>
                  <div className="col-sm-6">
                    <a
                      href="#addEmployeeModal"
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="material-icons">&#xE147;</i>{" "}
                      <span>Add New Product</span>
                    </a>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Master Table</th>
                    <th>Table Value</th>
                    <th>Sequence</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {APIData.map((data) => {
                    return (
                      <tr key={data.masterID}>
                        <td>{data.masterID}</td>
                        <td>{data.masterTable}</td>
                        <td>{data.tableValue}</td>
                        <td>{data.sequence}</td>
                        <td>
                          <Link to="/MasterUpdate">
                            <button
                              className="btn btn-success"
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
                              onClick={() => onDelete(data.masterID)}
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
              {/* <div className="clearfix">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a href="#">Previous</a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      2
                    </a>
                  </li>
                  <li className="page-item active_number">
                    <a href="#" className="page-link">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      Next
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>

        {/* Add emloyeees data here */}
        <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title col-md-6">Add Product</h4>
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
                    <label>Master Table</label>
                    <input
                      onChange={(e) => setMasterTable(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Table Value</label>
                    <input
                      onChange={(e) => setTableValue(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Sequence</label>
                    <input
                      onChange={(e) => setSequence(e.target.value)}
                      type="value"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={(e) => setCheckbox(!checkbox)}
                      type="checkbox"
                      className="form-check d-inline"
                      id="chb"
                      required
                    />
                    <label htmlFor="chb" className="form-check-label">
                      &nbsp; Check me out.
                    </label>
                  </div>

                  <div className=" form-group mb-5">
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
      </div>
    </>
  );
}

export default Master;
