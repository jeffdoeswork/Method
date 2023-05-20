import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import "./DataArtifact.css"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile_pic from './profile_pic.PNG';


{/* <Image src={profile_pic} roundedCircle style={{ width: "80px", height: "80px" }} />                  */}

function Artifact(props) {

    return (
        <div>   
<Row className="d-flex justify-content-center">
    <Col xs={12} sm={8} md={7} xl={6}>
        <Container className="data_artifact">
            <Row>
                <Col xs={3} md={2}>
                    <Image src={profile_pic} roundedCircle style={{ width: "80px", height: "80px" }} />
                </Col>
                <Col xs={3} md={2}>
                    <p className="d-flex justify-content-start">{props.data.user.username}</p>
                </Col>
                <Col xs={6} md={8}>
                    <p className="d-flex justify-content-end"> {props.data.created_at}</p>
                </Col>
            </Row>
            <Row>
            <Col xs={4} md={2}> 
            </Col>
                <Col xs={8}>
                    <p>{props.data.description}</p>
                </Col>
            </Row>
        </Container>
    </Col>
</Row>


        </div>
  )
};

export default Artifact;