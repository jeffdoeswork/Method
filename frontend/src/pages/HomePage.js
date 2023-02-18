import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Freedomistan from './Freedomistan'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import './HomePage.css';

const HomePage = () => {
    const [progress, setProgress] = useState(0)
    let {user} = useContext(AuthContext)
    const navigate = useNavigate();


    return (
        <div>
            <br></br>
            <Container className="neat justify-content-md-center" fluid="md">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vnANg7HOh-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Container>

        </div>
    )
}

export default HomePage
