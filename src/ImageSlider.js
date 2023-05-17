import React from "react";
import Slider from "react-slick";
import img1 from './assets/Images/amazon.jpg'
import img2 from './assets/Images/disney.jpg'
import img3 from './assets/Images/netflix.jpg'
import './sidebar.css'


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 664,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings}>
      <div className="card "  >
       <img src={img1}  className="img-fluid"  />
       <div className="card-body" >
       <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
    </div>
      </div>
      <div className="card" >
     <img src={img2} className="img-fluid"   />
     <div className="card-body" >
      <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     </div>
      </div>
      <div className="card" >
       <img src={img3}  className="img-fluid"  />
       <div className="card-body" >
        <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       </div>
      </div>
      <div className="card" >
      <img src={img1} className="img-fluid"   />
      <div className="card-body" >
        <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      </div>
      <div className="card" >
   <img src={img2}  className="img-fluid"  />
   <div className="card-body" >
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   </div>
      </div>
      <div className="card" >
       <img src={img3} className="img-fluid" />
       <div className="card-body" >
        <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       </div>
       </div>
    </Slider>
  );
} 