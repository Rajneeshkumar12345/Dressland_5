import React, { useState } from "react";
import EdiText from "react-editext";

function ContactAdminPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [goggle, setGoggle] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkdln, setLinkdln] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const handleEmail = (email) => {
    console.log(email);
    setEmail(email);
  };
  const handleAddress = (address) => {
    console.log(address);
    setAddress(address);
  };
  const handleName = (name) => {
    console.log(name);
    setName(name);
  };
  const handlePhone = (phone) => {
    console.log(phone);
    setPhone(phone);
  };
  const handleGoogle = (goggle) => {
    console.log(goggle);
    setGoggle(goggle);
  };

  const handleFacebook = (facebook) => {
    console.log(facebook);
    setFacebook(facebook);
  };

  const handleLinkdln = (linkdln) => {
    console.log(linkdln);
    setLinkdln(linkdln);
  };

  const handleTwitter = (twitter) => {
    console.log(twitter);
    setTwitter(twitter);
  };

  const handleInstagram = (instagram) => {
    console.log(instagram);
    setInstagram(instagram);
  };

  //   const handleInputChange = (event) => {
  //     const { name,email,address,phone, value } = event.target;
  //     setState((prevProps) => ({
  //       ...prevProps,
  //       [name]: value,
  //       [email]:value,
  //       [address]:value,
  //       [phone]:value
  //     }));
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(state);
  //   };
  return (
    <div className="Contact_Admin">
      <div
        className="container Contact_Admin_Form"
        style={{ width: "50%", marginBottom: "3rem" }}
      >
        <h2 className="text-center text-dark mt-3">ADMIN CONTACT </h2>
        {/* <form onSubmit={handleSubmit}> */}
        <div className="form-group">
          <label className="font-weight-bold">Name :-</label>
          <EdiText
            className=""
            value={name}
            type="text"
            onSave={handleName}
            //   editing={editing}
          />
        </div>
        <div className="form-group">
          <label className="font-weight-bold">Email :-</label>
          <EdiText
            className=""
            value={email}
            type="text"
            onSave={handleEmail}
            //   editing={editing}
          />
        </div>
        <div className="form-group">
          <label className="font-weight-bold">Address :-</label>
          <EdiText
            className=""
            value={address}
            type="text"
            onSave={handleAddress}
            //   editing={editing}
          />
        </div>
        <div className="form-group">
          <label className="font-weight-bold">Phone :-</label>
          <EdiText
            className=""
            value={phone}
            type="text"
            onSave={handlePhone}
            //   editing={editing}
          />
        </div>
        {/* </form> */}
        <div className="Contact_Admin_Social">
          <div className="form-group">
            <label className="font-weight-bold">Google Link Change:-</label>
            <EdiText
              className=""
              value={goggle}
              type="text"
              onSave={handleGoogle}
              //   editing={editing}
            />
          </div>

          <div className="form-group">
            <label className="font-weight-bold">Facebook Link Change:-</label>
            <EdiText
              className=""
              value={facebook}
              type="text"
              onSave={handleFacebook}
              //   editing={editing}
            />
          </div>

          <div className="form-group">
            <label className="font-weight-bold">Linkdln Link Change:-</label>
            <EdiText
              className=""
              value={linkdln}
              type="text"
              onSave={handleLinkdln}
              //   editing={editing}
            />
          </div>

          <div className="form-group">
            <label className="font-weight-bold">Twitter Link Change:-</label>
            <EdiText
              className=""
              value={twitter}
              type="text"
              onSave={handleTwitter}
              //   editing={editing}
            />
          </div>

          <div className="form-group">
            <label className="font-weight-bold">Instagram Link Change:-</label>
            <EdiText
              className=""
              value={instagram}
              type="text"
              onSave={handleInstagram}
              //   editing={editing}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactAdminPage;
