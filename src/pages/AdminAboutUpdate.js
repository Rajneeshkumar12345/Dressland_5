import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminAboutUpdate() {
  let navigate = useNavigate();
  const [aboutID, setID] = useState(null);
  const [aboutTitle, setTitle] = useState("")
  const[remarks, setRemarks] = useState("")
  const[description, setDescription] = useState("")
  const[imagesURL, , setImagePath] = useState("")
  const[checkbox, setCheckbox] = useState(false)


  useEffect(() => {
    setID(localStorage.getItem("aboutID"));
    setTitle(localStorage.getItem("aboutTitle"));
    setRemarks(localStorage.getItem("remarks"));
    setDescription(localStorage.getItem("description"));
    // setImagePath(localStorage.getItem("imagesURL"));
    setCheckbox(localStorage.getItem("checkbox"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`${process.env.REACT_APP_API}AboutMaster/${aboutID}`, {
        aboutID,
        aboutTitle,
        description,
        imagesURL,
        remarks,
        createdBy: "string",
        createdDate: "2022-12-28",
        modifiedBy: "string",
        modifiedDate: "2022-12-28",  
        checkbox,
      })
      .then(() => {
        navigate("/AdminAbout");
      });
  };


  return (
    <>
      <div className="Enquiry_Update">
          <div className="container" style={{height:"39rem"}}>
          <Form className="create-form">
            <div className="row">
            <Form.Field className="mt-5">
                  <label className="text-white col-md-6">About Title :-</label>
                  <input
                    placeholder="EnterName "
                    className="Enquiry_Input col-md-6"
                    value={aboutTitle}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Field>
            </div>
             
                <Form.Field className="mt-5">
                  <label className="text-white col-md-6">Remarks :-</label>
                  <input
                    placeholder="EnterEmail"
                    className="Enquiry_Input col-md-6"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="mt-5">
                  <label className="text-white col-md-6">Description :-</label>
                  <textarea
                    placeholder="EnterMessage"
                    className="Enquiry_Input col-md-6"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="mt-5">
                  <label className="text-white col-md-6">Photo :-</label>
                  <input
                   type="file"
                    placeholder="File"
                    className="col-md-6"
                    // value={imagesURL}
                    value={imagesURL}
                    onChange={(e) => setImagePath(e.target.files[0])}
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
                  Update
                </Button>
              </Form>
          </div>
      </div>
    </>
  );
}

export default AdminAboutUpdate;