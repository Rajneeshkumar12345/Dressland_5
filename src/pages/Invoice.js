import React from "react";
import "./Invoice.css";

function Invoice() {
  return (
    <>
      <div className="Invoice container">
        <div className="Invoice_Header">
          <header className="text-white text-center mt-5">Invoice</header>
        </div>
        <div className="Company_Info mt-5">
          <h2 className="text-dark">SK Dressand</h2>
          <p className="text-dark">
            Azamgarh,<br></br>UP,
          </p>
          <p className="text-dark">9689567452</p>
        </div>
        <div className="Invoice_Body float-right">
          <table className="table-responsive table table-striped table-bordered">
            <tr>
              <th>#Invoice</th>
              <td>23455</td>
            </tr>

            <tr>
              <th>#Date</th>
              <td>23/08/2022</td>
            </tr>

            <tr>
              <th>#Amount Due</th>
              <td>500 Rs.</td>
            </tr>
          </table>
        </div>
        <div className="Invoice_Table">
          <table className="table-responsive table table-striped table-bordered">
            <tr className="row tr-dark" style={{ backgroundColor: "#c7fff6" }}>
              <th className="col-md-2">Sr. No.</th>
              <th className="col-md-4">Description</th>
              <th className="col-md-2">Rate</th>
              <th className="col-md-2">Quantity</th>
              <th className="col-md-2">Price</th>
            </tr>

            <tr className="row">
              <td className="col-md-2">1</td>
              <td className="col-md-4">Good</td>
              <td className="col-md-2">150</td>
              <td className="col-md-2">2</td>
              <td className="col-md-2">200</td>
            </tr>
          </table>
        </div>

        <div className="Payment float-right">
          <table className="table-responsive table table-striped table-bordered">
            <tr>
              <th>#CGST</th>
              <td>23455</td>
            </tr>

            <tr>
              <th>#SGST</th>
              <td>23/08/2022</td>
            </tr>

            <tr>
              <th>#Total</th>
              <td>500 Rs.</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Invoice;
