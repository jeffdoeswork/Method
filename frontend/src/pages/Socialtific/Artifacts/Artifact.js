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
    const [getdata, setGetdata] = useState([
        {"created_at" : "10/23/2022 8:15PM", "email_datas" : "Jeff@does.work", "datas" : "ThThe dog of wisof wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog dom: If a ball is toThe dog of wisdom: If a ball is toe dog of wisdom: If a ball is too big for your mouth, it is not yours", "id" : 1},
        {"created_at" : "10/23/2022 8:15PM", "email_datas" : "Jeff@does.work", "datas" : "ThThe dog of wisof wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog dom: If a ball is toThe dog of wisdom: If a ball is toe dog of wisdom: If a ball is too big for your mouth, it is not yours", "id" : 1},
        {"created_at" : "10/23/2022 8:15PM", "email_datas" : "Jeff@does.work", "datas" : "ThThe dog of wisof wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog dom: If a ball is toThe dog of wisdom: If a ball is toe dog of wisdom: If a ball is too big for your mouth, it is not yours", "id" : 1},
        {"created_at" : "10/23/2022 8:15PM", "email_datas" : "Jeff@does.work", "datas" : "ThThe dog of wisof wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog dom: If a ball is toThe dog of wisdom: If a ball is toe dog of wisdom: If a ball is too big for your mouth, it is not yours", "id" : 1},
        {"created_at" : "10/23/2022 8:15PM", "email_datas" : "Jeff@does.work", "datas" : "ThThe dog of wisof wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog dom: If a ball is toThe dog of wisdom: If a ball is toe dog of wisdom: If a ball is too big for your mouth, it is not yours", "id" : 1},
        {"created_at" : "10/23/2022 8:15PM", "email_datas" : "Jeff@does.work", "datas" : "ThThe dog of wisof wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog dom: If a ball is toThe dog of wisdom: If a ball is toe dog of wisdom: If a ball is too big for your mouth, it is not yours", "id" : 1},
        {"created_at" : "10/23/2022 8:15PM", "email_datas" : "Jeff@does.work", "datas" : "ThThe dog of wisof wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog dom: If a ball is toThe dog of wisdom: If a ball is toe dog of wisdom: If a ball is too big for your mouth, it is not yours", "id" : 1},
        {"created_at" : "10/23/2022 8:15PM", "email_datas" : "Jeff@does.work", "datas" : "ThThe dog of wisof wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog dom: If a ball is toThe dog of wisdom: If a ball is toe dog of wisdom: If a ball is too big for your mouth, it is not yours", "id" : 1},
        {"created_at" : "10/23/2022 8:15PM", "email_datas" : "Jeff@does.work", "datas" : "ThThe dog of wisof wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog of wisdom: If a ball is toThe dog dom: If a ball is toThe dog of wisdom: If a ball is toe dog of wisdom: If a ball is too big for your mouth, it is not yours", "id" : 1},
    ]);

    useEffect(()=> {
        console.log(getdata);
    }, [])

    return (
        
        <div>

            {getdata.map((data) => (
                <div>
            <Row className="d-flex justify-content-center">
                <Col xs={12} sm={8} md={7} xl={6}>
            <Container className="data_artifact">
                
                <Row xs={3} sm={3}>
                    <Col sm={2}>
                    <Image src={profile_pic} roundedCircle fluid/>                   
                    </Col>
                    <Col sm={5}>
                        <p>{data.email_datas}</p>    
                        <p>{data.created_at}</p>                 
                    </Col>
                    <Col sm={5} className="d-flex justify-content-end">
                        <p>Link To Method / Meta Method</p>                     
                    </Col>
                </Row>
                <Row>
                    <p key={data.id}>
                    {data.datas}
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
            {/* <br></br> */}
            </div>
            )
        )}
        </div>
  )
};

export default Artifact;