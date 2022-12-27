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
            <Container className="justify-content-md-center w-75" fluid="md">
                <h2 style={{textAlign: "center"}}> ${progress} - Total </h2>
                <br></br>
                <ProgressBar now={(progress / 5000)} variant="info" label={`${(progress / 5000)}%`} />
                <h3>$500,000 - Small Campground</h3>
                <br></br>
                <ProgressBar now={(progress / 25000)} variant="success" label={`${(progress / 25000)}%`} />
                <h3>$2,500,000 - Campground, RV Park, and much more</h3>
                <br></br>
                <ProgressBar now={(progress / 80000)} variant="warning" label={`${(progress / 80000)}%`} />
                <h3>$8,000,000 - Freedomistan +100 acres   </h3>
            </Container>
            <br></br>
            { user ? 
            <div>
            <Container className="justify-content-md-center w-75" fluid="md">
                Lets Build an awesome facility with the best amenities and resources for freedom lovers!
                <br></br>
                
                <Button variant="success" onClick={pledgeuser}>
                    Pledge
                </Button>
            </Container>
            </div>
            :
            <Container className="justify-content-md-center w-75" fluid="md">
                <br></br>
                <h3>You should login or register</h3>
            </Container>

            }

        </div>
    )
}

export default HomePage
