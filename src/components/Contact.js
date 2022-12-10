import React, {useEffect} from "react";
import "./Contact.css";
import Toggle from "./Toggle";

function Contact() {
  useEffect(() => {
    document.nav = "";
  });
  return (
    <>
    <Toggle/>
      <div className="row" id="contatti" style={{ marginTop: "5rem" }}>
        <div className=" mt-5">
          <div className="container">
            <div className="row" style={{ height: "550px" }}>
              <div className="col-md-6 " style={{ marginTop: "10px" }}>
                <div className="Contact_text">
                  <h4 className="contact_sk col-sm-12">SK DRESSLAND</h4>
                </div>
                <div className="Contact-info" style={{marginTop:"3rem"}}>
                  <div className="contact_info_sec">
                    <h4 className="text-white col-sm-12">Contact Info</h4>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-headset"></i>
                      <span className="text-white col-sm-12">+91 6498653450</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-envelope-open-text"></i>
                      <span className="text-white  col-sm-12">info@dressland.com</span>
                    </div>
                    <div className="d-flex info_single align-items-center">
                      <i className="fas fa-map-marked-alt"></i>
                      <span className="text-white  col-sm-12">
                      Ajamgarh, UP, India.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className=" mt-3 font-weight-lighter text-white">
                  CONTACT US
                </h2>
                <form action="">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control mt-2"
                          placeholder="FirstName"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control mt-2"
                          placeholder="LastName"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control mt-2"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control mt-2"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          placeholder="Messege"
                          rows="3"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-6">
                      <button className="btn btn-light" type="submit">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text-white">
                  <h2 className="text-uppercase mt-4 font-weight-bold">
                    SK DRESSLAND
                  </h2>
                  <i className="fas fa-phone  mt-3"></i>{" "}
                  <a href="tel:+">+91 6498653450</a>
                  <br></br>
                  {/* <i className="fas fa-phone mt-3"></i>{" "}
                <a href="tel:+">(+916794123456</a>
                <br></br> */}
                  <i className="fa fa-envelope mt-3"></i>{" "}
                  <a href="">info@dressland.com</a>
                  <br></br>
                  <i className="fas fa-globe mt-3"></i>Ajamgarh, UP, India.
                  <br></br>
                  {/* <i className="fas fa-globe mt-3"></i> Address second<br></br> */}
                  {/* <div className="my-4">
                    <a href="">
                      <i className="fab fa-facebook fa-3x pr-4"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin fa-3x"></i>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="container mad_container">
            <div
              className="map col-md-12 maps"
              style={{ marginTop: "12rem", borderRadius: "10px" }}
            >
              <div className="text_goggle text-center mb-3">
                <h3 className="map_headind">Find Us on Google Map</h3>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14024.645830202722!2d77.297967!3d28.50478965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1665217887296!5m2!1sen!2sin"
                width="350"
                height="500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                frameBorder="0"
                style={{ borderRadius: "25px" }}
                allowfullscreeen="true"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center bg-success text-white" id="author">
        <div className="col-12 col-sm-12 mt-4 h3 ">
          <a href="#">SK DRESSLAND</a>
        </div>
        <div className="col-12 col-sm-12 my-3">
          {/* <a href="*" target="_blank">
            <i className="fab fa-linkedin fa-2x"></i>
          </a> */}
          <a href="*" target="_blank">
            <i className="fab fa-google fa-2x ms-5"></i>
          </a>
          <a href="*" target="_blank">
            <i className="fab fa-facebook fa-2x  ms-5"></i>
          </a>
          <a href="*" target="_blank">
            <i className="fab fa-instagram fa-2x  ms-5"></i>
          </a>
          <a href="*" target="_blank">
            <i className="fab fa-twitter fa-2x  ms-5"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
