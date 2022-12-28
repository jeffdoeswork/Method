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

        if (e.target.password.value == e.target.passwordconfirm.value) {
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
                navigate('/login')
            }else{
                alert('Something went wrong! Maybe try another username')
            }

        } else {
            e.preventDefault()
            alert("Your passwords don't match")
        }
    }

    return (
        <div>

            <Container className="justify-content-md-center w-75" fluid="md">
                <Form onSubmit={registerUser}>
                <Container>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="passwordconfirm" placeholder="Confirm Password" />
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
                </Container>
                </Form>
            </Container>
        </div>
    )
}

export default RegisterPage
