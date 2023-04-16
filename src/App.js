import "./App.css";
import React, {useState} from 'react'
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";

import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

import ROLE from './components/Role';
import axios from "axios";

// import Home from "./components/Home";
// import Login from "./components/Login";
import ToggleSidebar from "./components/ToggleSidebar";
import CenterShop from "./pages/CenterShop";
import Register from "./components/Register";
import UserRegistration from "./pages/UserRegistration";
import Product from "./pages/Product";
import Contact from "./components/Contact";

import About from "./components/About";
import Galary from "./pages/Galary";
import Login from "./components/LoginPage";
import Master from "./pages/Master";
import Stock from "./pages/Stock";
import ProductGallery from "./pages/ProductGallery";
import EnquiryForm from "./pages/EnquiryForm";
import ContactAdminPage from "./pages/ContactAdminPage";
import ProductExplore from "./pages/ProductExplore";
import EnquiryUpdate from "./pages/EnquiryUpdate";

import UserAdmin from "./pages/UserAdmin";
import AdminGallery from "./pages/AdminGallery";
import VendorSupport from "./pages/VendorSupport";
import VendorCenterShop from "./pages/VendorCenterShop";
import Transaction from "./pages/Transaction";

import VendorSidebar from "./components/VendorSidebar";
import VendorDashboard from "./components/VendorDashboard";
import VendorStock from "./pages/VendorStock";
import CentorDahboard from "./components/CentorDashboard";
import CentorSidebar from "./components/CentorSidebar";
import CentorCenterShop from "./pages/CentorCenterShop";
import CentorStock from "./pages/CentorStock";
import CentorSupport from "./pages/CentorSupport";
import CentorTransaction from "./pages/CentorTransaction";
import VendorTransaction from "./pages/VendorTransaction";
import UserRegistrationUpdate from "./pages/UserRegistrationUpdate";
import Invoice from "./pages/Invoice";
import ProductUpdate from "./pages/ProductUpdate";
import PubProdGallery from "./pages/PubProdGallery";
import PubGallery from "./pages/PubGallery";
import AdminGalleryUpdate from "./pages/AdminGalleryUpdate";
import EnquiryUpdate2 from "./pages/EnquiryUpdate2";
import CenterShopUpdate from "./pages/CenterShopUpdate";
import MasterUpdate from "./pages/MasterUpdate";
import TransactionUpdate from "./pages/TransactionUpdate";
import ContactAdminUpdate from "./pages/ContactAdminUpdate";
import SupportAdmin from "./pages/SupportAdmin";
import SupportAdminUpdate from "./pages/SupportAdminUpdate";
import AdminAbout from "./pages/AdminAbout";
import AdminAboutUpdate from "./pages/AdminAboutUpdate";

// import PublicGallery from "./pages/PublicGallery";


// import DistributerPage from "./components/DistributerPage";



function App() {

  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          {/* <Route exact path="/PublicGallery" element={<PublicGallery/>}/> */}
          <Route exact path="/" element={<ToggleSidebar />} />
          <Route exact path="/About" element={<About />} />
        
          <Route path='/PubGallery/:ProductIDReq' element={<PubGallery/>}/>
          <Route exact path="/ProductExplore" element={<ProductExplore/>} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/LoginPage" element={<Login />} />
       

           {/* This is rout for Vendor and Center  */}
          <Route path='/Galary/:ProductIDReq' element={<Galary/>}/>
          <Route exact path="/ProductGallery" element={<ProductGallery/>} />
          {/* This is rout for Vendor and Center  */}

          <Route exact path="/PubProdGallery" element={<PubProdGallery/>} />
          <Route exact path="/Register" element={<Register />} />
          <Route
            exact
            path="/UserRegistration"
            element={<UserRegistration />}
          />

          {/* Protect Admin Routes Start here  */}
          {/* <Route element={<RequireAuth  allowedRoles={[ROLE.ADMIN]}/>}> */}
          <Route
            exact
            path="/MainDash"
            element={
              <>
                <div className="app">
                  <div className="AppGlass">
                    <Sidebar />
                    <MainDash />
                    <RightSide />
                  </div>
                </div>
              </>
            }
          />
          <Route exact path="/Product" element={<Product />} />
          <Route exact path="/ProductUpdate" element={<ProductUpdate/>} />
          <Route exact path="/Stock" element={<Stock />} />
          <Route exact path="/UserAdmin" element={<UserAdmin/>} />
          <Route exact path="/ContactAdminUpdate" element={<ContactAdminUpdate/>} />
          <Route exact path="/AdminGallery" element={<AdminGallery/>} />
          <Route exact path="/AdminGalleryUpdate" element={<AdminGalleryUpdate/>} />
          <Route exact path="/Master" element={<Master />} />
          <Route exact path="/MasterUpdate" element={<MasterUpdate/>} />
          <Route exact path="/CenterShop" element={<CenterShop />} />
          <Route exact path="/CenterShopUpdate" element={<CenterShopUpdate/>} />
          <Route exact path="/AdminAbout" element={<AdminAbout/>} />
          <Route exact path="/AdminAboutUpdate" element={<AdminAboutUpdate/>} />
          <Route exact path="/TransactionUpdate" element={<TransactionUpdate/>}/>
          <Route
            exact
            path="/ContactAdminPage"
            element={<ContactAdminPage />}
          />
          <Route exact path="/EnquiryForm" element={<EnquiryForm />} />
          <Route exact path="/SupportAdmin" element={<SupportAdmin/>} />
          <Route exact path="/SupportAdminUpdate" element={<SupportAdminUpdate/>} />
          <Route exact path="/EnquiryUpdate" element={<EnquiryUpdate/>} />
          <Route exact path="/EnquiryUpdate2" element={<EnquiryUpdate2/>} />
          <Route exact path="/Transaction" element={<Transaction/>} />
          <Route exact path="/UserRegistrationUpdate" element={<UserRegistrationUpdate/>}/>
          {/* </Route> */}
         


          {/* Protect VENDOR Routes Start here  */}
          <Route exact path="/VendorDashboard" element={<VendorDashboard/>} />
          <Route exact path="/VendorSupport" element={<VendorSupport/>} />
          <Route exact path="/VendorCenterShop" element={<VendorCenterShop/>}/>
          <Route exact path="/VendorStock" element={<VendorStock/>} />
          <Route exact path="/VendorSidebar" element={<VendorSidebar/>} />
          <Route exact path="/VendorTransaction" element={<VendorTransaction/>} />

          
          {/* Protect Centor Routes Start here  */}
          <Route exact path="/CentorDashboard" element={<CentorDahboard/>} />
          <Route exact path="/CentorSupport" element={<CentorSupport/>} />
          <Route exact path="/CentorCenterShop" element={<CentorCenterShop/>}/>
          <Route exact path="/CentorStock" element={<CentorStock/>} />
          <Route exact path="/CentorSidebar" element={<CentorSidebar/>} />
          <Route exact path="/CentorTransaction" element={<CentorTransaction/>} />

          {/* INVOICE ROUTE */}
          <Route exact path="/Invoice" element={<Invoice/>} />
          
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
