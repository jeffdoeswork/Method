import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginPage = () => {
    let {loginUser} = useContext(AuthContext)
    return (

            <Container className="justify-content-md-center w-75" fluid="md">
                
                <Form onSubmit={loginUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                
            </Container>

    )
}

export default LoginPage
