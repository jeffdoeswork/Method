import React, { useState } from 'react';
import './Carousel.css';

const Carousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { items } = props;

  const handleNext = () => {
    const newIndex = activeIndex + 1;
    setActiveIndex(newIndex);
  }

  const handlePrev = () => {
    const newIndex = activeIndex - 1;
    setActiveIndex(newIndex);
  }
  
  return (
    <div className="carousel-item data">
      {items.length > 0 && (
        <React.Fragment>
          <button onClick={handlePrev} disabled={activeIndex === 0}>Prev</button>
          <div className="carousel-items">
            {items.map((item, index) => (
              <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                {item}
              </div>
            ))}
          </div>
          <button onClick={handleNext} disabled={activeIndex === items.length - 1}>Next</button>
        </React.Fragment>
      )}
    </div>
  );
}

export default Carousel;
