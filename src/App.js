// import React, { Component } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import { history } from "./helper/history";
// import { Role } from "./helper/Role";
// import { authenticationService } from "./services/authenticationService";
// import { PrivateRoute } from "./private/PrivateRoute";
// import { HomePage } from "./components/HomePage";
// import { AdminPage } from "./components/AdminPage";
// import LoginPage from "./components/LoginPage";

// // var HomePage = require('./components/HomePage');

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       error: null,
//       currentUser: null,
//       isAdmin: false,
//     };
//   }

//   componentDidMount() {
//     authenticationService.currentUser.subscribe((x) =>
//       this.setState({
//         currentUser: x,
//         isAdmin: x && x.role === Role.Admin,
//       })
//     );
//   }

//   logout() {
//     authenticationService.logout();
//     history.push("/login");
//   }
//   render() {
//     const { currentUser, isAdmin } = this.state;
//     return (
//       <>
//         <div className="app" history={history}>
//         <div>
//           {currentUser && (
//             <nav className="navbar navbar-expand navbar-dark bg-dark">
//               <div className="navbar-nav">
//                 <Link to="/HomePage" className="nav-item nav-link">
//                   Home
//                 </Link>
//                 {isAdmin && (
//                   <Link to="HomePage/AdminPage" className="nav-item nav-link">
//                     Admin
//                   </Link>

//                 ) }
//                 <a onClick={this.logout} className="nav-item nav-link">
//                   Logout
//                 </a>
//               </div>
//             </nav>
//           )}
//          <Router>
//          <PrivateRoute exact path="/" component={HomePage} />
//                   <PrivateRoute
//                     path="/AdminPage"
//                     roles={[Role.Admin]}
//                     component={AdminPage}
//                   />

//                   <Routes>
//                     <Route path="/" element={<HomePage/>}></Route>
//                   <Route path="/LoginPage" element={<LoginPage/>} />
//                   </Routes>
//          </Router>

//         </div>
//       </div>

//       </>
//     );
//   }
// }
// export default App;

import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
import AboutAdminPage from "./pages/AboutAdminPage";
import ContactAdminPage from "./pages/ContactAdminPage";
import ProductExplore from "./pages/ProductExplore";
import EnquiryUpdate from "./pages/EnquiryUpdate";
import Update from "./pages/Update";
import UserAdmin from "./pages/UserAdmin";
import AdminGallery from "./pages/AdminGallery";
import VendorSupport from "./pages/VendorSupport";
import VendorCenterShop from "./pages/VendorCenterShop";
import Transaction from "./pages/Transaction";

// import DistributerPage from "./components/DistributerPage";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ToggleSidebar />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Stock" element={<Stock />} />
          <Route exact path="/ProductGallery" element={<ProductGallery />} />
          <Route exact path="/Product" element={<Product />} />
          <Route exact path="/Galary" element={<Galary />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/LoginPage" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Master" element={<Master />} />
          <Route exact path="/UserAdmin" element={<UserAdmin/>} />
          {/* <Route exact path="/Update" element={<Update/>} /> */}
          <Route
            exact
            path="/UserRegistration"
            element={<UserRegistration />}
          />
          <Route exact path="/CenterShop" element={<CenterShop />} />
          <Route exact path="/EnquiryForm" element={<EnquiryForm />} />
          <Route exact path="/AboutAdminPage" element={<AboutAdminPage />} />
          <Route
            exact
            path="/ContactAdminPage"
            element={<ContactAdminPage />}
          />
          <Route exact path="/ProductExplore" element={<ProductExplore />} />
          <Route exact path="/EnquiryUpdate" element={<EnquiryUpdate/>} />
          <Route exact path="/AdminGallery" element={<AdminGallery/>} />
          <Route exact path="/Transaction" element={<Transaction/>} />

          <Route exact path="/VendorSupport" element={<VendorSupport/>} />
          <Route exact path="/VendorCentorShop" element={<VendorCenterShop/>} />

          {/* <Route exact path="/DistributerPage" element={<DistributerPage />} /> */}
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
        </Routes>
        {/* <Route exact path="/CenterShop" element={ <CenterShop/> } /> */}
      </BrowserRouter>
    </main>
  );
}

export default App;
