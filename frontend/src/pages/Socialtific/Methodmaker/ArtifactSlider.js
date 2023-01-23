import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import "./DataArtifact.css"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile_pic from './profile_pic.PNG';
import Artifact from '../Artifacts/Artifact';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
// https://www.youtube.com/watch?v=aiedzAHmVII
function ArtifactSlider(props) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    return ( 
        <div>
        <Carousel 
        indicators={false}
        interval={null} 
        variant="dark" 
        activeIndex={index} 
        onSelect={handleSelect}>

            {props.getdata.map((data) => (
                <Carousel.Item>
                    <Artifact data={data}/>
                </Carousel.Item>
                )
            )}
        </Carousel>
        <div className="d-flex justify-content-center mt-3">
            {props.getdata.map((item, i) => (
                <button
                key={i}
                className={`btn btn-primary mx-1 ${index === i ? 'active' : ''}`}
                onClick={() => handleSelect(i)}
                >
                {i+1}
                </button>
            ))}
        </div>
        </div>
  )
};

export default ArtifactSlider;