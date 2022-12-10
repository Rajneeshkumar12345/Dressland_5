import axios from "axios";
import React, { useState, useEffect } from "react";
import { TextArea } from "semantic-ui-react";
import Sidebar from "../components/Sidebar";

function AdminGallery() {
  const [APIData, setAPIData] = useState([]);
  const [title, setTitle] = useState("")
  const[subTitle, setSubTitle] = useState("")
  const[description, setDescription] = useState("")
  const[imagePath, , setImagePath] = useState("")
  const[checkbox, setCheckbox] = useState(false)
  const PostData = () => {
    axios.post("http://nias.codelovertechnology.com/Gallery",{
    galaryID: 0,
    title,
    subTitle,
    description,
    imagePath,
    remarks: "NA",
    createdBy: "NA",
    createdDate: "2022-12-08T13:19:59.846Z",
    modifiedBy: "NA",
    modifiedDate: "2022-12-08T13:19:59.846Z",
    checkbox,
    } )
  }
  axios
  .get("http://nias.codelovertechnology.com/Gallery", {
    galaryID: 0,
    title,
    subTitle,
    description,
    imagePath,
    remarks: "NA",
    createdBy: "NA",
    createdDate: "2022-12-08T13:19:59.846Z",
    modifiedBy: "NA",
    modifiedDate: "2022-12-08T13:19:59.846Z",
    checkbox,
  })
  .catch((err) => {
    console.log(err);
  });
useEffect(() => {
  axios
    .get(`http://nias.codelovertechnology.com/Gallery`)
    .then((response) => {
      setAPIData(response.data);
    });
}, []);


const onDelete = (id) => {
  axios
    .delete(`http://nias.codelovertechnology.com/Gallery/${id}`)
    .then(() => {
      getData();
      alert("Your data has beeen deleted");
    });
};
const getData = () => {
  axios
    .get(`http://nias.codelovertechnology.com/Gallery`)
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
                      Manage <b>Gallery</b>
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
                    <th>Title</th>
                    <th>SubTitle</th>
                    <th>Description</th>
                    <th>Photo</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {APIData.map((data) => {
                    return (
                      <tr key={data.galaryID}>
                        <td>{data.galaryID}</td>
                        <td>{data.title}</td>
                        <th>{data.subTitle}</th>
                        <th>{data.description}</th>
                        <th><img src={"http://nias.codelovertechnology.com/Gallery/upload/"  + data.imagePath} width="40" height="30" /></th>
                        <td>
                          <a
                            href="#editEmployeeModal"
                            className="edit"
                            data-toggle="modal"
                          >
                            <i
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Edit"
                            >
                              &#xE254;
                            </i>
                          </a>
                          <a
                            href="#deleteEmployeeModal"
                            className="delete"
                            data-toggle="modal"
                          >
                            <i
                                 onClick={() => onDelete(data.galaryID)}
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
        <div id="addEmployeeModal" className="modal fade">
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
                        onChange={(e) => setImagePath(e.target.files[0])}
                        className="form-control form-control"
                        id="formFileLg"
                        type="file"
                      />
                    </div>
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

                  <div className=" form-group mb-0">
                    <button
                      className="btn btn-primary float-right "
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

        <div id="editEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Edit Product</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                </div>

                <div className="container">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      //   onChange={(e) => setMasterTable(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>SubTitle</label>
                    <input
                      //   onChange={(e) => setTableValue(e.target.value)}
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
                        className="form-control form-control"
                        id="formFileLg"
                        type="file"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      //   onChange={(e) => setCheckbox(!checkbox)}
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
                      className="btn btn-primary float-right "
                      //   onClick={updateAPIData}
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

export default AdminGallery;
