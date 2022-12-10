import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
//import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
// import InventoryIcon from "@mui/icons-material/Inventory";
// import LoginIcon from "@mui/icons-material/Login";
// import PhotoIcon from "@mui/icons-material/Photo";
// import ListIcon from "@mui/icons-material/List";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ContactMailIcon from "@mui/icons-material/ContactMail";
// import ContactPageIcon from "@mui/icons-material/ContactPage";
// import InfoIcon from "@mui/icons-material/Info";
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
      <motion.div>
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
              <div>
                <h2 className="ms-5 mt-3 Admin_Panel_Heading">Admin Panel</h2>
              </div>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showSidebar}>
               
                <li className="navbar-toggle">
                  <Link
                    to="#"
                    className="menu-bars"
                    style={{ marginLeft: "12rem" }}
                  >
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
                 <li>
                  <Link to="/"className="menu-bars" style={{marginLeft:"1rem"}}>
                    <AiIcons.AiOutlineArrowLeft />
                  </Link>
                </li>
              </ul>
            </nav>
          </IconContext.Provider>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
