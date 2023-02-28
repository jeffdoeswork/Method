import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NewsFeed = () => {
    const [methodfeed, setMethodFeed] = useState(true);
    return (
        <div>
            <Container className="justify-content-md-center w-75" fluid="md">

            {methodfeed ?
            <div>
                <Button onClick={() => setMethodFeed(false)}>
                    Artifacts
                </Button>
            <h2> Method Feed </h2>
            </div>
            :
            <div>
                <Button onClick={() => setMethodFeed(true)}>
                    Methods
                </Button>
                <h2> Artifact Feed</h2>
            </div>
            }

            </Container>

        </div>
    )
}

export default NewsFeed