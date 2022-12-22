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
                <Nav.Item> 
                    <Link to="/" >Home</Link> 
                </Nav.Item>
                <Nav.Item> 
                 <Link to="/logout">Logout</Link>
                 </Nav.Item>
                 <Nav.Item>
                    {user &&   <p>Hello {user.username}</p>}
                </Nav.Item>
            </Navbar>
            : 
            <Navbar bg="dark" variant="dark">
                <Nav.Item> 
                    <Link to="/" >Home</Link> 
                </Nav.Item>
                <Nav.Item>
                    <Link to="/login" >Login</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/register"> Register</Link>
                </Nav.Item>
            </Navbar>
            }

        </div>
    )
}

export default Header
