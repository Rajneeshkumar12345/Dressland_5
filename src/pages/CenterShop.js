import React from "react";
import Sidebar from "../components/Sidebar";
import "./CenterShop.css";

function CenterShop() {
  return (
    <>
    <Sidebar/>
      <div className="CenterShop" style={{marginTop:'5rem'}}>
        <header className="text-center CenterSop_header">
          <p className="tag-line py-2"> Center/Shop </p>
        </header>
        <div className="wrapper">
          <main>
            <div className="info" style={{ marginTop: "5rem" }}>
              <h3 className="Center_heading">Signup for our newsletter</h3>
              <p>
                Get the lastest update of the product is doing right in your
                business.
              </p>
            </div>
            <form action="#" method="GET" className="head_line">
              <fieldset className="contact-info">
                <div className="">
                  <legend>Contact Information</legend>
                  <p>
                    <label for="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      placeholder="Required"
                      title="Please fill out this field"
                    />
                  </p>
                  <p>
                    <label for="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      placeholder="Required"
                      title="Please fill out this field"
                    />
                  </p>
                  <p>
                    <label for="address"> Address</label>
                    <input type="text" id="address" name="user_address" />
                  </p>
                  <p>
                    <label for="address">Phone</label>
                    <input
                      type="number"
                      id="address"
                      name="user_address"
                      placeholder="Required"
                      title="Please fill out this field"
                    />
                  </p>
                  <p>
                    <label for="city">City</label>
                    <input type="text" id="city" name="user_city" />
                  </p>
                  <p>
                    <label for="state">State</label>
                    <select id="state" name="user_state">
                      <option value="state">Choose State</option>
                      <option value="abc">Andhra Pradesh</option>
                      <option value="def">Arunachal Pradesh</option>
                      <option value="geh">Assam</option>
                      <option value="ijk">Bihar</option>
                      <option value="ftg">Chhattisgarh</option>
                      <option value="hjk">Gujarat</option>
                      <option value="kil">Haryana</option>
                      <option value="tyu">Himachal Pradesh</option>
                      <option value="ewt">Jharkhand</option>
                      <option value="yrt">Karnataka</option>
                      <option value="sef">Kerala</option>
                      <option value="bhj">Madhya Pradesh</option>
                      <option value="jki">Maharashtra</option>
                      <option value="lop">Manipur</option>
                      <option value="pol">Meghalaya</option>
                      <option value="rty">Mizoram</option>
                      <option value="wer">Nagaland</option>
                      <option value="aws">Odisha</option>
                      <option value="">Punjab</option>
                      <option value="upe">Rajasthan</option>
                      <option value="upe">Sikkim</option>
                      <option value="upe">Tamil Nadu</option>
                      <option value="upe">Telangana</option>
                      <option value="upe">Tripura</option>
                      <option value="upe">Uttar Pradesh</option>
                      <option value="upe">Uttarakhand</option>
                      <option value="upe">West Bengal</option>
                    </select>
                  </p>
                  <p>
                    <label for="zipcode">Center Code</label>
                    <input type="number" id="zipcode" name="user_zipcode" />
                  </p>
                </div>
              </fieldset>

              <fieldset className="newsletter">
                <div className="">
                  <legend>Newsletter</legend>
                  <p>Select the newsletter you would like to recieve</p>

                  <div className="checkboxes">
                    <p>
                      <input type="checkbox" id="html_news" name="news" />
                      <label for="html_news" style={{ marginLeft: "-50px" }}>
                        Cotton
                      </label>
                    </p>
                    <p>
                      <input type="checkbox" id="css_news" name="news" />
                      <label for="css_news" style={{ marginLeft: "-50px" }}>
                        Wool
                      </label>
                    </p>
                    <p>
                      <input type="checkbox" id="js_news" name="news" />
                      <label for="js_news" style={{ marginLeft: "-50px" }}>
                        Fabric
                      </label>
                    </p>
                  </div>

                  {/* <p>Newsletter format</p>
                <div className="radio-btn">
                  <p>
                    <input
                      type="radio"
                      id="html"
                      value="html"
                      name="html_format"
                    />
                    <label for="html">HTML</label>
                  </p>
                  <p>
                    <input
                      type="radio"
                      id="plain_text"
                      value="plain_text"
                      name="plain_text_format"
                    />
                    <label for="plain_text">Plain text</label>
                  </p>
                </div> */}

                  <p>How did you find us?</p>
                  <p>
                    <select>
                      <option value="PickOne">Pick One</option>
                      <option value="Google">Google</option>--
                      <option value="Bing">Bing</option>
                      <option value="Social Site">Social Site</option>
                      <option value="Friends/Workplace">
                        Friends/Workplace
                      </option>
                    </select>
                  </p>

                  <p>Other topics you would like to hear about</p>
                  <p>
                    <textarea
                      id="interest"
                      name="user_interest"
                      placeholder="Enter Message"
                      className="CenterShot_textarea"
                    ></textarea>{" "}
                    <br />
                  </p>
                </div>
              </fieldset>
            </form>
            <div className="footer">
              <div className="btn w-100" style={{ color: "#19e34f" }}>
                <button type="submit" className="btn CenterShop_Submit">
                  Submit
                </button>
              </div>

              <p>&copy; Copyright SK Dressland.com 2022</p>
            </div>
          </main>
        </div>
      </div>

      {/* <main>
   <div className="title">
   <h1 id="title">Survey Form</h1>
   <p id="description">Thank you for taking the time to help us improve the platform</p>
  </div>
  
   
     <label for="name" id="name-label" className="uno">Name</label>
     <input type="text" id="name" placeholder="Enter your name" requiered/>
  
     
     <label for="email" id="email-label" className="uno">Email</label>
     <input type="email" id="email" placeholder="Enter your email"  requiered/>
     
     <label for="age" id="number-label" className="uno">Age (optional)</label>
     <input type="number" id="number" placeholder="Enter your age"/>
     
     <label for="dropdown" id="dropdown-label" className="uno">Which option best describes your current role?</label>
     <select id="dropdown" name="rol">
       <option disable selected value>Select your current rol</option>
       <option value="student">Student</option>
       <option value="job">Full time job</option>
       <option value="freelancer">Freelancer</option>
       <option value="hunting">Looking for a job</option>
     </select>
     
     <p className="uno">Would you recommend our Agency to a friend?</p>
     <label for="btn" id="btn-label" className="uno">Definitely</label>
     <input type="radio" name="user-recommend" value="definitely" className="input" checked/>
     <label for="btn" id="btn-label" className="uno">Maybe</label>
     <input type="radio" name="user-recommend" value="maybe" className="input"/>
     <label for="btn" id="btn-label" className="uno">Not sure</label>
       <input type="radio" name="user-recommend" value="not-sure" className="input"/>
    
       <p className="uno">What would you like to see improved? (Check all that apply)</p>
     <div className="check">
     <label className="uno">
     <input name="prefer" type="checkbox" value="front-end projects" className="checkbox-input"/>Front-end projects</label>
     <label className="uno">
     <input name="prefer" type="checkbox" value="back-end projects" className="checkbox-input"/>Back-end projects</label>

     <label className="uno">
   <input name="prefer" type="checkbox" value="social-media" className="checkbox-input"/>Social media (Marketing)</label>
     <label className="uno">
   <input name="prefer" type="checkbox" value="video-games" className="checkbox-input"/>Video Games Development</label>

     <label className="uno">
   <input name="prefer" type="checkbox" value="ui-ux-design" className="checkbox-input"/>UI/UX Design Tutorials++</label>
       <label className="uno">
   <input name="prefer" type="checkbox" value="other" className="checkbox-input"/>Other (send us a message)</label>
     </div>
     
     <p className="uno">Any comments or suggestions?</p>
     <textarea id="message" className="textarea uno" name="message" placeholder="Enter your message here..."></textarea>
     
    
     
     <button type="submit" id="submit" className="submit uno">Send your application</button>
     
  
  
</main> */}
    </>
  );
}

export default CenterShop;
