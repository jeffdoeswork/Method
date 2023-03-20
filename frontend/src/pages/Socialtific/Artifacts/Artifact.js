import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import "./DataArtifact.css"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile_pic from './profile_pic.PNG';

function Artifact(props) {

    const formatDate = (dateString) => {
        const [dateWithoutMilliseconds] = dateString.split('.');
        return dateWithoutMilliseconds;
      };

    return (
        <div>
            <Row className="d-flex justify-content-center">
                <Col xs={12} sm={8} md={7} xl={6}>
                    <Container className="data_artifact">
                        <Row xs={3} sm={3}>
                            <Col sm={2}>
                            <Image src={profile_pic} roundedCircle fluid/>                   
                            </Col>
                            <Col sm={5}>
                                <p>{props.data.user}</p>  

                                {formatDate(props.data.created_at)}   
                            </Col>
                            <Col sm={5} className="d-flex justify-content-end">
                                <p>Link To Method / Meta Method</p>                     
                            </Col>
                        </Row>
                        <Row>
                            <p key={props.data.id}>
                            <br></br>
                            {props.data.description}

                            </p>
                        </Row>
                        <Row>
                        <Col sm={1} className="d-flex justify-content-end"> 
                                    Like             
                        </Col>
                        <Col sm={2}>
                                    Mass             
                        </Col>
                        <Col sm={8} className="d-flex justify-content-end">
                                ^ vote ^             
                        </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </div>
  )
};

export default Artifact;