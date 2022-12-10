import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EnquiryUpdate() {
  let navigate = useNavigate();
  const [id, setID] = useState(null);
  const [name, setName] = useState("");
  const [email_ID, setEmail] = useState("");
  const [contactNo, setPhone] = useState("");
  const [enqMessage, setMsg] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  // const setData = () => {
  //   console.log(name);
  //   console.log(email);
  //   console.log(phone);
  //   console.log(msg);
  //   console.log(checkbox);
  // }

  //   const setData = (data) => {
  //     let { id, firstName, lastName, checkbox } = data;
  //     localStorage.setItem('ID', id);
  //     localStorage.setItem('First Name', firstName);
  //     localStorage.setItem('Last Name', lastName);
  //     localStorage.setItem('Checkbox Value', checkbox)
  // }
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name"));
    setEmail(localStorage.getItem("Email"));
    setPhone(localStorage.getItem("Phone"));
    setMsg(localStorage.getItem("Msg"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://637f3f9a2f8f56e28e857e08.mockapi.io/fakeData/${id}`, {
        enquiryID: 0,
        name,
        contactNo,
        email_ID,
        enqMessage,
        replyMessage: "NA",
        remarks: "NA",
        enquiryStatus: "NA",
        createdBy: "NA",
        createdDate: "2022-11-25",
        modifiedBy: "NA",
        modifiedDate: "2022-11-25",
        checkbox,
      })
      .then(() => {
        navigate("/EnquiryForm");
      });
  };

  

  return (
    <>
      <div className="Enquiry_Update">
        <div className="container">
          <form>
            <div className="modal-header">
              <h4 className="modal-title">Edit Enquiry</h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Name</label>
                <input
                // name={name == null ? '' : name}
                 
                  onChange={(e) => setName(e.target.name)}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  email_ID={email_ID == null ? '' : email_ID}
                  onChange={(e) => setEmail(e.target.name)}
                  type="email"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                contactNo={contactNo == null ? '' : contactNo}
             
                  onChange={(e) => setPhone(e.target.name)}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Enquiry Update</label>
                <textarea
                enqMessage={enqMessage == null ? '' : enqMessage}
               
                  onChange={(e) => setMsg(e.target.name)}
                  className="form-control"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  className="form-check-input ms-1"
                  id="exampleCheck1"
                   checked={checkbox}
                  onChange={() => setCheckbox(!checkbox)}
                />
                <label className="form-check-label ms-4" for="exampleCheck1" style={{marginTop:'-10px'}}>
                  Check me out
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <Link to="/EnquiryForm">
                <button className="btn btn-default">Cancel</button>
              </Link>
              <input onClick={updateAPIData} type="submit" className="btn btn-info" value="Save" />
            </div>
          </form>
          {/* <div>
            <Form className="create-form">
              <Form.Field>
                <label>First Name</label>
                <input
                  placeholder="First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  placeholder="Last Name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Phone</label>
                <input
                  placeholder="Last Name"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Enquiry Update</label>
                <textarea
                  placeholder="Last Name"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label="I agree to the Terms and Conditions"
                  checked={checkbox}
                  onChange={() => setCheckbox(!checkbox)}
                />
              </Form.Field>
              <Button type="submit" onClick={updateAPIData}>
                Update
              </Button>
            </Form>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default EnquiryUpdate;
