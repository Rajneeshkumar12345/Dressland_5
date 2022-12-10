import React, {useState, useEffect} from 'react'
import axios from "axios";


function VendorCenterShop() {

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
  const [checkbox, setCheckbox] = useState(false);

  
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
  return (
    <>
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
                    </div>
                  </div>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Sr. No.</th>
                        <th>Person Name</th>
                        <th>Person Contact No</th>
                        <th>Person Email </th>
                        <th>Shop Name</th>
                        <th>Shop Contact No</th>
                        <th>Shop Email </th>
                        <th>Shop Address</th>
                        <th>City</th>
                        <th>State</th>
                        {/* <th>Shop Banner</th> */}
                        <th>Remarks</th>
                        
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
                            {/* <td>{data.shopBanner}</td> */}
                            <td>{data.remarks}</td>
                           
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

    
          </div>
        </div>
    </>
  )
}

export default VendorCenterShop