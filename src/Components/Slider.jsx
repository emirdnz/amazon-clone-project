import React, { useState } from 'react';
import './Slider.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/images/slide01.png',
    '/images/slide02.png',
    '/images/slide03.png'
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider">
      <button className="slider__button slider__button--left" onClick={handlePrevClick}>
        <FaChevronLeft />
      </button>
      <div className="slider__content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="slider__item" key={index}>
            <img src={image} alt={`Slider ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="slider__button slider__button--right" onClick={handleNextClick}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
