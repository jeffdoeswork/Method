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
    const { data,  idMap } = props;

    return (
        <div>   
<Row className="d-flex justify-content-center">
    
    <Col xs={12} sm={12} md={10} xl={9}>
        <Container className={props.data.type}>
            <Row>
                <Col xs={2} md={2} lg={2}>
                    <Image src={profile_pic} roundedCircle style={{ width: "80px", height: "80px" }} />
                </Col>
                <Col xs={2} md={2} lg={2}>
                    <p className="d-flex justify-content-start">{props.data.user.username}</p>
                </Col>
                <Col xs={6} md={8} lg={8}>
                    <p className="d-flex justify-content-end"> {props.data.created_at}</p>
                </Col>
            </Row>
            <Row style={{ paddingBottom: '10px' }}>
            <Col xs={4} md={2} className="d-flex flex-column justify-content-end">
            <h3> #{ idMap }</h3>
            </Col>
                <Col xs={8} className="maxHeight" style={{ marginTop: '-25px' }}>
                    <p>{props.data.description}</p>
                </Col>
                <Col xs={2} md={2} className="d-flex flex-column justify-content-end align-items-end">
                <p> Likes </p>
            </Col>
            </Row>
        </Container>
    </Col>
</Row>


        </div>
  )
};

export default Artifact;