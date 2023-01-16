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
    const [getdata, setGetdata] = useState({
        "created_at" : "today", "email_datas" : "Jeff@does.work", "datas" : "The dog of wisdom: If a ball is too big for your mouth, it is not yours", "id" : 1
    });

    return (
        
        <div className="artifact_section">
            <Container className="data_artifact">
                <div>
                <Row>
                    <Col sm={1}>
                    <Image src={profile_pic} roundedCircle width="70" />                   
                    </Col>
                    <Col sm={5}>
                        <p>{getdata.email_datas}</p>                  
                    </Col>
                    <Col sm={6}>
                        <p>{getdata.created_at}</p>                  
                    </Col>
                </Row>
                <Row>
                    <h3 key={getdata.id}>
                        { (getdata.datas).length < 225?
                        (getdata.datas)
                        :
                        ((getdata.datas).substring(0, 225) + '...')
                        }
                    </h3>
                </Row>
                </div>
            </Container>
        </div>
  )
};

export default Artifact;