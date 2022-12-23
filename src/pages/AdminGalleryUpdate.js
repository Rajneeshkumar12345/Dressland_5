import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminGalleryUpdate() {
  let navigate = useNavigate();
  const [galaryID, setGalleryID] = useState(null);
  const [title, setTitle] = useState("")
  const[subTitle, setSubTitle] = useState("")
  const[description, setDescription] = useState("")
  const[imagePath, , setImagePath] = useState("")
  //const[file, setFile] = useState();
  const[checkbox, setCheckbox] = useState(false)

  useEffect(() => {
    setGalleryID(localStorage.getItem("galaryID"));
    setTitle(localStorage.getItem("title"));
    setSubTitle(localStorage.getItem("subTitle"));
    setDescription(localStorage.getItem("description"));
   // setImagePath(localStorage.getItem("imagePath"));
    setCheckbox(localStorage.getItem("checkbox"));
  }, []);

  const updateAPIData = () => {
    console.log(updateAPIData)
    axios
      .put(`http://nias.codelovertechnology.com/Gallery/${galaryID}`, {
        galaryID,
        title,
        subTitle,
        description,
        imagePath,
        remarks: "NA",
        createdBy: "NA",
        createdDate: "2022-12-08T13:19:59.846Z",
        modifiedBy: "NA",
        modifiedDate: "2022-12-08T13:19:59.846Z",
        checkbox,
      })
      .then(() => {
        navigate("/AdminGallery");
      });
  };


  return (
    <>
      <div className="Enquiry_Update">
          <div className="container" style={{height:"39rem"}}>
          <Form className="create-form">
            <div className="row">
            <Form.Field className="mt-5">
                  <label className="text-white col-md-6">Title :-</label>
                  <input
                    placeholder="EnterName "
                    className="Enquiry_Input col-md-6"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Field>
            </div>
             
                <Form.Field className="mt-5">
                  <label className="text-white col-md-6">SubTitle :-</label>
                  <input
                    placeholder="EnterEmail"
                    className="Enquiry_Input col-md-6"
                    value={subTitle}
                    onChange={(e) => setSubTitle(e.target.value)}
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
                  <label className="text-white col-md-6">Upload image :-</label>
                  <input
                   type="file"
                    placeholder="File"
                    className="col-md-6"
                    value={imagePath}
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

export default AdminGalleryUpdate;
