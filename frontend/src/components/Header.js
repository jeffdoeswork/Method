import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div>

        {user ? 
            <Navbar>
                <Nav className="container-fluid ">
                <Nav.Item className="d-flex justify-content-start">
                    <Nav.Link className="link" ><Link className="link" to="/"><h4>Home</h4></Link>  </Nav.Link>
                    <Nav.Link className="link" ><Link className="link" to="/socialtific"><h4>Socialtific</h4></Link>  </Nav.Link>
                    <Nav.Link className="link"> <Link className="link" to={"/pledge/"+user.user_id}> <h4>Join</h4></Link> </Nav.Link>
                </Nav.Item>

                <Nav.Item className="d-flex justify-content-center">
                        {user && <h4>Hello {user.username}</h4>} 
                </Nav.Item>
                <Nav.Item className="d-flex justify-content-end">
                    <Nav.Link className="link"> <Link className="link" to="/logout"><h4>Logout</h4></Link>  </Nav.Link>
                </Nav.Item>

                </Nav>
            </Navbar>
        : 
        <Navbar>
            <Nav className="container-fluid ">
                <Nav.Item className="d-flex justify-content-start">
                    <Nav.Link className="link"> <Link className="link" to="/"> <h4>Home</h4></Link> </Nav.Link>
                        <Nav.Link className="link" ><Link className="link" to="/socialtific"><h4>Socialtific</h4></Link>  </Nav.Link>
                </Nav.Item> 

                <Nav.Item className="d-flex justify-content-end">
                    <Nav.Link className="link"> <Link className="link" to="/login"><h4>Login</h4></Link> </Nav.Link>

                    <Nav.Link className="link"> <Link className="link" to="/register"> <h4> Register</h4> </Link> </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
        }

        </div>
    )
}

export default Header
