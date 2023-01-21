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

function ArtifactSlider(props) {

    return ( 
        <div>
            {props.getdata.map((data) => (
                <Artifact data={data}/>
                )
            )}
        </div>
  )
};

export default ArtifactSlider;