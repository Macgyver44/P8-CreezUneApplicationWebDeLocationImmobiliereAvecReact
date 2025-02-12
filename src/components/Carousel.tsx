import React, { useState } from "react";
import "../css/Carousel.scss";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      {images.length > 1 && (
        <button className="carousel-button prev" onClick={handlePrev}>
          &#10094;
        </button>
      )}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {images.length > 1 && (
        <button className="carousel-button next" onClick={handleNext}>
          &#10095;
        </button>
      )}
      {images.length > 1 && (
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
            >
              {index + 1}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
