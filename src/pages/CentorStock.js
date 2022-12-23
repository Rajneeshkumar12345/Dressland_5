import React, {useState, useEffect} from "react";
import "./Stock.css";
import axios from 'axios'
import VendorDahboard from "../components/VendorDashboard";
import VendorSidebar from "../components/VendorSidebar";
import CentorSidebar from "../components/CentorSidebar";

function CentorStock() {
  const [APIData, setAPIData] = useState([]);
  const [id, setID] = useState(null);
  const [userID, setUserID] = useState("");
  const [productID, setProductID] = useState("");
  const [stock, setStock] = useState("");
  const [unit, setUnit] = useState("");
  const [minimumStock, setMinimumStock] = useState("");
  const [checkbox, setCheckbox] = useState(false);




//   const PostData = () => {
//     axios.post("http://nias.codelovertechnology.com/MasterStock", {
//       stock_ID: 0,
//       userID,
//       productID,
//       stock,
//       unit,
//       minimumStock,
//       remarks: "NA",
//       createdBy: "Admin",
//       createdDate: "2022-12-08T13:20:50.924Z",
//       modifiedBy: "NA",
//       modifiedDate: "2022-12-08T13:20:50.924Z",  
//       checkbox,
//     });
 
//   };

  axios
    .get("http://nias.codelovertechnology.com/MasterStock", {
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
      .get(`http://nias.codelovertechnology.com/MasterStock`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);


  return (
   <>
  
   <div className="VendorStock" >
   <CentorSidebar/>
   <div className="container-xl " >
          <div className="table-responsive" style={{marginTop:"7rem"}}>
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Centor <b>Stock</b>
                    </h2>
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
                       
                      </tr>
                    );
                  })}
                </tbody>
              </table>
         
            </div>
          </div>
        </div>
   </div>
   </>
  )
}

export default CentorStock;