import React, { useState } from "react";
import "./ToggleSidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
//import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CottageIcon from "@mui/icons-material/Cottage";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonIcon from "@mui/icons-material/Person";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import LogoutIcon from "@mui/icons-material/Logout";

import Caro1 from "../images/Carosol1.jpg";
import Caro2 from "../images/Carosol2.jpg";
import Caro3 from "../images/Carosol3.jpg";
import img from "../images/Logo.png";

import Cloth1 from "../images/Cloth1.jpg";
import Cloth2 from "../images/Cloth2.jpg";
import Cloth3 from "../images/Cloth3.jpg";
import Cloth4 from "../images/Cloth4.jpg";
import Cloth5 from "../images/Cloth5.jpg";
import Cloth6 from "../images/Cloth6.jpg";
import Cloth7 from "../images/Cloth7.webp";
import Cloth8 from "../images/Cloth8.jpg";


import Logo from '../images/Logo.png'
import HomeIcon from '@mui/icons-material/Home';
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneIcon from '@mui/icons-material/Phone';

const ToggleSidebar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div className="container-fluid mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
          <div className="container-fluid">
            <a href="/" className="img_contain">
              <img
                src={img}
                className="img-fluid "
                width="60"
                height="40"
                alt="img"
              />
            </a>
            <div className="form-inline ml-auto">
              <div className="btn btn-primary" onClick={ToggleSidebar}>
                {/* <i className="fa fa-bars"></i> */}
                <MenuIcon fontSize="medium" />
              </div>
            </div>
          </div>
        </nav>
        <div class="container my-5">
          {/* <a
            href=""
            class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown"
          >
            Wholesale
          </a> */}

          <div class="ombre-externe">
            <div class="ombre-interne">
              <div
                id="carouselExampleCaptions"
                class="carousel slide "
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={Caro1}
                      class="d-block w-100 peinture-ombre-interne-fine"
                      alt="carosol_image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={Caro2}
                      class="d-block w-100"
                      alt="carosol_image"
                    />
                    {/* <div class="carousel-caption">
                      <h5>Second slide</h5>
                      <p></p>
                    </div> */}
                  </div>
                  <div class="carousel-item">
                    <img
                      src={Caro3}
                      class="d-block w-100"
                      alt="carosol-image"
                    />
                    {/* <div class="carousel-caption">
                      <h5>Third slide</h5>
                      <p></p>
                    </div> */}
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            <h4 className="mb-0 Toggle_CompanyName text-white"><span style={{fontSize:"50px", fontWeight:"600", marginLeft:"70px", color:"#0bad09"}}>SK</span> Dressland </h4>
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              {/* <i className="fa fa-times"></i> */}
              <CloseIcon fontSize="medium" />
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <a
                  href="/"
                  class="btn btn-dark btn-lg"
                  style={{ width: "15rem" }}
                >
                  <CottageIcon /> Home
                </a>
              </li>
              <li>
                <a
                  class="btn btn-dark btn-lg"
                  style={{ width: "15rem" }}
                  href="/About"
                  role="button"
                >
                  <InfoIcon /> About Us
                </a>
                {/* <div class="collapse" id="collapseExample">
                  <ul>
                    <li>
                      <a
                        className="btn btn-success mt-1"
                        style={{ width: "15rem" }}
                      >
                        About 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn btn-success mt-1"
                        style={{ width: "15rem" }}
                      >
                        About 2
                      </a>
                    </li>
                  </ul>
                </div> */}
              </li>

              <li>
                <a
                  href="/ProductGallery"
                  class="btn btn-dark btn-lg"
                  style={{ width: "15rem" }}
                >
                  {" "}
                  <ContactPageIcon />
                  Product
                </a>
              </li>
              <li>
                <a
                  href="/ProductExplore"
                  class="btn btn-dark btn-lg"
                  style={{ width: "15rem" }}
                >
                  {" "}
                  <AccountBoxIcon /> Gallery
                </a>
              </li>
              <li>
                <a
                  href="/Contact"
                  class="btn btn-dark btn-lg"
                  style={{ width: "15rem" }}
                >
                  {" "}
                  <PersonIcon /> Contact us
                </a>
              </li>
              <li>
                <a
                  href="/MainDash"
                  class="btn btn-dark btn-lg"
                  style={{ width: "15rem" }}
                >
                  {" "}
                  <AccountBoxIcon /> Admin Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/LoginPage"
                  class="btn btn-dark btn-lg"
                  style={{ width: "15rem" }}
                >
                  {" "}
                  <SettingsApplicationsIcon /> Login
                </a>
              </li>
              <li>
                {/* <a
                  href="/EnquiryForm"
                  class="btn btn-dark btn-lg"
                  style={{ width: "15rem" }}
                >
                  {" "}
                  <LogoutIcon /> Enquiry
                </a> */}
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>

        {/* POPUP WINDOW START FROM HERE  */}
        <button
          data-toggle="modal"
          data-target="#myModal"
          class="trigger_popup border-0"
        >
          <span>Enquire Now</span>
        </button>
        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">
            <div
              class="modal-content"
              // style={{ backgroundColor: "rgba(3, 3, 55, 0.5)" }}
            >
              {/* <div class="modal-header" >
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div> */}
              <div id="container"  style={{ marginTop: "3rem" }}>
              <button type="button" class="close text-right me-3" data-dismiss="modal">
                  &times;
                  </button>
                <header>Enquire Now </header>
                
                <form method="post">
                  <fieldset>
                    <br />
                    <input
                      type="text"
                      name="Entername"
                      id="username"
                      className="Popup_Common"
                      placeholder="EnterName"
                      required
                      autofocus
                    />
                    <br />
                    <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="Popup_Common"
                      placeholder="E-mail"
                      required
                    />
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      className="Popup_Common phone_class"
                      placeholder="Phone"
                      required
                    />
                    <br />
                    <br />
                    {/* <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      required
                    />
                    <br />
                    <br />
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="Confirm Password"
                      required
                    /> */}
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      placeholder="EnterMessage"
                      className="Popup_Common"
                    ></textarea>

                    <br />
                    <label for="submit"></label>
                    <input
                      type="submit"
                      name="submit"
                      id="submit"
                      value="REGISTER"
                      className="Popup_submit"
                    />
                  </fieldset>
                </form>
              </div>

              {/* <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div> */}
            </div>
          </div>
        </div>

      {/* ******************3D ROTATING COMPONENTS START FROM HERE**************** */}
      </div>
      <div className="rotate_div">
        <h1 className="rotate-heading py-3 col-sm-12">OUR DRESSES</h1>
        <h4 className="quote_head col-sm-12">We has been you Establish a relationship with our Customers from the get go!</h4>
      </div>
      <div className="rotatation">
        <div class="scope ">
          <span className="sp1">
            <img src={Cloth1} alt="not found" />
          </span>
          <span className="sp2">
            <img src={Cloth2} alt="not found" />
          </span>
          <span className="sp3">
            <img src={Cloth3} alt="not found" />
          </span>
          <span className="sp4">
            <img src={Cloth4} alt="not found" />
          </span>
          <span className="sp5">
            <img src={Cloth5} alt="not found" />
          </span>
          <span className="sp6">
            <img src={Cloth6} alt="not found" />
          </span>
          <span className="sp7">
            <img src={Cloth7} alt="not found" />
          </span>
          <span className="sp8">
            <img src={Cloth8} alt="not found" />
          </span>
        </div>
      </div>




{/* ************** * FOOTER START FROM HERE.*************************** */}

      <div className="footer">
        {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
        <div className="">
          {/* Footer  */}
          <footer
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: "#1c2331" }}
          >
            {/* Section: Social media  */}
            <section className="d-flex justify-content-between p-4"></section>

            <section className="">
              <div className="container text-center text-md-start mt-5">
                {/*  Grid row*/}
                <div className="row mt-3">
                  {/* Grid column*/}
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    {/* Content*/}
                    <h6 className="text-uppercase  fw-bold">
                      SK DRESSLAND
                    </h6>
                    <hr
                      className="mt-0 d-inline-block mx-auto"
                      style={{
                        width: "120px",
                        backgroundColor: " #7c4dff",
                        height: "2px",
                      }}
                    />
                    {/* <br></br> */}
                  <p>
                  <img
                      src={Logo}
                      height="50"
                      width="50"
                      alt="photo"
                      className=""
                      
                    />
                  </p>
                    <p className="footer_content">                    
                    Our mission is also to make quality Cloths
                accessible to all by providing quality product and
                Affordable price.
                    </p>
                  </div>
                  {/*  Grid column
          Grid column*/}

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/*Links */}
                    <h6 className="text-uppercase fw-bold">Menu</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "55px",
                        backgroundColor: " #7c4dff",
                        height: "2px",
                      }}
                    />
                    <p>
                      <a href="/" className="text-white">
                        Home
                      </a>
                    </p>
                    <p>
                      <a href="/About" className="text-white">
                        About us
                      </a>
                    </p>
                    <p>
                      <a href="/Courses" className="text-white">
                        Our Poduct
                      </a>
                    </p>
                    <p>
                      <a href="/Contact" className="text-white">
                        Contact us
                      </a>
                    </p>
                  </div>

                  <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    <h6 className="text-uppercase fw-bold">Privacy</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "88px",
                        backgroundColor: " #7c4dff",
                        height: "2px",
                      }}
                    />
                    <p>
                      <a href="/Product" className="text-white">
                        Privacy Policy
                      </a>
                    </p>
                    <p>
                      <a href="/Product" className="text-white">
                        Term and Conditions
                      </a>
                    </p>
                    <p>
                      <a href="/Product" className="text-white">
                        Refund Policy
                      </a>
                    </p>
                  </div>
                  {/*  Grid column 
          Grid column*/}

                  {/* Grid column
           Grid column */}
                  <div className="col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold">Contact</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "80px",
                        backgroundColor: " #7c4dff",
                        height: "2px",
                      }}
                    />
                    <p>
                      <i className=" mr-3"></i><HomeIcon/>{" "}Enter Addresses
                    </p>
                    <p>
                      <i className=" mr-3"></i>
                      <DraftsIcon/>{" "}Enter Email
                    </p>
                    <p>
                      <i className=" mr-3"></i><PhoneIcon/>{" "}Enter Phone
                    </p>
                    {/* <p>
                      <i className="fas fa-print mr-3"></i>Please Write Company
                      Policy here
                    </p> */}
                  </div>
                </div>
              </div>
            </section>

            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(9, 9, 9, 0.8)" }}
            >
              © 2022 All Right Reserved by:- 
              <a className="text-white" href="/">
                {""} SK DRESSLAND {""} 
              </a>
              
              || Developed by:-
              <a
                className="text-white"
                href="https://codelovertechnology.com/"
                target="_blank"
              >
              {""}  CodeLover Technology Pvt. Ltd.
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ToggleSidebar;
