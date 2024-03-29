import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NewsFeed = () => {
    const [methodfeed, setMethodFeed] = useState(false);
    const [allmethods, setAllMethods] = useState([ ]);
    const url = process.env.REACT_APP_URL

    let getMethods = async() => {
        let response = await fetch(`http://${url}/api/methods`, {
            method:'GET',})
      
            let method_data = await response.json()
            console.log("this is the first data", method_data)
            setAllMethods(method_data);
      }
      
      useEffect(()=> {
        getMethods();
        console.log("but did you map it",allmethods)
      }, [])

    return (
        <div>
            <br></br>
            <Container className="justify-content-md-center w-75" fluid="md">

            {methodfeed ?
            <div>
                <Row>
                <Col xs={2} md={3} lg={4}>
                        <h1> Method Feed</h1>
                </Col>
                <Col xs={2} md={3} lg={4}>

                <Button onClick={() => setMethodFeed(false)}>
                   Go to Artifacts
                </Button>
                    {allmethods.map(method => (
                        <div>
                        <p>Title: {method.title}</p>
                        <p>Username: {method.user}</p>
                        </div>
                    ))}
                    </Col>
            </Row>
            </div>
            :
            <div>
                <Row>
                    <Col xs={2} md={3} lg={4}>
                        <h1> Artifact Feed</h1>
                    </Col>

                    <Col xs={2} md={3} lg={4}>
                        <Button onClick={() => setMethodFeed(true)}>
                            Go to Methods
                        </Button>
                    </Col>
                </Row>
            </div>
            }

            </Container>

        </div>
    )
}

export default NewsFeed