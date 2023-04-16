import React, { useEffect, useState } from "react";
import "./ToggleSidebar.css";
import { Link, useNavigate } from "react-router-dom";
import Caro1 from "../images/Cloth9.webp";
import Caro2 from "../images/Cloth10.jpg";
import Caro3 from "../images/Cloth11.jpg";
import img from "../images/Logo.png";
import Cloth1 from "../images/Cloth1.webp";
import Cloth2 from "../images/Cloth2.webp";
import Cloth3 from "../images/Cloth3.jpg";
import Cloth4 from "../images/Cloth4.webp";
import Cloth5 from "../images/Cloth5.webp";
import Cloth6 from "../images/Cloth6.webp";
import Cloth7 from "../images/Cloth7.webp";
import Cloth8 from "../images/Cloth8.jpg";
import Logo from "../images/Logo.png";
import HomeIcon from "@mui/icons-material/Home";
import DraftsIcon from "@mui/icons-material/Drafts";
import PhoneIcon from "@mui/icons-material/Phone";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Enquire from "./Enquire";

const ToggleSidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();

  // useEffect(()  =>{
  //    if(!localStorage.getItem('token')){
  // navigate('/LoginPage')
  //    }
  // })
  return (
    <>
      <div className="navBar fixed-top">
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <div className="row w-100">
              <div className="col-sm-12 col-md-8 d-flex">
                <div className="row w-100">
                  <div className="col-1">
                    <Link to="#" className="menu-bars">
                      <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                  </div>
                  <div className="col-3">
                    <Link to="/" className="img_contain">
                      <img
                        src={img}
                        className="img-fluid img-thumbnails"
                        width="120"
                        height="90"
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="col-8">
                    <div className="h1 text-white text-uppercase SK_Home">
                      SK Dressland
                      <h6
                        className=" Quotation_Treasure"
                        style={{ color: "#2bed21" }}
                      >
                        Treasure Of Fashion With New Trends
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-4 Social_Menu_Icon">
                <section
                  className=" d-flex float-right "
                  style={{ marginTop: "-3rem" }}
                >
                  <div>
                    <a
                      href="https://www.facebook.com/CodeLoverTech/"
                      target="_blank"
                    >
                      <WhatsAppIcon fontSize="medium" />{" "}
                      <a href="tel:+" className="text-dark"></a>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.facebook.com/CodeLoverTech/"
                      target="_blank"
                      className=" ms-3"
                    >
                      <FacebookOutlinedIcon fontSize="medium" />
                    </a>
                    <a
                      href="https://twitter.com/infoRajInfotech"
                      target="_blank"
                      className=" ms-3"
                    >
                      <TwitterIcon fontSize="medium" />
                    </a>

                    <a
                      href="https://www.instagram.com/codelovertechnology/?hl=en"
                      target="_blank"
                      className=" ms-3"
                    >
                      <InstagramIcon fontSize="medium" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/codelover-technology-810724151/"
                      target="_blank"
                      className=" ms-3"
                    >
                      <LinkedInIcon fontSize="medium" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/codelover-technology-810724151/"
                      target="_blank"
                      className=" ms-3"
                    >
                      <YouTubeIcon fontSize="medium" />
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars Close_Tag">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>

      <div className="container-fluid mt-3">
        <div className="container my-5">
          <div className="ombre-externe">
            <div className="ombre-interne">
              <div
                id="carouselExampleCaptions"
                className="carousel slide "
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={Caro1}
                      className="d-block w-100 peinture-ombre-interne-fine"
                      alt="carosol_image"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Caro2}
                      className="d-block w-100"
                      alt="carosol_image"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Caro3}
                      className="d-block w-100"
                      alt="carosol-image"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/****************************** * POPUP WINDOW START FROM HERE  ****************************************/}
        <Enquire />
      </div>

      {/* ******************3D ROTATING COMPONENTS START FROM HERE**************** */}

      <div className="rotate_div">
        <h1 className="rotate-heading py-3 col-sm-12">OUR DRESSES</h1>
        <h4 className="quote_head col-sm-12">
          We has been you Establish a relationship with our Customers from the
          get go!
        </h4>
      </div>
      <div className="rotatation">
        <div className="scope ">
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
      {/*********** * Start Apply btn section from here ***********************************************/}
      <section className="" style={{ backgroundColor: "#2a3661" }}>
        <div className="Center">
          <h3 className="text-center text-white">
            -: Connect with us for
            <span style={{ color: "#f20ac4" }}>Center Shop </span>:-
          </h3>
          <div className="center_btn">
            <Link to="/UserRegistration">
              <button className="btn btn-success btn-lg">Apply Now</button>
            </Link>
          </div>
        </div>
      </section>

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
                    <h6 className="text-uppercase  fw-bold">SK DRESSLAND</h6>
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
                      Our mission is also to make quality Cloths accessible to
                      all by providing quality product and Affordable price.
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
                      <i className=" mr-3"></i>
                      <HomeIcon /> Enter Addresses
                    </p>
                    <p>
                      <i className=" mr-3"></i>
                      <DraftsIcon /> info@skdressland.com
                    </p>
                    <p>
                      <i className=" mr-3"></i>
                      <PhoneIcon /> +91 723 693 3313
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
                {""} CodeLover Technology Pvt. Ltd.
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ToggleSidebar;
