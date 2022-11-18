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
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <Link to="/" className="img_contain ">
              <img
                src={img}
                className="img-fluid "
                width="60"
                height="40"
                alt="img"
              />
            </Link>


            <section
              className="d-flex justify-content-between p-2 text-white Navbar_Social"
              style={{ backgroundColor: "#172470", marginLeft:"45rem" }}
            >
              <div className=" ms-5">
                <a
                  href="https://www.facebook.com/CodeLoverTech/"
                  target="_blank"
                  className="text-white me-4"
                >
                  <WhatsAppIcon fontSize="medium" />{" "}
                  <a href="tel:+" className="text-dark">
                  </a>
                </a>
              </div>

              <div>
                <a
                  href="https://www.facebook.com/CodeLoverTech/"
                  target="_blank"
                  className="text-white me-4"
                >
                  <FacebookOutlinedIcon fontSize="medium" />
                </a>
                <a
                  href="https://twitter.com/infoRajInfotech"
                  target="_blank"
                  className="text-white me-4"
                >
                  <TwitterIcon fontSize="medium" />
                </a>

                <a
                  href="https://www.instagram.com/codelovertechnology/?hl=en"
                  target="_blank"
                  className="text-white me-4"
                >
                  <InstagramIcon fontSize="medium" />
                </a>
                <a
                  href="https://www.linkedin.com/in/codelover-technology-810724151/"
                  target="_blank"
                  className="text-white me-4"
                >
                  <LinkedInIcon fontSize="medium" />
                </a>
                <a
                  href="https://www.linkedin.com/in/codelover-technology-810724151/"
                  target="_blank"
                  className="text-white me-1"
                >
                  <YouTubeIcon fontSize="medium" />
                </a>
              </div>
            </section>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
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