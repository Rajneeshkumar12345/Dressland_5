import React, { useState } from "react";
import "./Product.css";

// const [state, setState ] =useState(initialState);

function Product() {
  return (
    <>
      <div className="Product">
        <div class="container-xl">
          <div class="table-responsive">
            <div class="table-wrapper">
              <div class="table-title">
                <div class="row">
                  <div class="col-sm-6">
                    <h2>
                      Manage <b>Product</b>
                    </h2>
                  </div>
                  <div class="col-sm-6">
                    <a
                      href="#addEmployeeModal"
                      class="btn btn-success"
                      data-toggle="modal"
                    >
                      <i class="material-icons">&#xE147;</i>{" "}
                      <span>Add New Product</span>
                    </a>
                    <a
                      href="#deleteEmployeeModal"
                      class="btn btn-danger"
                      data-toggle="modal"
                    >
                      <i class="material-icons">&#xE15C;</i> <span>Delete</span>
                    </a>
                  </div>
                </div>
              </div>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>
                      <span class="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label for="selectAll"></label>
                      </span>
                    </th>
                    <th>Product Name</th>
                    <th>Quality</th>
                    <th>About</th>
                    <th>Brand</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span class="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox1"
                          name="options[]"
                          value="1"
                        />
                        <label for="checkbox1"></label>
                      </span>
                    </td>
                    <td>Product one</td>
                    <td>New</td>
                    <td>This is something About</td>
                    <td>Brand</td>
                    <td>
                      <a
                        href="#editEmployeeModal"
                        class="edit"
                        data-toggle="modal"
                      >
                        <i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >
                          &#xE254;
                        </i>
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        class="delete"
                        data-toggle="modal"
                      >
                        <i
                          class="material-icons"
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
                      <span class="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox2"
                          name="options[]"
                          value="1"
                        />
                        <label for="checkbox2"></label>
                      </span>
                    </td>
                    <td>Product one</td>
                    <td>New</td>
                    <td>This is something About</td>
                    <td>Brand</td>
                    <td>
                      <a
                        href="#editEmployeeModal"
                        class="edit"
                        data-toggle="modal"
                      >
                        <i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >
                          &#xE254;
                        </i>
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        class="delete"
                        data-toggle="modal"
                      >
                        <i
                          class="material-icons"
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
                      <span class="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox3"
                          name="options[]"
                          value="1"
                        />
                        <label for="checkbox3"></label>
                      </span>
                    </td>
                    <td>Product one</td>
                    <td>New</td>
                    <td>This is something About</td>
                    <td>Brand</td>
                    <td>
                      <a
                        href="#editEmployeeModal"
                        class="edit"
                        data-toggle="modal"
                      >
                        <i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >
                          &#xE254;
                        </i>
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        class="delete"
                        data-toggle="modal"
                      >
                        <i
                          class="material-icons"
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
                      <span class="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox4"
                          name="options[]"
                          value="1"
                        />
                        <label for="checkbox4"></label>
                      </span>
                    </td>
                    <td>Product one</td>
                    <td>New</td>
                    <td>This is something About</td>
                    <td>Brand</td>
                    <td>
                      <a
                        href="#editEmployeeModal"
                        class="edit"
                        data-toggle="modal"
                      >
                        <i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >
                          &#xE254;
                        </i>
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        class="delete"
                        data-toggle="modal"
                      >
                        <i
                          class="material-icons"
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
                      <span class="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox5"
                          name="options[]"
                          value="1"
                        />
                        <label for="checkbox5"></label>
                      </span>
                    </td>
                    <td>Product one</td>
                    <td>New</td>
                    <td>This is something About</td>
                    <td>Brand</td>
                    <td>
                      <a
                        href="#editEmployeeModal"
                        class="edit"
                        data-toggle="modal"
                      >
                        <i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >
                          &#xE254;
                        </i>
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        class="delete"
                        data-toggle="modal"
                      >
                        <i
                          class="material-icons"
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
              <div class="clearfix">
                {/* <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div> */}
                <ul class="pagination">
                  <li class="page-item disabled">
                    <a href="#">Previous</a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      2
                    </a>
                  </li>
                  <li class="page-item active">
                    <a href="#" class="page-link">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      4
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      5
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
