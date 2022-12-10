import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Log_image from "../images/Log_Image.webp";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log({ email, password });
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = () => {
    console.log({ email, password });
    const credentials = {
      email,
      password,
    };
    axios
      .post("http://nias.codelovertechnology.com/UserMaster/api/UserMaster/Login",
      credentials)
       .then((result) => {
         console.log(result.data);
         // alert("success");
         localStorage.setItem("token", result.data.token);
         navigate("/");
       })
       .catch((error) => {
         alert("Plz Enter Valid Email and Password");
         console.log(error);
      })
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
    
    
  //   {
  //     email: email,
  //     password: password,
  //   })
  //   .then((result) => {
  //     console.log(result.data);
  //     // alert("success");
  //     localStorage.setItem("token", result.data.token);
  //     navigate("/");
  //   })
  //   .catch((error) => {
  //     alert("Plz Enter Valid Email and Password");
  //     console.log(error);
  //   });
   };
  return (
    <>
      <section className="vh-100">
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
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    id="validationDefaulEmailaddress"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
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
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
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
                    <a
                      href="/UserRegistration"
                      className="Register_text text-danger"
                    >
                      Register
                    </a>
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
