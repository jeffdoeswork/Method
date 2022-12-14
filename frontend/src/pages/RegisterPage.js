import React, {useContext}  from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RegisterPage = () => {
    const navigate = useNavigate();

    let registerUser = async (e )=> {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/register', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'username':e.target.username.value, 
                'password':e.target.password.value,
                'first_name':e.target.first_name.value, 
                'last_name':e.target.last_name.value,
                'email':e.target.email.value
            })
        })
        let data = await response.json()

        if(response.status === 200){
            navigate('/')
        }else{
            alert('Something went wrong!')
        }
    }

    return (
        <div>
            <Container className="justify-content-md-center">
                <Card centered border="primary" style={{ width: 'rem' }}>
                    <Card.Body>  

                    <Col className="justify-content-md-center">
                        <Form onSubmit={registerUser}>
                            <input type="text" name="username" placeholder="Enter Username" />
                            <input type="password" name="password" placeholder="Enter Password" />
                            <input type="text" name="first_name" placeholder="Enter Firstname" />
                            <input type="text" name="last_name" placeholder="Enter Lastname" />
                            {/* <input type="text" name="email" placeholder="Enter Email" /> */}
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" id="email"/>
                            <br></br>
                            <Button type="submit" variant="primary">Primary</Button>{' '}
                        </Form>
                    </Col>
                    </Card.Body>  
                </Card>
            </Container>


            <Container className="justify-content-md-center">

            <Form onSubmit={registerUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="text" name="first_name" placeholder="Enter firstname" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" name="last_name" placeholder="Enter lastname" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

            </Form>
            </Container>
        </div>
    )
}

export default RegisterPage
