import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
//import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarAdminData } from "./SidebarAdminData";
import { IconContext } from "react-icons";

import img from "../images/Logo.png";
const Sidebar = () => {
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
              <div>
                <h2 className="ms-5 mt-3 Admin_Panel_Heading">Admin Panel</h2>
              </div>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showSidebar}>
              <li>
                  <Link to="/"className="menu-bars" style={{marginLeft:"1rem"}}>
                    <AiIcons.AiOutlineArrowLeft />
                  </Link>
                </li>
                <li className=" Admin_Navbar">
                  <Link
                    to="#"
                    className="menu-bars"
                    style={{ marginLeft: "12rem", marginTop:"-3rem" }}
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
          
              </ul>
            </nav>
          </IconContext.Provider>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
