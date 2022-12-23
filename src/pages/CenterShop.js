import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "./CenterShop.css";
import axios from "axios";
import { Link } from "react-router-dom";

function CenterShop() {
  const [APIData, setAPIData] = useState([]);
  const [shopName, setShopName] = useState("");
  const [personName, setPersonName] = useState("");
  const [shopEmail_ID, setEmail_ID] = useState("");
  const [shopContactNo, setShopContactNo] = useState("");
  const [personContactNo, setPersonContactNo] = useState("");
  const [personEmailID, setPersonEmailID] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [shopBanner, setShopBanner] = useState("");
  const [remarks, setRemarks] = useState("");
  const [checkbox, setCheckbox] = useState(true);

  const setData = (data) => {
    console.log(data);
    let {shopID,shopName, personName, shopEmail_ID, shopContactNo, personContactNo, personEmailID,  shopAddress , city, state, shopBanner, remarks, checkbox} = data
    localStorage.setItem("shopID", shopID);
    localStorage.setItem("shopName", shopName);
    localStorage.setItem("personName", personName);
    localStorage.setItem("shopEmail_ID", shopEmail_ID);
    localStorage.setItem("shopContactNo", shopContactNo);
    localStorage.setItem("personContactNo", personContactNo);
    localStorage.setItem("personEmailID", personEmailID);
    localStorage.setItem("shopAddress", shopAddress);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
    localStorage.setItem("shopBanner", shopBanner);
    localStorage.setItem("remarks", remarks);
    localStorage.setItem("checkbox", checkbox);
  };

  const PostData = () => {
    axios.post("http://nias.codelovertechnology.com/ShopMaster", {
      shopID: 0,
      shopName,
      personName,
      shopEmail_ID,
      shopContactNo,
      personContactNo,
      personEmailID,
      shopAddress,
      city,
      state,
      shopBanner,
      remarks,
      createdBy: "NA",
      createdDate: "2022-11-23T12:56:22.535Z",
      modifiedBy: "NA",
      modifiedDate: "2022-11-23T12:56:22.536Z",
      checkbox,
    });
  };

  axios
    .get("http://nias.codelovertechnology.com/ShopMaster", {
      shopID: 0,
      shopName,
      personName,
      shopEmail_ID,
      shopContactNo,
      personContactNo,
      personEmailID,
      shopAddress,
      city,
      state,
      shopBanner,
      remarks,
      createdBy: "NA",
      createdDate: "2022-11-23T12:56:22.535Z",
      modifiedBy: "NA",
      modifiedDate: "2022-11-23T12:56:22.536Z",
      checkbox,
    })
    .catch((err) => {
      console.log(err);
    });
  useEffect(() => {
    axios
      .get(`http://nias.codelovertechnology.com/ShopMaster`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const onDelete = (id) => {
    axios
      .delete(`http://nias.codelovertechnology.com/ShopMaster/${id}`)
      .then(() => {
        getData();
        alert("Your data has been deleted");
      });
  };
  const getData = () => {
    axios
      .get(`http://nias.codelovertechnology.com/ShopMaster`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <>
      <Sidebar />
      <div className="CenterShop" style={{ marginTop: "5rem" }}>
        <header className="text-center CenterSop_header">
          <p className="tag-line py-2"> Center/Shop </p>
        </header>
        <div className="wrapper">
          <main>
            <div className="info" style={{ marginTop: "5rem" }}>
              <h3 className="Center_heading">Signup For Center</h3>
              <p>
                Get the lastest update of the product is doing right in your
                business.
              </p>
            </div>

            <form>
              <div className="container text-white">
                <div className="row">
                  <div className="form-group col-md-4 mb-3">
                    <label for="validationDefault01">Person Full Name :-</label>
                    <input
                      onChange={(e) => setPersonName(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefault01"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                  <div className="form-group  col-md-4 mb-3">
                    <label for="validationDefault02">
                      Person Contact No :-
                    </label>
                    <input
                      onChange={(e) => setPersonContactNo(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefault02"
                      placeholder="Enter Phone"
                      required
                    />
                  </div>
                  <div className=" form-group col-md-4 mb-3">
                    <label for="validationDefaultUsername">
                      Person Email ID :-
                    </label>
                    <input
                      onChange={(e) => setPersonEmailID(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefaultUsername"
                      placeholder="Enter Email"
                      aria-describedby="inputGroupPrepend2"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-4 mb-3">
                    <label for="validationDefault03">Shop Name :-</label>
                    <input
                      onChange={(e) => setShopName(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefault03"
                      placeholder="Enter Shop Name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-4 mb-3">
                    <label for="validationDefault04">Shop Contact No :-</label>
                    <input
                      onChange={(e) => setShopContactNo(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefault04"
                      placeholder="Enter Shop Contact"
                      required
                    />
                  </div>
                  <div className="form-group col-md-4 mb-3">
                    <label for="validationDefault05">Shop Email ID :-</label>
                    <input
                      onChange={(e) => setEmail_ID(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefault05"
                      placeholder="Enter Shop Email"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6 mb-3">
                    <label for="validationDefault03">Shop Address :-</label>
                    <input
                      onChange={(e) => setShopAddress(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefault03"
                      placeholder="Enter Shop Address"
                      required
                    />
                  </div>
                  <div className="form-group col-md-3 mb-3">
                    <label for="validationDefault04">City :-</label>
                    <input
                      onChange={(e) => setCity(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefault04"
                      placeholder="Enter City"
                      required
                    />
                  </div>
                  <div className="form-group col-md-3 mb-3">
                    <label for="validationDefault05">State :-</label>
                    <input
                      onChange={(e) => setState(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefault04"
                      placeholder="Enter State"
                      required
                    />

                    {/* <select
                      onChange={(e) => setState(e.target.value)}
                      className="form-select  form-select-sm"
                      style={{ height: "40px" }}
                    >
                      <option value="state">Choose State</option>
                      <option value="abc">Andhra Pradesh</option>
                      <option value="def">Arunachal Pradesh</option>
                      <option value="geh">Assam</option>
                      <option value="ijk">Bihar</option>
                      <option value="ftg">Chhattisgarh</option>
                      <option value="hjk">Gujarat</option>
                      <option value="kil">Haryana</option>
                      <option value="tyu">Himachal Pradesh</option>
                      <option value="ewt">Jharkhand</option>
                      <option value="yrt">Karnataka</option>
                      <option value="sef">Kerala</option>
                      <option value="bhj">Madhya Pradesh</option>
                      <option value="jki">Maharashtra</option>
                      <option value="lop">Manipur</option>
                      <option value="pol">Meghalaya</option>
                      <option value="rty">Mizoram</option>
                      <option value="wer">Nagaland</option>
                      <option value="aws">Odisha</option>
                      <option value="">Punjab</option>
                      <option value="upe">Rajasthan</option>
                      <option value="upe">Sikkim</option>
                      <option value="upe">Tamil Nadu</option>
                      <option value="upe">Telangana</option>
                      <option value="upe">Tripura</option>
                      <option value="upe">Uttar Pradesh</option>
                      <option value="upe">Uttarakhand</option>
                      <option value="upe">West Bengal</option>
                    </select> */}
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-md-6 mb-3">
                    <label for="formFileLg" className="form-label">
                      Shop Banner :-
                    </label>
                    <input
                      onChange={(e) => setShopBanner(e.target.files[0])}
                      className="form-control form-control"
                      id="formFileLg"
                      type="file"
                    />
                  </div>
                  <div className="form-group col-md-6 mb-3">
                    <label for="validationDefault04">Remarks :-</label>
                    <input
                      onChange={(e) => setRemarks(e.target.value)}
                      type="text"
                      className="form-control"
                      id="validationDefault04"
                      placeholder="Enter Remarks"
                      required
                    />
                  </div>
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
                  <label className="form-check-label ms-4" for="invalidCheck2">
                    Check me out
                  </label>
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={PostData}
                  >
                    Submit form
                  </button>
                </div>
              </div>
            </form>
          </main>
        </div>

        <div className="getAPIData mt-5">
          <div className="UserAdmin">
            <div className="container-xxl" style={{ marginTop: "7rem" }}>
              <div className="table-responsive">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-sm-6">
                        <h2>
                          Manage <b>Center Shop</b>
                        </h2>
                      </div>
                      <div className="col-sm-6">
                        <a
                          href="#addEmployeeModal"
                          className="btn btn-success"
                          data-toggle="modal"
                        >
                          <i className="material-icons">&#xE147;</i>{" "}
                          <span>Add New User</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Sr. No.</th>
                        <th>Person Name</th>
                        <th>Person Contact</th>
                        <th>Person Email </th>
                        <th>Shop Name</th>
                        <th>Shop Contact</th>
                        <th>Shop Email </th>
                        <th>Shop Address</th>
                        <th>City</th>
                        <th>State</th>
                        {/* <th>Shop Banner</th> */}
                        <th>Remarks</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {APIData.map((data) => {
                        return (
                          <tr key={data.shopID}>
                            <td>{data.shopID}</td>
                            <td>{data.personName}</td>
                            <td>{data.personContactNo}</td>
                            <td>{data.personEmailID}</td>
                            <td>{data.shopName}</td>
                            <td>{data.shopContactNo}</td>
                            <td>{data.shopEmail_ID}</td>
                            <td>{data.shopAddress}</td>
                            <td>{data.city}</td>
                            <td>{data.state}</td>
                            {/* <td><img src={"http://nias.codelovertechnology.com/ShopMaster" + data.shopBanner} width="40" height="30" /></td> */}
                            <td>{data.remarks}</td>
                            <td>
                              <Link to="/CenterShopUpdate">
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
                                  onClick={() => onDelete(data.shopID)}
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

            <div id="addEmployeeModal" className="modal fade">
              <div className="modal-dialog">
                <div className="modal-content">
                  <form>
                    <div className="modal-header">
                      <h4 className="modal-title col-md-8">Add Center Shop</h4>
                      <div className="float-right">
                        <button
                          type="button"
                          className="close col-md-4"
                          data-dismiss="modal"
                          aria-hidden="true"
                        >
                          &times;
                        </button>
                      </div>
                    </div>

                    <div className="container">
                      <div className="row">
                        <div className="form-group col-md-12 mb-3">
                          <label for="validationDefault01">
                            Person Full Name :-
                          </label>
                          <input
                            onChange={(e) => setPersonName(e.target.value)}
                            type="text"
                            className="form-control"
                            id="validationDefault01"
                            placeholder="Enter Name"
                            required
                          />
                        </div>
                        <div className="form-group  col-md-12 mb-3">
                          <label for="validationDefault02">
                            Person Contact No :-
                          </label>
                          <input
                            onChange={(e) => setPersonContactNo(e.target.value)}
                            type="text"
                            className="form-control"
                            id="validationDefault02"
                            placeholder="Enter Phone"
                            required
                          />
                        </div>
                        <div className=" form-group col-md-12 mb-3">
                          <label for="validationDefaultUsername">
                            Person Email ID :-
                          </label>
                          <input
                            onChange={(e) => setPersonEmailID(e.target.value)}
                            type="text"
                            className="form-control"
                            id="validationDefaultUsername"
                            placeholder="Enter Email"
                            aria-describedby="inputGroupPrepend2"
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12 mb-3">
                          <label for="validationDefault03">Shop Name :-</label>
                          <input
                            onChange={(e) => setShopName(e.target.value)}
                            type="text"
                            className="form-control"
                            id="validationDefault03"
                            placeholder="Enter Shop Name"
                            required
                          />
                        </div>
                        <div className="form-group col-md-12 mb-3">
                          <label for="validationDefault04">
                            Shop Contact No :-
                          </label>
                          <input
                            onChange={(e) => setShopContactNo(e.target.value)}
                            type="text"
                            className="form-control"
                            id="validationDefault04"
                            placeholder="Enter Shop Contact"
                            required
                          />
                        </div>
                        <div className="form-group col-md-12 mb-3">
                          <label for="validationDefault05">
                            Shop Email ID :-
                          </label>
                          <input
                            onChange={(e) => setEmail_ID(e.target.value)}
                            type="text"
                            className="form-control"
                            id="validationDefault05"
                            placeholder="Enter Shop Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-12 mb-3">
                          <label for="validationDefault03">
                            Shop Address :-
                          </label>
                          <input
                            onChange={(e) => setShopAddress(e.target.value)}
                            type="text"
                            className="form-control"
                            id="validationDefault03"
                            placeholder="Enter Shop Address"
                            required
                          />
                        </div>
                        <div className="form-group col-md-12 mb-3">
                          <label for="validationDefault04">City :-</label>
                          <input
                            onChange={(e) => setCity(e.target.value)}
                            type="text"
                            className="form-control"
                            id="validationDefault04"
                            placeholder="Enter City"
                            required
                          />
                        </div>
                        <div className="form-group col-md-12 mb-3">
                          <label for="validationDefault05">State :-</label>
                          <input
                            onChange={(e) => setState(e.target.value)}
                            type="text"
                            className="form-control"
                            id="validationDefault04"
                            placeholder="Enter State"
                            required
                          />
                          {/* <select
                      onChange={(e) => setState(e.target.value)}
                      className="form-select  form-select-sm"
                      style={{ height: "40px" }}
                    >
                      <option >Choose State</option>
                      <option >Andhra Pradesh</option>
                      <option >Arunachal Pradesh</option>
                      <option >Assam</option>
                      <option >Bihar</option>
                      <option >Chhattisgarh</option>
                      <option >Gujarat</option>
                      <option >Haryana</option>
                      <option >Himachal Pradesh</option>
                      <option >Jharkhand</option>
                      <option >Karnataka</option>
                      <option >Kerala</option>
                      <option >Madhya Pradesh</option>
                      <option >Maharashtra</option>
                      <option >Manipur</option>
                      <option >Meghalaya</option>
                      <option >Mizoram</option>
                      <option >Nagaland</option>
                      <option >Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option >Rajasthan</option>
                      <option >Sikkim</option>
                      <option >Tamil Nadu</option>
                      <option >Telangana</option>
                      <option >Tripura</option>
                      <option >Uttar Pradesh</option>
                      <option >Uttarakhand</option>
                      <option >West Bengal</option>
                    </select> */}
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-md-12 mb-3">
                          <label for="formFileLg" className="form-label">
                            Shop Banner :-
                          </label>
                          <input
                            onChange={(e) => setShopBanner(e.target.value)}
                            className="form-control form-control"
                            id="formFileLg"
                            type="file"
                          />
                        </div>
                        <div className="form-group col-md-12 mb-3">
                          <label for="validationDefault04">Remarks :-</label>
                          <input
                            onChange={(e) => setRemarks(e.target.value)}
                            type="text"
                            className="form-control"
                            id="validationDefault04"
                            placeholder="Enter Remarks"
                            required
                          />
                        </div>
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
                          Submit form
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* <div id="editEmployeeModal" className="modal fade">
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
                <div className="modal-body">
                  <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>User Email</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>User Contact</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea className="form-control" required></textarea>
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>User Center</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Remarks</label>
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
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CenterShop;
