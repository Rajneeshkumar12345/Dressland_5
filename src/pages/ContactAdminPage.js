import React, { useEffect, useState } from "react";
import { TextArea } from "semantic-ui-react";
import Sidebar from "../components/Sidebar";
import "./Product.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Product() {
  const [APIData, setAPIData] = useState([]);

  const setData = (data) => {
    console.log(data);
    let {
      contactID,
      companyName,
      subTitle,
      aboutUsTitle,
      aboutUsDescription,
      registeredAddress,
      corporateOffice,
      contactNo,
      phoneNo,
      email_ID,
      websiteURL,
      facebookUrl,
      youTubeUrl,
      twitterUrl,
      linkdlnUrl,
      instagramUrl,
      googleMap,
      googleLocalBusinessUrl,
      remarks,
      companyProfileWithCourse,
      checkbox,
    } = data;
    localStorage.setItem("contactID", contactID);
    localStorage.setItem("companyName", companyName);
    localStorage.setItem("subTitle", subTitle);
    localStorage.setItem("aboutUsTitle", aboutUsTitle);
    localStorage.setItem("aboutUsDescription", aboutUsDescription);
    localStorage.setItem("registeredAddress", registeredAddress);
    localStorage.setItem("corporateOffice", corporateOffice);
    localStorage.setItem("contactNo", contactNo);
    localStorage.setItem("phoneNo", phoneNo);
    localStorage.setItem("email_ID", email_ID);
    localStorage.setItem("websiteURL", websiteURL);
    localStorage.setItem("facebookUrl", facebookUrl);
    localStorage.setItem("youTubeUrl", youTubeUrl);
    localStorage.setItem("twitterUrl", twitterUrl);
    localStorage.setItem("linkdlnUrl", linkdlnUrl);
    localStorage.setItem("instagramUrl", instagramUrl);
    localStorage.setItem("googleMap", googleMap);
    localStorage.setItem("googleLocalBusinessUrl", googleLocalBusinessUrl);
    localStorage.setItem("remarks", remarks);
    localStorage.setItem("companyProfileWithCourse", companyProfileWithCourse);
    localStorage.setItem("checkbox", checkbox);
  };

 
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}ContactMaster`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  //  DELETE TASK PERFORM HERE
  const onDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API}ContactMaster/${id}`)
      .then(() => {
        getData();
        alert("Your data has been deleted");
      });
  };
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_API}ContactMaster`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <>
      <Sidebar />
      <div className="Product" style={{ marginTop: "8rem" }}>
        <div className="container-xxl ">
          <div className="table-responsive">
            <div className="table-wrapper w-auto">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Manage <b>Contact</b>
                    </h2>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Contact ID</th>
                    <th>Company Name</th>
                    <th>SubTitle</th>
                    <th>About Us Title</th>
                    <th>About Us Description</th>
                    <th>Registered Office</th>
                    <th>Corporate Office</th>
                    <th>Remarks</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Phone No</th>
                    <th>Web URL</th>
                    <th>FB URL</th>
                    <th>YouTube URL</th>
                    <th>Twitter URL</th>
                    <th>Linkdln URL</th>
                    <th>Insta URL</th>
                    <th>Google Map</th>
                    <th>Google Local Business URL</th>
                    <th>CompanyProfileWithCourse</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {APIData.map((data) => {
                    return (
                      <tr key={data.contactID}>
                        <td>{data.contactID}</td>
                        <td>{data.companyName}</td>
                        <td>{data.subTitle}</td>
                        <td>{data.aboutUsTitle}</td>
                        <td>{data.aboutUsDescription}</td>
                        <td>{data.registeredAddress}</td>
                        <td>{data.corporateOffice}</td>
                        <td>{data.remarks}</td>
                        <td>{data.email_ID}</td>
                        <td>{data.contactNo}</td>
                        <td>{data.phoneNo}</td>
                        <td>{data.websiteURL}</td>
                        <td>{data.facebookUrl}</td>
                        <td>{data.youTubeUrl}</td>
                        <td>{data.twitterUrl}</td>
                        <td>{data.linkdlnUrl}</td>
                        <td>{data.instagramUrl}</td>
                        <td>{data.googleMap}</td>
                        <td>{data.googleLocalBusinessUrl}</td>
                        <td>{data.companyProfileWithCourse}</td>
                        <td>
                          <Link to="/ContactAdminUpdate">
                            <button
                              className="btn btn-info"
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
                              onClick={() => onDelete(data.contactID)}
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

        {/* <div id="addEmployeeModal" className="modal fade">
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
                  <div className="form-group col-md-12 mb-3">
                    <label for="validationDefault01">Product Code :-</label>
                    <input
                      onChange={(e) => setcompanyName(e.target.value)}
                      type="number"
                      className="form-control"
                      id="validationDefault01"
                      placeholder="Enter Product Code"
                      required
                    />
                  </div>
                  <div className="form-group  col-md-12 mb-3">
                    <label for="validationDefault02">Product Name :-</label>
                    <input
                      onChange={(e) => setcorporateOffice(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefault02"
                      placeholder="Enter Product Name"
                      required
                    />
                  </div>
                  <div className=" form-group col-md-12 mb-3">
                    <label for="validationDefaultUsername">
                      Product SubTitle :-
                    </label>
                    <input
                      onChange={(e) => setcontactNo(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefaultUsername"
                      placeholder="Enter Product SubTitle"
                      aria-describedby="inputGroupPrepend2"
                      required
                    />
                  </div>
                  <div className="form-group col-md-12 mb-3">
                    <label for="validationDefault03">Product Category :-</label>
                    <input
                      onChange={(e) => setProductCategory(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefault03"
                      placeholder="Enter Product Category"
                      required
                    />
                  </div>
                  <div className="form-group col-md-12 mb-3">
                    <label for="validationDefault04">Product Type :-</label>
                    <input
                      onChange={(e) => setProductType(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefault04"
                      placeholder="Enter Product Type"
                      required
                    />
                  </div>
                  <div className="form-group col-md-12 mb-3">
                    <label for="validationDefault05">
                      Product Description :-
                    </label>
                    <TextArea
                      onChange={(e) => setProductDescription(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefault05"
                      placeholder="Enter Product Description"
                      required
                    />
                  </div>
                  <div className="form-group col-md-12 mb-3">
                    <label for="validationDefault03">Product MRP :-</label>
                    <input
                      onChange={(e) => setMRP(e.target.value)}
                      type="number"
                      className="form-control"
                      id="validationDefault03"
                      placeholder="Enter MRP"
                      required
                    />
                  </div>
                  <div className="form-group col-md-12 mb-3">
                    <label for="validationDefault04">Offer Code :-</label>
                    <input
                      onChange={(e) => setOfferCode(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefault04"
                      placeholder="Enter Offer Code"
                      required
                    />
                  </div>
                  <div className="form-group col-md-12 mb-3">
                    <label for="validationDefault05">Product Image1 :-</label>
                    <input
                      onChange={(e) =>
                        setProductImg(
                          "/images/ProductImages/" + e.target.files[0].name
                        )
                      }
                      className="form-control"
                      id="formFileLg"
                      type="file"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      onChange={(e) => setCheckbox(!checkbox)}
                      className="form-check-input mt-3 ms-1"
                      type="checkbox"
                      value=""
                      id="invalidCheck2"
                      required
                    />
                    <label
                      className="form-check-label text-dark ms-4"
                      for="invalidCheck2"
                    >
                      Check me out
                    </label>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary"
                      type="submit"
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
                  <p className="text-warning">
                    <small>Are you sure you want to delete this product?</small>
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
                    onClick={(data) => onDelete(data.contactID)}
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
    </>
  );
}

export default Product;
