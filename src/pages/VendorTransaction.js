import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react'
import VendorSidebar from '../components/VendorSidebar';
// import { useReactToPrint } from "react-to-print";


function  VendorTransaction() {
  const [APIData, setAPIData] = useState([]);

  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}Trancation`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  return (
    <>
      <VendorSidebar/>
      <div className="UserAdmin">
        <div className="container-xl" style={{ marginTop: "7rem" }}>
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      Vendor <b>Transaction</b>
                    </h2>
                  </div>
                </div>
              </div>
              <table  className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>User ID</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Price</th>
                    <th>Reference No</th>
                  </tr>
                </thead>
                <tbody>
                  {APIData.map((data) => {
                    return (
                      <tr key={data.trancationID}>
                        <td>{data.trancationID}</td>
                        <td>{data.userID}</td>
                        <td>{data.productID}</td>
                        <td>{data.productName}</td>
                        <td>{data.quantity}</td>
                        <td>{data.unit}</td>
                        <td>{data.price}</td>
                        <td>{data.referenceNo}</td>
                        {/* <button onClick={handlePrint} className="btn btn-primary">  Print </button>  */}
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

export default VendorTransaction;