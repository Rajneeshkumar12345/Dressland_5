import React, { useState } from "react";
import EdiText from "react-editext";
import Sidebar from "../components/Sidebar";

function AboutAdminPage() {
  // const [editing, setEditing] = useState(false);
  const [value, setValue] = useState("About SK Dressland");
  const [file, setFile] = useState("");
  const handleSave = (value) => {
    console.log(value);
    setValue(value);
  };

  const handleChange = (e) => {
    const data = e.target.files[0];
    setFile(data);
  };
  return (
    <>

<Sidebar/>
    <div className="About_Admin" style={{marginTop:"7rem"}}>
      <div className="container About_Container_Admin">
        <h2 className="text-center text-dark mt-3">About us</h2>
        {/* <button className='' onClick={() => setEditing((v) => !v)} style={{width:"15%"}}>Toggle</button> */}
        {/*  Apply your changes below */}
        <div className="Contact_TextArea" style={{ marginTop: "50px" }}>
          <EdiText
            className=""
            value={value}
            type="text"
            onSave={handleSave}
            //   editing={editing}
          />
        </div>

        <div className="File_Uloading mt-5">
          <input type="file" onChange={handleChange} />
          {file && (
            <div>
              <span>{file.name}</span>
              <img src={URL.createObjectURL(file)} />
            </div>
          )}
        </div>
      </div>
    </div>
    </>

  );
}

export default AboutAdminPage;
