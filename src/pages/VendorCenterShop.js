import React, {useState, useEffect} from 'react'
import axios from "axios";
import VendorSidebar from '../components/VendorSidebar';


function VendorCenterShop() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://nias.codelovertechnology.com/ShopMaster`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
  return (
    <>
    <VendorSidebar/>
     <div className="getAPIData mt-5">
          <div className="UserAdmin">
            <div className="container-xxl" style={{ marginTop: "7rem" }}>
              <div className="table-responsive">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-sm-6">
                        <h2>
                          Vendor <b>Center Shop</b>
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