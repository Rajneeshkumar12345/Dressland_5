import React from 'react'
import "./ProductExplore.css"

import Cloth1 from "../images/Cloth1.jpg";
import Cloth2 from "../images/Cloth2.jpg";
import Cloth3 from "../images/Cloth3.jpg";
import Cloth4 from "../images/Cloth4.jpg";
import Cloth5 from "../images/Cloth5.jpg";
import Cloth6 from "../images/Cloth6.jpg";

function ProductExplore() {
  return (
   <>
   <div className="Gallery">
   <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap">
        <h1 className="text-center gallery_heading text-white py-2">Our Product Gallery </h1>
        <div class="card Product_Card d-flex position-relative flex-column">
          <div class="imgContainer img-fluid">
            <img src={Cloth1} width="940" height="250" alt='cloth_image'  ></img>
          </div>
          <div class="content">
            <h4>
              This is fabulous fabric which is created by addidas brand.So, we will provide in good price
            </h4>
            {/* <p  className='text-dark'>
              1080p high-definition night vision, even in the weak light
              environment, can also shoot clearly.
            </p> */}
          </div>
        </div>
        <div class="card  Product_Card d-flex position-relative flex-column">
          <div class="imgContainer">
            <img src={Cloth2} width="940" height="250" alt="Cloth_image" ></img>
          </div>
          <div class="content">
            <h4> This is fabulous fabric which is created by addidas brand.So, we will provide in good price</h4>
            {/* <p className='text-dark'>
              Built in gravity senser, when sensing the emergency braking, the
              current video instantly locks, preventing the important files from
              being covered during cyclic recording.
            </p> */}
          </div>
        </div>
        <div class="card  Product_Card d-flex position-relative flex-column">
          <div class="imgContainer">
            <img src={Cloth3} width="940" height="250"  alt="Cloth_image" ></img>
          </div>
          <div class="content">
            <h4>
            This is fabulous fabric which is created by addidas brand.So, we will provide in good price
            </h4>
            {/* <p  className='text-dark'>
              Cyclic video recording, no seconds missing, segmened saving,
              automatic detection of storage space.
            </p> */}
          </div>
        </div>
      </div>

      <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap ">
        <div class="card  Product_Card d-flex position-relative flex-column">
          <div class="imgContainer img-fluid">
            <img src={Cloth4} width="940" height="250" alt="Cloth_image"  ></img>
          </div>
          <div class="content">
            <h4> This is fabulous fabric which is created by addidas brand.So, we will provide in good price</h4>
            {/* <p  className='text-dark'>
              2.2 aperture 150 wide angle lens, covering 6 lanes, more
              comperehensive record, clear picture without deformation, driving
              safety is guaranteed.
            </p> */}
          </div>
        </div>
        <div class="card  Product_Card d-flex position-relative flex-column">
          <div class="imgContainer">
            <img src={Cloth5} width="940" height="250"  alt="Cloth_image"  ></img>
          </div>
          <div class="content">
            <h4>
            This is fabulous fabric which is created by addidas brand.So, we will provide in good price
            </h4>
            {/* <p  className='text-dark'>
              When any Collision sensing, it will automatically start of 30s
              video recording.
            </p> */}
          </div>
        </div>
        <div class="card  Product_Card  d-flex position-relative flex-column">
          <div class="imgContainer">
            <img src={Cloth6} width="940" height="250" alt="Cloth_image" ></img>
          </div>
          <div class="content">
            <h4> This is fabulous fabric which is created by addidas brand.So, we will provide in good price</h4>
            {/* <p  className='text-dark'>
              Buil in multi language pronunciation, no need to worry about
              language barrier.
            </p> */}
          </div>
        </div>
      </div>
   </div>
   

   </>
  )
}

export default ProductExplore