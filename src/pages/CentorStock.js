import React, {useState, useEffect} from "react";
import "./Stock.css";
import axios from 'axios'
import CentorSidebar from "../components/CentorSidebar";

function CentorStock() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}MasterStock`)
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