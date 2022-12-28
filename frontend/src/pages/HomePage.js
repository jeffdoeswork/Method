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

    let getCount = async() => {
        let response2 = await fetch('http://127.0.0.1:8000/api/tutorials/total', {
                method:'GET',})
                let data2 = await response2.json()
                setProgress(data2)
    }
    const pledgeuser = () => {
        navigate('/pledge/'+user.user_id)
    }
    useEffect(()=> {
        getCount();
    }, [])

    return (
        <div>
            <br></br>
            <Container className="neat justify-content-md-center w-75" fluid="md">
                <h2 style={{textAlign: "center", fontWeight: 'bold', color: 'white', WebkitTextStroke:'1px', WebkitTextStrokeColor:'Black' }}> ${progress} - Total </h2>
                <br></br>
                <ProgressBar now={(progress / 5000)} variant="info" label={`${(progress / 5000)}%`} />
                <h3 style={{ fontWeight: 'bold', color: 'white', WebkitTextStroke:'1px', WebkitTextStrokeColor:'Black' }}>$500,000 - Small Campground</h3>
                <br></br>
                <ProgressBar now={(progress / 25000)} variant="success" label={`${(progress / 25000)}%`} />
                <h3 style={{ fontWeight: 'bold', color: 'white', WebkitTextStroke:'1px', WebkitTextStrokeColor:'Black' }}>$2,500,000 - Campground, RV Park, and much more</h3>
                <br></br>
                <ProgressBar now={(progress / 80000)} variant="warning" label={`${(progress / 80000)}%`} />
                <h3 style={{ fontWeight: 'bold', color: 'white', WebkitTextStroke:'1px', WebkitTextStrokeColor:'Black' }}>$8,000,000 - Facility with +100 acres in West Virginia    </h3>
            </Container>
            <br></br>
            { user ? 
            <div>
            <Container className="justify-content-md-center w-75" fluid="md">
                <h4 style={{ fontWeight: 'bold', color: 'white', WebkitTextStroke:'1px', WebkitTextStrokeColor:'Black' }}>Lets Build an awesome facility with the best amenities and resources for freedom lovers!</h4>
                <br></br>
                
                <Button variant="success" onClick={pledgeuser}>
                    Pledge
                </Button>
            </Container>
            </div>
            :
            <Container className="justify-content-md-center w-75" fluid="md">
                <br></br>
                <h3 style={{fontWeight: 'bold', color: 'white', WebkitTextStroke:'1px', WebkitTextStrokeColor:'Black'  }}>You should login or register</h3>
            </Container>

            }

        </div>
    )
}

export default HomePage
