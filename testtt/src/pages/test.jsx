import React from "react";
import "../App.css"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
        <div>
          <img src = '/images/Animal/001.jpg'/>
        </div>
        <div>
        <img src = '/images/Animal/002.jpg'/>
        </div>
        <div>
        <img src = '/images/Animal/003.jpg'/>
        </div>
        <div>
        <img src = '/images/Animal/004.jpg'/>
        </div>
        <div>
        <img src = '/images/Animal/005.jpg'/>
        </div>
        <div>
        <img src = '/images/Animal/006.jpg'/>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider