import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SupportAdminUpdate() {
  let navigate = useNavigate();
  const [supportID, setID] = useState(null);
  const [userID, setUserID] = useState("");
  const [adminReply, setReply] = useState("");
  const [queryImages, setImages] = useState("");
  const [message, setMsg] = useState("");
  const [checkbox, setCheckbox] = useState(false);  

  useEffect(() => {
    setID(localStorage.getItem("supportID"));
    setUserID(localStorage.getItem("userID"));
    setReply(localStorage.getItem("adminReply"));
    setImages(localStorage.getItem("queryImages"));
    setMsg(localStorage.getItem("message"));
    setCheckbox(localStorage.getItem("checkbox"));
  }, []);

  const updateAPIData = () => {
    console.log(updateAPIData)
    axios
      .put(`${process.env.REACT_APP_API}SupportMaster/${supportID}`, {
        supportID,
        userID,
        message,
        queryImages,
        ticketStatus: "Success",
        adminReply,
        createdBy: "string",
        createdDate: "2022-12-28T06:49:47.895Z",
        modifiedBy: "string",
        modifiedDate: "2022-12-28T06:49:47.895Z",
        checkbox,
      })
      .then(() => {
        navigate("/SupportAdmin");
      });
  };


  return (
    <>
      <div className="Enquiry_Update">
          <div className="container" style={{height:"39rem"}}>
          <Form className="create-form">
            <div className="row">
            <Form.Field className="mt-5">
                  <label className="text-white col-md-6">User ID :-</label>
                  <input
                    placeholder="EnterName "
                    className="Enquiry_Input col-md-6"
                    value={userID}
                    onChange={(e) => setUserID(e.target.value)}
                  />
                </Form.Field>
            </div>
             
                <Form.Field className="mt-5">
                  <label className="text-white col-md-6">Message :-</label>
                  <textarea
                    placeholder="EnterMsg"
                    className="Enquiry_Input col-md-6"
                    value={message}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="mt-5">
                  <label className="text-white col-md-6">Querry Image :-</label>
                  <input
                  type="file"
                    placeholder="Enter"
                    className=" Enquiry_Input col-md-6"
                    // value={queryImages}
                    onChange={(e) => setImages(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="mt-5">
                  <label className="text-white col-md-6">Admin Reply :-</label>
                  <textarea
                    placeholder="EnterMessage"
                    className="Enquiry_Input col-md-6"
                    value={adminReply}
                    onChange={(e) => setReply(e.target.value)}
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

export default SupportAdminUpdate;