import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import "./Enquire.css";
import { useNavigate } from "react-router-dom";

function Enquire() {
  const [name, setName] = useState("");
  const [email_ID, setEmail] = useState("");
  const [contactNo, setPhone] = useState("");
  const [enqMessage, setMsg] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const errRef = useRef();
  const [msg, setmsg] = useState("")
  const navigate = useNavigate();

  const PostData = () => {
    setmsg("Enquiry has been submitted")
    axios.post("http://nias.codelovertechnology.com/EnquiryMaster", {
      enquiryID: 0,
      name,
      contactNo,
      email_ID,
      enqMessage,
      replyMessage: "NA",
      remarks: "NA",
      enquiryStatus: "New",
      createdBy: "NA",
      createdDate: "2022-11-25",
      modifiedBy: "NA",
      modifiedDate: "2022-11-25",
      checkbox,
    }) 
    // .then(() =>{
    //   setTimeout(() => {
    //     navigate('/')
    //   }, 5000)
    // })
  // return alert("Enquiry has been Submitted")
  
  };
  return (
    <>
      <button
        data-toggle="modal"
        data-target="#myModal"
        className="trigger_popup border-0"
      >
        <span>Enquire Now</span>
      </button>
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
          <p
          ref={errRef}
          className={msg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {msg}
        </p>
            <div id="container" style={{ marginTop: "0rem" }}>
              <button
                type="button"
                className="close text-right me-3 Close_button"
                data-dismiss="modal"
              >
                &times;
              </button>
              <header>Enquire Now </header>

              <Form className="create-form">
                <Form.Field className="Enq_Input">
                  <label className="text-white Enq">Name</label>
                  <input
                    placeholder="EnterName "
                    className="Enquiry_Input"
                  
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="Enq_Input">
                  <label className="text-white Enq">Email</label>
                  <input
                    placeholder="EnterEmail"
                    className="Enquiry_Input"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="Enq_Input">
                  <label className="text-white Enq">Phone</label>
                  <input
                    placeholder="EnterPhone"
                    className="Enquiry_Input"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="Enq_Input">
                  <label className="text-white Enq">Message</label>
                  <textarea
                    placeholder="EnterMessage"
                    className="Enquiry_Input"
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="Enq_Input">
                  <Checkbox
                    className="text-white"
                    label="Check me out"
                    onChange={(e) => setCheckbox(!checkbox)}
                  />
                </Form.Field>
                <Button className="Enquiry_Button" onClick={PostData} type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Enquire;
