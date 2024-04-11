import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Reactangle14 from "../../assets/images/Rectangle14.png";
import Reactangle16 from "../../assets/images/Rectangle16.png";
import Reactangle17 from "../../assets/images/Rectangle17.png";
import Rectangle18 from "../../assets/images/Rectangle18.png";
import "./Carousel.css";

function MyCarousel() {
    const images = [
        Reactangle14,
        Reactangle16,
        Reactangle17,
        Rectangle18
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const handleClickImage = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-buttons carousel-prev" onClick={prevSlide}>Previous</div>
            <Carousel showThumbs={false} selectedItem={currentSlide}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-image" onClick={() => handleClickImage(index)}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
            <div className="carousel-buttons carousel-next" onClick={nextSlide}>Next</div>
        </div>
    );
}

export default MyCarousel;