import React from 'react'
import "./ProductExplore.css"

// import Cloth1 from "../images/Cloth1.webp";
// import Cloth2 from "../images/Cloth2.webp";
// import Cloth3 from "../images/Cloth3.jpg";
import Cloth4 from "../images/Cloth4.webp";
import Cloth5 from "../images/Cloth5.webp";
import Cloth6 from "../images/Cloth6.webp";
import Toggle from '../components/Toggle';

function ProductExplore() {
  return (
   <>
   <Toggle/>
   <div className="Gallery">
   <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
        <h1 className="text-center Gallery_heading text-white py-2" style={{marginTop:"5rem"}}>Our Product Gallery </h1>
        {/* <div className="card Product_Card d-flex position-relative flex-column">
          <div className="imgContainer img-fluid">
            <img src={Cloth1} width="940" height="250" alt='cloth_image'  ></img>
          </div>
          <div className="content">
            <h4>
              This is fabulous fabric which is created by addidas brand.So, we will provide in good price
            </h4>
        
          </div>
        </div>
        <div className="card  Product_Card d-flex position-relative flex-column">
          <div className="imgContainer">
            <img src={Cloth2} width="940" height="250" alt="Cloth_image" ></img>
          </div>
          <div className="content">
            <h4> This is fabulous fabric which is created by addidas brand.So, we will provide in good price</h4>
       
          </div>
        </div>
        <div className="card  Product_Card d-flex position-relative flex-column">
          <div className="imgContainer">
            <img src={Cloth3} width="940" height="250"  alt="Cloth_image" ></img>
          </div>
          <div className="content">
            <h4>
            This is fabulous fabric which is created by addidas brand.So, we will provide in good price
            </h4>
          
          </div>
        </div> */}
      </div>

      <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap ">
        <div className="card  Product_Card d-flex position-relative flex-column">
          <div className="imgContainer img-fluid">
            <img src={Cloth4} width="940" height="250" alt="Cloth_image"  ></img>
          </div>
          <div className="content">
            <h4> This is fabulous fabric which is created by addidas brand.So, we will provide in good price</h4>
            {/* <p  className='text-dark'>
              2.2 aperture 150 wide angle lens, covering 6 lanes, more
              comperehensive record, clear picture without deformation, driving
              safety is guaranteed.
            </p> */}
          </div>
        </div>
        <div className="card  Product_Card d-flex position-relative flex-column">
          <div className="imgContainer">
            <img src={Cloth5} width="940" height="250"  alt="Cloth_image"  ></img>
          </div>
          <div className="content">
            <h4>
            This is fabulous fabric which is created by addidas brand.So, we will provide in good price
            </h4>
            {/* <p  className='text-dark'>
              When any Collision sensing, it will automatically start of 30s
              video recording.
            </p> */}
          </div>
        </div>
        <div className="card  Product_Card  d-flex position-relative flex-column">
          <div className="imgContainer">
            <img src={Cloth6} width="940" height="250" alt="Cloth_image" ></img>
          </div>
          <div className="content">
            <h4> This is fabulous fabric which is created by addidas brand.So, we will provide in good price</h4>
            {/* <p  className='text-dark'>
              Buil in multi language pronunciation, no need to worry about
              language barrier.
            </p> */}
          </div>
        </div>
      </div>
      <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap ">
        <div className="card  Product_Card d-flex position-relative flex-column">
          <div className="imgContainer img-fluid">
            <img src={Cloth4} width="940" height="250" alt="Cloth_image"  ></img>
          </div>
          <div className="content">
            <h4> This is fabulous fabric which is created by addidas brand.So, we will provide in good price</h4>
            {/* <p  className='text-dark'>
              2.2 aperture 150 wide angle lens, covering 6 lanes, more
              comperehensive record, clear picture without deformation, driving
              safety is guaranteed.
            </p> */}
          </div>
        </div>
        <div className="card  Product_Card d-flex position-relative flex-column">
          <div className="imgContainer">
            <img src={Cloth5} width="940" height="250"  alt="Cloth_image"  ></img>
          </div>
          <div className="content">
            <h4>
            This is fabulous fabric which is created by addidas brand.So, we will provide in good price
            </h4>
            {/* <p  className='text-dark'>
              When any Collision sensing, it will automatically start of 30s
              video recording.
            </p> */}
          </div>
        </div>
        <div className="card  Product_Card  d-flex position-relative flex-column">
          <div className="imgContainer">
            <img src={Cloth6} width="940" height="250" alt="Cloth_image" ></img>
          </div>
          <div className="content">
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