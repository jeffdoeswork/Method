import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';

const CustomCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Container  className="justify-content-md-center w-75" fluid="md">
      <Carousel indicators={false} variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Item>
        <Carousel.Item>
            <h3>2nd slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Item>
        <Carousel.Item>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Item>
      </Carousel>
    </Container>
    <div className="d-flex justify-content-center mt-3">
      {[1,2,3].map((number, i) => (
        <button
          key={i}
          className={`btn btn-primary mx-1 ${index === i ? 'active' : ''}`}
          onClick={() => handleSelect(i)}
        >
          {number}
        </button>
      ))}
    </div>
  </div>
  )
      }
export default CustomCarousel;
