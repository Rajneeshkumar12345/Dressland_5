import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EnquiryUpdate() {
  let navigate = useNavigate();
  const [enquiryID, setID] = useState(null);
  const [name, setName] = useState("");
  const [email_ID, setEmail] = useState("");
  const [contactNo, setPhone] = useState("");
  const [enqMessage, setMsg] = useState("");
  const[replyMessage, setReplyMsg] = useState("")
  const [checkbox, setCheckbox] = useState(false);  

  useEffect(() => {
    setID(localStorage.getItem("enquiryID"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email_ID"));
    setPhone(localStorage.getItem("contactNo"));
    setMsg(localStorage.getItem("enqMessage"));
    setCheckbox(localStorage.getItem("checkbox"));
  }, []);

  const updateAPIData = () => {
    console.log(updateAPIData)
    axios
      .put(`http://nias.codelovertechnology.com/EnquiryMaster/${enquiryID}`, {
        enquiryID,
        name,
        contactNo,
        email_ID,
        enqMessage,
        replyMessage,
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
          <div className="container" style={{height:"39rem"}}>
          <Form className="create-form">
            <div className="row">
            <Form.Field className="mt-5">
                  <label className="text-white col-md-6">Name :-</label>
                  <input
                    placeholder="EnterName "
                    className="Enquiry_Input col-md-6"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Field>
            </div>
             
                <Form.Field className="mt-5">
                  <label className="text-white col-md-6">Email :-</label>
                  <input
                    placeholder="EnterEmail"
                    className="Enquiry_Input col-md-6"
                    value={email_ID}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="mt-5">
                  <label className="text-white col-md-6">Phone :-</label>
                  <input
                    placeholder="EnterPhone"
                    className=" Enquiry_Input col-md-6"
                    value={contactNo}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="mt-5">
                  <label className="text-white col-md-6">Message :-</label>
                  <textarea
                    placeholder="EnterMessage"
                    className="Enquiry_Input col-md-6"
                    value={enqMessage}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="mt-5">
                  <label className="text-white col-md-6">Reply :-</label>
                  <textarea
                    placeholder="EnterMessage"
                    className="Enquiry_Input col-md-6"
                    // value={enqMessage}
                    onChange={(e) => setReplyMsg(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="mt-5 ms-2">
                  <Checkbox
                    className="text-white ms-2"
                    label="Check me out"
                    value={checkbox}
                    onChange={(e) => setCheckbox(!checkbox)}
                  />
                </Form.Field>
                <Button className="btn btn-primary btn-lg" onClick={updateAPIData} type="submit">
                  Submit
                </Button>
              </Form>
          </div>
      </div>
    </>
  );
}

export default EnquiryUpdate;
