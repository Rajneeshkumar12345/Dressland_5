import React,{useState,useEffect} from "react";
import "./About.css";
import Toggle from "./Toggle";
import axios from "axios";

function About() {
  const [APIData, setAPIData] = useState([]);


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}AboutMaster`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
  return (
    <>
    <Toggle/>
      <div className="banner">
        <div>
          <h1
            style={{
              textTransform: "uppercase",
              textAlign: " center",
              paddingTop: "50px",
            }}
            className="About_hover"
          >
            About Us
          </h1>
        </div>
      </div>

      <section className="about-section">
        {APIData.map((data) =>{
          return(
            <div className="contain">
            <div className="row">
              <div className="content-column  col-md-6 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="title">About us</span>
                    <h2>{data.aboutTitle}</h2>
                  </div>
                  <div className="text col-md-12 col-sm-12">
                    {data.description}
               
                  </div>
                  {/* <div className="text col-md-12 col-sm-12">
                    We are here to serve you next level quality that currently in
                    trend to match you with your expertise. Fabric.com is a
                    Cloths website. where you can find many good quality cloths
                    related to different quality. 
                  </div> */}
                  <div className="btn-box">
                    <a href="/Contact" className="theme-btn btn-style-one">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
  
              {/* <!-- Image Column --> */}
              <div className="image-column  col-md-6 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="author-desc">
                    <h2>Sunil Kumar</h2>
                    <span>Founder</span>
                  </div>
                  <figure className="image-1">
                    <a href="#" className="lightbox-image" data-fancybox="images">
                      <img className="Rahul_image"
                        title="Rahul Kumar Yadav"
                        src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
            <div className="sec-title col-md-12 col-sm-12">
              <span className="title mt-5">Our Future Goal</span>
              <h2>{data.aboutTitle}</h2>
            </div>
            {/* <br></br> */}
            <div className="text col-md-12 col-sm-12">
            {data.description}
            </div>
      
          </div>
          )
        })}
       
      </section>
    </>
  );
}

export default About;
