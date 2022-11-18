import React, { useState } from "react";
import "./Sidebar.css";
import {Link} from 'react-router-dom'
import Logo from "../images/Logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
//import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import InventoryIcon from "@mui/icons-material/Inventory";
import LoginIcon from "@mui/icons-material/Login";
import PhotoIcon from "@mui/icons-material/Photo";
import ListIcon from "@mui/icons-material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InfoIcon from "@mui/icons-material/Info";







import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { SidebarAdminData } from "./SidebarAdminData";

import { IconContext } from "react-icons";


import img from "../images/Logo.png";
const Sidebar = () => {
  // const [selected, setSelected] = useState(0);

  // const [expanded, setExpaned] = useState(true);

  // const sidebarVariants = {
  //   true: {
  //     left: "0",
  //   },
  //   false: {
  //     left: "-60%",
  //   },
  // };
  // console.log(window.innerWidth);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div> */}
      <motion.div
      // className="sideBar"
      // variants={sidebarVariants}
      // animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        {/* <div className="logo">
          <img src={Logo} alt="logo" />
        
        </div> */}

        {/* <div className="menu fixed">
          <ul>
            <li className="Dash1 D1">
              <a href="/MainDash" className="text-dark">
                <DashboardIcon style={{ color: "rgba(235, 62, 151, 0.8)" }} />{" "}
                DASHBOARD
              </a>
            </li>
            <li className="Dash1 D2 ">
              <a href="/Product" className="text-dark">
                <ProductionQuantityLimitsIcon
                  style={{ color: "rgba(235, 62, 151, 0.8)" }}
                />{" "}
                PRODUCT
              </a>
            </li>
            <li className="Dash1 D3">
              <a href="/Stock" className="text-dark">
                <InventoryIcon style={{ color: "rgba(235, 62, 151, 0.8)" }} />{" "}
                STOCK
              </a>
            </li>
            <li className="Dash1 D4">
              <a href="/UserRegistration" className="text-dark">
                <LoginIcon style={{ color: "rgba(235, 62, 151, 0.8)" }} /> USER
                REGISTRATION
              </a>
            </li>
            <li className="Dash1 D6">
              <a href="/ProductGallery" className="text-dark">
                <PhotoIcon style={{ color: "rgba(235, 62, 151, 0.8)" }} />{" "}
                GALLERY
              </a>
            </li>
            <li className="Dash1 D7">
              <a href="/Master" className="text-dark">
                <ListIcon style={{ color: "rgba(235, 62, 151, 0.8)" }} /> MASTER
              </a>
            </li>
            <li className="Dash1 D8">
              <a href="/CenterShop" className="text-dark">
                <ShoppingCartIcon
                  style={{ color: "rgba(235, 62, 151, 0.8)" }}
                />{" "}
                CENTER SHOP
              </a>
            </li>
            <li className="Dash1 D9">
              <a href="/AboutAdminPage" className="text-dark">
                <InfoIcon
                  style={{ color: "rgba(235, 62, 151, 0.8)" }}
                />{" "}
                ABOUT US
              </a>
            </li>
            <li className="Dash1 D10">
              <a href="/ContactAdminPage" className="text-dark">
                <ContactPageIcon
                  style={{ color: "rgba(235, 62, 151, 0.8)" }}
                />{" "}
                CONTACT US
              </a>
            </li>
            <li className="Dash1 D11">
              <a href="/EnquiryForm" className="text-dark">
                <ContactMailIcon style={{ color: "rgba(235, 62, 151, 0.8)" }} />{" "}
                ENQUIRY
              </a>
            </li>
          </ul>


          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div> */}

    


            
    <div className="navBar fixed-top">
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            {/* <Link to="/" className="img_contain ">
              <img
                src={img}
                className="img-fluid "
                width="60"
                height="40"
                alt="img"
              />
            </Link> */}
            <div><h2 className="ms-5 mt-3">Admin Panel</h2></div>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar} >
              <li className="navbar-toggle" >
                <Link to="#" className="menu-bars" style={{marginLeft:"12rem"}} >
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarAdminData.map((item, index) => {
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
      </motion.div>
    </>
  );
};

export default Sidebar;
