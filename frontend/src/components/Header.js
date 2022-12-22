import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div>

            {user ? 
            <Navbar bg="dark" variant="dark">
                <Nav>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/">Home</Link> 
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/logout">Logout</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                       <Nav.Link> {user &&   <p>Hello {user.username}</p>} </Nav.Link> 
                    </Nav.Item>
                </Nav>
            </Navbar>
            : 
            <Navbar bg="dark" variant="dark">
                <Nav>
                    <Nav.Item> 
                        <Nav.Link> <Link to="/" >Home</Link> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link> <Link to="/login" >Login</Link> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link> <Link to="/register"> Register</Link> </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            }

        </div>
    )
}

export default Header
