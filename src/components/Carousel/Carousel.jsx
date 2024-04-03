import React from "react";
import './Carousel.css'
import Slider from "react-slick";
import CarouselImage from '../../assets/images/Rectangle14.png'
import CarouselImage1 from '../../assets/images/Rectangle17.png'
import CarouselImage2 from '../../assets/images/Rectangle16.png'
import CarouselImage3 from '../../assets/images/Rectangle18.png'
import CarouselImage4 from '../../assets/images/Rectangle9.png'
function Carousels () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
      }; 
    return (
    <Slider {...settings}>
      
        {/* <div className="carouselImage1">
            <img src={CarouselImage} alt="" />
        </div>
        <div className="carouselImage2">
            <img src={CarouselImage1} alt="" />
        </div>
        <div className="carouselImage3">
            <img src={CarouselImage2} alt="" />
        </div>
        <div className="carouselImage">
            <img src={CarouselImage3} alt="" />
        </div>
        <div className="carouselImage5">
            <img src={CarouselImage4} alt="" />
        </div> */}
    </Slider>
    )
}

export default Carousels;