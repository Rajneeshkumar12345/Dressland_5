import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ContactAdminUpdate() {
  let navigate = useNavigate();
  const [contactID, setID] = useState(null);
  const [companyName, setcompanyName] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [aboutUsTitle, setAboutTitle] = useState("");
  const [aboutUsDescription, setAboutdescription] = useState("");
  const [registeredAddress, setRegisered] = useState("");
  const [corporateOffice, setcorporateOffice] = useState("");
  const [contactNo, setContact] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [email_ID, setEmail_ID] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [youTubeUrl, setYouTubeUrl] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [linkdlnUrl, setLinkdlnUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [googleMap, setGoogleMap] = useState("");
  const [googleLocalBusinessUrl, setGoogleLocalBusinessUrl] = useState("");
  const [remarks, setRemarks] = useState("");
  const [companyProfileWithCourse, setCompanyProfileWithCourse] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    setID(localStorage.getItem("contactID"));
    setcompanyName(localStorage.getItem("companyName"));
    setSubTitle(localStorage.getItem("subTitle"));
    setAboutTitle(localStorage.getItem("aboutUsTitle"));
    setAboutdescription(localStorage.getItem("aboutUsDescription"));
    setRegisered(localStorage.getItem("registeredAddress"));
    setcorporateOffice(localStorage.getItem("corporateOffice"));
    setContact(localStorage.getItem("contactNo"));
    setPhone(localStorage.getItem("phoneNo"));
    setEmail_ID(localStorage.getItem("email_ID"));
    setWebsiteURL(localStorage.getItem("websiteURL"));
    setFacebookUrl(localStorage.getItem("facebookUrl"));
    setYouTubeUrl(localStorage.getItem("youTubeUrl"));
    setTwitterUrl(localStorage.getItem("twitterUrl"));
    setLinkdlnUrl(localStorage.getItem("linkdlnUrl"));
    setInstagramUrl(localStorage.getItem("instagramUrl"));
    setGoogleMap(localStorage.getItem("googleMap"));
    setGoogleLocalBusinessUrl(localStorage.getItem("googleLocalBusinessUrl"));
    setRemarks(localStorage.getItem("remarks"));
    setCompanyProfileWithCourse(
      localStorage.getItem("companyProfileWithCourse")
    );
    setCheckbox(localStorage.getItem("checkbox"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`${process.env.REACT_APP_API}ContactMaster/${contactID}`, {
        contactID,
        companyName,
        subTitle,
        aboutUsTitle,
        aboutUsDescription,
        registeredAddress,
        corporateOffice,
        contactNo,
        phoneNo,
        email_ID,
        websiteURL,
        facebookUrl,
        youTubeUrl,
        twitterUrl,
        linkdlnUrl,
        instagramUrl,
        googleMap,
        googleLocalBusinessUrl,
        remarks,
        companyProfileWithCourse,
        createdBy: "string",
        createdDate: "2022-12-28",
        modifiedBy: "string",
        modifiedDate: "2022-12-28",
        checkbox,
      })
      .then(() => {
        navigate("/ContactAdminPage");
      });
  };
  return (
    <div className="UserRegistrationUpdate">
      <div className="container " style={{ height: "39rem" }}>
        <h3 className="text-center mt-3">-: Update Contact :-</h3>
        <Form className="create-form">
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Company Name :-</label>
            <input
              placeholder="EnterEmail"
              className="Enquiry_Input col-md-6"
              value={companyName}
              onChange={(e) => setcompanyName(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">SubTitle :-</label>
            <input
              placeholder="EnterPhone"
              className=" Enquiry_Input col-md-6"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">About Us Title :-</label>
            <input
              placeholder="EnterMessage"
              className="Enquiry_Input col-md-6"
              value={aboutUsTitle}
              onChange={(e) => setAboutTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">
              About Us Description :-
            </label>
            <textarea
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={aboutUsDescription}
              onChange={(e) => setAboutdescription(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Registered Office :-</label>
            <textarea
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={registeredAddress}
              onChange={(e) => setRegisered(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Corporate Office :-</label>
            <textarea
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={corporateOffice}
              onChange={(e) => setcorporateOffice(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Remarks :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Email :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={email_ID}
              onChange={(e) => setEmail_ID(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Contact :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={contactNo}
              onChange={(e) => setContact(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Phone No :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={phoneNo}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Web URL :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={websiteURL}
              onChange={(e) => setWebsiteURL(e.target.value)}
            />
          </Form.Field>

          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">FB URL :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={facebookUrl}
              onChange={(e) => setFacebookUrl(e.target.value)}
            />
          </Form.Field>

          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">YouTube URL :-</label>
            <input
              placeholder="EnterName"
              className="Enquiry_Input col-md-6"
              value={youTubeUrl}
              onChange={(e) => setYouTubeUrl(e.target.value)}
            />
          </Form.Field>

          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Twitter URL :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={twitterUrl}
              onChange={(e) => setTwitterUrl(e.target.value)}
            />
          </Form.Field>

          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Linkdln URL :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={linkdlnUrl}
              onChange={(e) => setLinkdlnUrl(e.target.value)}
            />
          </Form.Field>

          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Insta URL :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={instagramUrl}
              onChange={(e) => setInstagramUrl(e.target.value)}
            />
          </Form.Field>

          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">Google Map :-</label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={googleMap}
              onChange={(e) => setGoogleMap(e.target.value)}
            />
          </Form.Field>

          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">
              Google Local Business URL :-
            </label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={googleLocalBusinessUrl}
              onChange={(e) => setGoogleLocalBusinessUrl(e.target.value)}
            />
          </Form.Field>

          <Form.Field className="mt-5">
            <label className="text-dark col-md-6">
              CompanyProfileWithCourse :-
            </label>
            <input
              placeholder="EnterName "
              className="Enquiry_Input col-md-6"
              value={companyProfileWithCourse}
              onChange={(e) => setCompanyProfileWithCourse(e.target.value)}
            />
          </Form.Field>
          <Form.Field className="mt-5 ms-2">
            <Checkbox
              className="text-dark ms-2"
              label="Check me out"
              value={checkbox}
              onChange={(e) => setCheckbox(!checkbox)}
            />
          </Form.Field>
          <Button
            className="btn btn-primary btn-lg"
            onClick={updateAPIData}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ContactAdminUpdate;
