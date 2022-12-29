import { useEffect, useState, useRef } from "react";
//import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import Log_image from "../images/Log_Image.webp";

const LoginPage = () => {
  //const { setAuth } = useAuth();
  //const location = useLocation();
  //const from = location.state?.from?.pathname || "/";
  // const userRef = useRef();

  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [loggedInState, setLoggedInState] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[loading, setLoading] = useState("");
  

  // useEffect(() => {
  //   setLoggedInState(true);
  //   setTimeout(() => {
  //     setLoggedInState(false);
  //   }, 3000);
  // }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };


  const handleApi = (e) => {
    setLoading("You are logging please wait...")
        let hardcodedCred = {
          email: `${process.env.REACT_APP_USER_ID}`,
          password: `${process.env.REACT_APP_PASSWORD}`
      }
      if ((email == hardcodedCred.email) && (password == hardcodedCred.password)) {
          navigate('/MainDash');
      }
      
    axios
      .post(
        `${process.env.REACT_APP_API}UserMaster/api/UserMaster/Login`,
        {
          email_ID: email,
          password: password,
        }
      )
      .then((result) => {
         //  console.log(result.data);
        localStorage.setItem("result", result);
        // const Roles = result.data[0].userRole;
        localStorage.setItem("userId",result.data[0].userID);
        localStorage.setItem("currentUserRole",result.data[0].userRole);
        if (result.data[0].userRole == "ADMIN") {
          navigate("/MainDash");
        } else if (result.data[0].userRole == "VENDOR"){
          navigate("/VendorDashboard");
        } else if (result.data[0].userRole == "CENTOR"){
          navigate("/CentorDashboard");
        } else if ((!result.data[0].userRole == "ADMIN") && (!result.data[0].userRole == "VENDOR") && (!result.data[0].userRole == "CENTOR")) {
          navigate("/");
        }
        else {
          setErrMsg("Please Enter Valid Email Id And Password...!!!");
          return;
        }
      })
      .catch(() => {
        return setErrMsg("Please Enter Valid Email id And Password...!!!");
      });
    // try {
    //   const response = axios.post(
    //     "http://nias.codelovertechnology.com/UserMaster/api/UserMaster/Login",
    //     JSON.stringify({ email, password }),
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );
    //   console.log(JSON.stringify(response?.data));
    //   const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;
    //   setAuth({ email, password, roles, accessToken });
    //   setEmail("");
    //   setPassword("");

    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg("No Server Response");
    //   } else if (err.response?.status === 400) {
    //     setErrMsg("Missing Username or Password");
    //   } else if (err.response?.status === 401) {
    //     setErrMsg("Unauthorized");
    //   } else {
    //     setErrMsg("Login Failed");
    //   }
    //   errRef.current.focus();
    // }

    // credentials)
    // .then((response) => {
    //   if (response.data.accountType === "admin") {
    //     navigate("/MainDash");
    //   } else if (response.data.accountType === "student") {
    //     navigate("/");
    //   }
    // })
    // .catch((error) => {
    //   alert(error.response.data.message);
    // });

  };
  return (
    <>
    {/* <div className="Logincontainer">
  {loggedInState == 'logging in' ? <Spinner/> : ''}
    </div> */}
      <section className="vh-100">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <p
          ref={errRef}
          className={loading ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {loading}
        </p>
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={Log_image} className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <label
                    className="form-label Login_comon"
                    for="validationDefaultEmailaddress"
                  >
                    Email Address(User Id)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    id="validationDefaulEmailaddress"
                    className="form-control form-control-lg"
                    placeholder="Enter a email address"
                  />
                </div>

                <div className="form-outline mb-3">
                  <label
                    className="form-label Login_comon"
                    for="validationDefaultPassword"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePassword}
                    id="validationDefaultPassword"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/" className="text-danger Home_text">
                  Back to Home
                  </Link>
                  {/* <a href="#!" className="text-body">
                    Back to Home
                  </a> */}
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: " 2.5rem", paddingRight: "2.5rem" }}
                    onClick={handleApi}
                  >
                    Login
                  </button>
                  <p className="small  mt-4 pt-1 mb-0 Account_text">
                    Don't have an account?{" "}
                    <Link
                      to="/UserRegistration"
                      className="Register_text text-danger"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
