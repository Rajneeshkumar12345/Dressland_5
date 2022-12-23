import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MasterUpdate() {
  let navigate = useNavigate();
  const [masterID, setID] = useState(null);
  const [tableValue, setTableValue] = useState("");
  const [sequence, setSequence] = useState("");
  const [masterTable, setMasterTable] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    setID(localStorage.getItem("masterID"));
    setTableValue(localStorage.getItem("tableValue"));
    setSequence(localStorage.getItem("sequence"));
    setMasterTable(localStorage.getItem("masterTable"));
    setCheckbox(localStorage.getItem("checkbox"));
  }, []);

  const updateAPIData = () => {
    console.log(updateAPIData)
    axios
      .put(`http://nias.codelovertechnology.com/MastersAPI/${masterID}`, {
      masterID,
      masterTable,
      tableValue,
      sequence,
      createdBy: "Admin",
      createdDate: "2022-11-22",
      modifiedBy: "Admin",
      modifiedDate: "2022-11-22",
      checkbox,
      })
      .then(() => {
        navigate("/Master");
      });
  };


  return (
    <>
      <div className="Enquiry_Update">
          <div className="container" style={{height:"39rem"}}>
          <Form className="create-form">
            <div className="row">
            <Form.Field className="mt-5">
                  <label className="text-white col-md-6">Master Table :-</label>
                  <input
                    placeholder="EnterName "
                    className="Enquiry_Input col-md-6"
                    value={masterTable}
                    onChange={(e) => setMasterTable(e.target.value)}
                  />
                </Form.Field>
            </div>
                <Form.Field className="mt-5">
                  <label className="text-white col-md-6">Table Value :-</label>
                  <input
                    placeholder="EnterPhone"
                    className=" Enquiry_Input col-md-6"
                    value={tableValue}
                    onChange={(e) => setTableValue(e.target.value)}
                  />
                </Form.Field>
                <Form.Field className="mt-5">
                  <label className="text-white col-md-6">Sequence :-</label>
                  <input
                    placeholder="EnterMessage"
                    className="Enquiry_Input col-md-6"
                    value={sequence}
                    onChange={(e) => setSequence(e.target.value)}
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

export default MasterUpdate;
