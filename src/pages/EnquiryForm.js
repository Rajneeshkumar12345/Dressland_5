import React from "react";
import Sidebar from "../components/Sidebar";
import "./EnquiryForm.css";

function EnquiryForm() {
  return (
    <>
    <Sidebar/>
<div className="Product" style={{marginTop:"7rem"}}>
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>Enquiry</b>
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
                    <a
                      href="#deleteEmployeeModal"
                      className="btn btn-danger"
                      data-toggle="modal"
                    >
                      <i className="material-icons">&#xE15C;</i> <span>Delete</span>
                    </a>
                  </div> */}
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label for="selectAll"></label>
                      </span>
                    </th>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Enquiry</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox1"
                          name="options[]"
                          value="1"
                        />
                        <label for="checkbox1"></label>
                      </span>
                    </td>
                    <td>Rohit Kumar</td>
                    <td>abc@gmail.com</td>
                    <td>+91 5164996694</td>
                    <td>Regarding Cloth quality</td>
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
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          &#xE872;
                        </i>
                      </a>
                      {/* <buttun className="btn btn-dark">Send</buttun> */}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox2"
                          name="options[]"
                          value="1"
                        />
                        <label for="checkbox2"></label>
                      </span>
                    </td>
                    <td>Rohit Kumar</td>
                    <td>abc@gmail.com</td>
                    <td>+91 5164996694</td>
                    <td>Regarding Cloth quality</td>
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
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          &#xE872;
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox3"
                          name="options[]"
                          value="1"
                        />
                        <label for="checkbox3"></label>
                      </span>
                    </td>
                    <td>Rohit Kumar</td>
                    <td>abc@gmail.com</td>
                    <td>+91 5164996694</td>
                    <td>Regarding Cloth quality</td>
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
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          &#xE872;
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox4"
                          name="options[]"
                          value="1"
                        />
                        <label for="checkbox4"></label>
                      </span>
                    </td>
                    <td>Rohit Kumar</td>
                    <td>abc@gmail.com</td>
                    <td>+91 5164996694</td>
                    <td>Regarding Cloth quality</td>
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
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          &#xE872;
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox5"
                          name="options[]"
                          value="1"
                        />
                        <label for="checkbox5"></label>
                      </span>
                    </td>
                    <td>Rohit Kumar</td>
                    <td>abc@gmail.com</td>
                    <td>+91 5164996694</td>
                    <td>Regarding Cloth quality</td>
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
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          &#xE872;
                        </i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="clearfix">
                {/* <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div> */}
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
                  <li className="page-item ">
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
              </div>
            </div>
    
          </div>
          


          
        <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Edit Customer</h4>
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
                  <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>About</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Quality</label>
                    <textarea className="form-control" required></textarea>
                  </div>
                  <div className="form-group">
                    <label>Brand</label>
                    <input type="text" className="form-control" required />
                  </div>
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
                    className="btn btn-success"
                    value="Add"
                  />
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
                  <h4 className="modal-title">Edit Customer</h4>
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
                  <div className="form-group">
                    <label>Edit Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <textarea className="form-control" required></textarea>
                  </div>
                  <div className="form-group">
                    <label>Enquiry</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    value="Cancel"
                  />
                  <input type="submit" className="btn btn-info" value="Save" />
                </div>
              </form>
            </div>
          </div>
        </div>
       
        <div id="deleteEmployeeModal" className="modal fade">
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
        </div>
        </div>
        

      </div>
    </>
  );
}

export default EnquiryForm;
