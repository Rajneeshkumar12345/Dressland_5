import React,{Component} from "react";
import "./About.css";
import Toggle from "./Toggle";

function About() {
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
        <div className="contain">
          <div className="row">
            <div className="content-column  col-md-6 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">About us</span>
                  <h2>We are Creative Fabric Enthusiast working since 2015</h2>
                </div>
                <div className="text col-md-12 col-sm-12">
                  I am Rahul Yaduvanshi works at Fabric.com since last 3 years.
                  We are here to provide touch notch solution for your fabric
                   that helps you to make your good look
                  attractive & efficient in handling by creating usefull design
                  thats you need.
                </div>
                <div className="text col-md-12 col-sm-12">
                  We are here to serve you next level quality that currently in
                  trend to match you with your expertise. Fabric.com is a
                  Cloths website. where you can find many good quality cloths
                  related to different quality. 
                </div>
                <div className="btn-box">
                  <a href="#" className="theme-btn btn-style-one">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Image Column --> */}
            <div className="image-column  col-md-6 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="author-desc">
                  <h2>Rahul Kumar Yadav</h2>
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
            <h2>We want to lead in Fabric</h2>
          </div>
          {/* <br></br> */}
          <div className="text col-md-12 col-sm-12">
            We works on Cloths and functionality as well so that a good quality comes
            with proper stucture & stunning looks which suits to your comfort &
            good looking.
          </div>
          <div className="text col-md-12 col-sm-12">
            We take a small tech here and ride it well so that it is fit for
            your use. One who performs well and looks even better.
          </div>
          <div className="text col-md-12 col-sm-12">
            Here we are trying to give you all kinds of good quality cloths,
            whether it is related to designing or comfort. We are creating
            content on a lot of different designing and will continue to make it free of
            cost even if you use it without any problem. Which is a very
            important thing.
          </div>
          <div className="text col-md-12 col-sm-12">
            Here you can also share the content you create, if our managing
            team likes it, then we will also share it on our blog.
          </div>
          <div className="text col-md-12 col-sm-12">
            In the end, I would say keep visiting our website and enjoy the
            quality cloths.
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
