import React from "react";

function VendorSupport() {
  return (
    <>
      <div className="Support" style={{backgroundColor:"#c9c997", height:"39.1rem"}}>
        <form>
          <div className="container ">
            <div className="form-group">
              <label>Support Type :-</label>
              <select>
                <option>Web Support</option>
                <option>Stock Support</option>
              </select>
            </div>
            <div className="form-group">
              <div>
                <label for="formFileLg" className="form-label">
                  Upload image :-
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message :-
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default VendorSupport;
