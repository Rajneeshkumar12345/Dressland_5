import React,{useState,Component} from 'react'
import './Toggle.css'
import {Link} from "react-router-dom"

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
import img from "../images/Logo.png";
function Toggle() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
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
    
    </>
  )
}

export default Toggle