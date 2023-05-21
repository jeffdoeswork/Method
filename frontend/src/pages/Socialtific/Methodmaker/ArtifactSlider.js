import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile_pic from './profile_pic.PNG';
import Artifact from '../Artifacts/Artifact';
import CreateArtifact from '../Artifacts/CreateArtifact';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import "./SliderArtifact.css"

// https://www.youtube.com/watch?v=aiedzAHmVII
function ArtifactSlider(props) {
    const [index, setIndex] = useState(0);
    const [makeartifact, setMakeArtifact] = useState(true);
    const [borrowedIndex, setBorrowedIndex] = useState(null); // keep track of borrowed item
    const [idMap, setIdMap] = useState({});

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    const handleBorrow = () => {
        setBorrowedIndex(index); // set the current selected item as borrowed
    };

    useEffect(() => {
        const newIdMap = props.getdata.reduce((map, item, index) => {
            map[item.id] = index + 1;  // replace item.id with the property that holds your original ID
            return map;
        }, {});
        setIdMap(newIdMap);
    }, [props.getdata]);
    
    
    return ( 
        <div>
        <Container>
        { makeartifact ? 
        <div>
            <Carousel 
            indicators={false}
            interval={null} 
            variant="dark" 
            activeIndex={index} 
            onSelect={handleSelect}>

            {props.getdata.map((data, i) => (
                    <Carousel.Item>
                        <Artifact data={data} artifact_className={props.artifact_className} idMap={idMap[data.id]} />
                    </Carousel.Item>
            ))}


            </Carousel>
            <Row>
            <div className="d-flex justify-content-center mt-3">
            <Col></Col>
                <Col>
                {props.getdata.map((item, i) => (
                    <button
                        key={i}
                        className={`custom-btn mx-1 ${index === i ? 'selected' : ''} ${borrowedIndex === i ? 'borrowed' : ''}`}
                        onClick={() => handleSelect(i)}
                    >
                        {i+1}
                    </button>
                ))}

                </Col>
                <Col>
                <Button onClick={handleBorrow}> Borrow </Button> {/* call handleBorrow when clicked */}
                <Button onClick={() => setMakeArtifact(false)}> + Make New </Button>
                </Col>
            </div>
            </Row>
        </div>
        :
        <div>
            <CreateArtifact />

            <Button onClick={() => setMakeArtifact(true)}> Browse  </Button>
                 

        </div>

            }
        </Container>
        </div>
  )
};

export default ArtifactSlider;