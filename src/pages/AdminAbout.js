import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { TextArea } from "semantic-ui-react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function AdminAbout() {
  const [APIData, setAPIData] = useState([]);

const setData = (data) => {
  console.log(data);
  let { aboutID, aboutTitle, description, imagesURL, remarks, checkbox } = data;
  localStorage.setItem("aboutID", aboutID);
  localStorage.setItem("aboutTitle", aboutTitle);
  localStorage.setItem("description", description);
  localStorage.setItem("remarks", remarks);
  localStorage.setItem("imagesURL", imagesURL);
  localStorage.setItem("checkbox", checkbox);
};

useEffect(() => {
  axios
    .get(`${process.env.REACT_APP_API}AboutMaster`)
    .then((response) => {
      setAPIData(response.data);
    });
}, []);


const onDelete = (id) => {
  axios
    .delete(`${process.env.REACT_APP_API}AboutMaster/${id}`)
    .then(() => {
      getData();
      alert("Your data has beeen deleted");
    });
};
const getData = () => {
  axios
    .get(`${process.env.REACT_APP_API}AboutMaster`)
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
                      Manage <b>About Page</b>
                    </h2>
                  </div>
                  {/* <div className="col-sm-6">
                    <a
                      href="#addEmployeeModal"
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="material-icons">&#xE147;</i>{" "}
                      <span>Add New Product</span>
                    </a>
                  </div> */}
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>About ID</th>
                    <th>About Title</th>
                    <th>Description</th>
                    <th>Remarks</th>
                    <th>Photo</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {APIData.map((data) => {
                    return (
                      <tr key={data.aboutID}>
                        <td>{data.aboutID}</td>
                        <td>{data.aboutTitle}</td>
                        <td>{data.description}</td>
                        <td>{data.remarks}</td>
                        <td>
                          <img src={data.imagesURL} width={40}  height={60} /> 
                          </td>
                        <td>
                        <Link to="/AdminAboutUpdate">
                            <button
                              onClick={() => setData(data)}
                              className="btn btn-primary"
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
                                 onClick={() => onDelete(data.aboutID)}
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
            </div>
          </div>
        </div>

        {/* Add emloyeees data here */}
        {/* <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
              <div className="modal-header">
                  <h4 className="modal-title col-md-6">Add Gallery</h4>
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
                    <label>Title</label>
                    <input
                         onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>SubTitle</label>
                    <input
                       onChange={(e) => setSubTitle(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <TextArea
                       onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div>
                      <label for="formFileLg" className="form-label">
                        Upload image :-
                      </label>
                      <input
                       onChange={(e)=>  setImagePath("/images/ProductImages/"+e.target.files[0].name)}
                        className="form-control form-control"
                        id="formFileLg"
                        type="file"
                      />
                    </div>
                  </div>
                  <div className="">
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

                  <div className=" form-group mb-0">
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
    </>
  );
}

export default AdminAbout;
