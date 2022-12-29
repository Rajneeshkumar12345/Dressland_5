import React, {useState, useEffect} from "react";
import Sidebar from "../components/Sidebar";
import "./Stock.css";
import axios from 'axios'

function Master() {
  const [APIData, setAPIData] = useState([]);
  const [userID, setUserID] = useState("");
  const [productID, setProductID] = useState("");
  const [stock, setStock] = useState("");
  const [unit, setUnit] = useState("");
  const [minimumStock, setMinimumStock] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const PostData = () => {
    axios.post(`${process.env.REACT_APP_API}MasterStock`, {
      stock_ID: 0,
      userID,
      productID,
      stock,
      unit,
      minimumStock,
      remarks: "NA",
      createdBy: "Admin",
      createdDate: "2022-12-08T13:20:50.924Z",
      modifiedBy: "NA",
      modifiedDate: "2022-12-08T13:20:50.924Z",  
      checkbox,
    });
    // .then((error) =>{
    //  alert(error)
    // })
  };

  axios
    .get(`${process.env.REACT_APP_API}MasterStock`, {
      stock_ID: 0,
      userID,
      productID,
      stock,
      unit,
      minimumStock,
      remarks: "NA",
      createdBy: "Admin",
      createdDate: "2022-12-08T13:20:50.924Z",
      modifiedBy: "NA",
      modifiedDate: "2022-12-08T13:20:50.924Z",  
      checkbox,
    })
    .catch((err) => {
      console.log(err);
    });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}MasterStock`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const onDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API}MasterStock/${id}`)
      .then(() => {
        getData();
        alert("Your data has beeen deleted");
      });
  };
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_API}MasterStock`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <>
    <Sidebar/>
    <div className="AdminStock" style={{marginTop:"7rem"}}>
    <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>Stock</b>
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
                    <th>User ID</th>
                    <th>Product ID</th>
                    <th>Stock</th>
                    <th>Unit</th>
                    <th>Minimum Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {APIData.map((data) => {
                    return (
                      <tr key={data.stock_ID}>
                        <td>{data.stock_ID}</td>
                        <td>{data.userID}</td>
                        <td>{data.productID}</td>
                        <td>{data.stock}</td>
                        <td>{data.unit}</td>
                        <td>{data.minimumStock}</td>
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
                               onClick={() => onDelete(data.stock_ID)}
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
                  <h4 className="modal-title col-md-6">Add Stock</h4>
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
                    <label>User ID</label>
                    <input
                      onChange={(e) => setUserID(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Product ID</label>
                    <input
                      onChange={(e) => setProductID(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Stock</label>
                    <input
                      onChange={(e) => setStock(e.target.value)}
                      type="value"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Unit</label>
                    <input
                      onChange={(e) => setUnit(e.target.value)}
                      type="value"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Minimum Stock</label>
                    <input
                      onChange={(e) => setMinimumStock(e.target.value)}
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
                    <label>User ID</label>
                    <input
                      onChange={(e) => setUserID(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Product ID</label>
                    <input
                      onChange={(e) => setProductID(e.target.value)}
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Stock</label>
                    <input
                      onChange={(e) => setStock(e.target.value)}
                      type="value"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Unit</label>
                    <input
                      onChange={(e) => setUnit(e.target.value)}
                      type="value"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Minimum Stock</label>
                    <input
                      onChange={(e) => setMinimumStock(e.target.value)}
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
    </div>
  
    </>
  );
}

export default Master;
