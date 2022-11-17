import React, { useState } from "react";
import "./Sidebar.css";
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

  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

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
        {/* <div className="logo fixed">
          <img src={Logo} alt="logo" />
        
        </div>

        <div className="menu fixed">
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

        <div className="container-fluid mt-3">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid p-2">
              {/* <a className="navbar-brand text-primary mr-0">Company Logo</a> */}
              <div className="form-inline ml-auto">
                <div
                  className="btn btn-primary"
                  onClick={ToggleSidebar}
                  style={{ marginLeft: "-7rem" }}
                >
                  <i className="fa fa-bars"></i>
                </div>
              </div>
            </div>
          </nav>
          <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
            <div className="sd-header">
              <h4 className="mb-0">Sidebar Header</h4>
              <div className="btn btn-primary" onClick={ToggleSidebar}>
                <i className="fa fa-times"></i>
              </div>
            </div>
            <div className="sd-body">
              <ul>
                <li>
                  <a href="/MainDash" className="sd-link">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/Product" className="sd-link">
                    Product
                  </a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 3</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 4</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 5</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 6</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 7</a>
                </li>
                <li>
                  <a className="sd-link">Menu Item 8</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
            onClick={ToggleSidebar}
          ></div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
