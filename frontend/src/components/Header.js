import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Nav from 'react-bootstrap/Nav';
import './Header.css';

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)

    return (
        <div className="navbar-fixed">

        {user ? 
            <Nav className="flex-column">
                <Nav.Item>
                    <Nav.Link className="link"><Link className="link" to="/about">About</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link"><Link className="link" to="/socialtific">Method Maker</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link"><Link className="link" to="/">Newsfeed</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link"><Link className="link" to={"/profile/"+user.user_id}>Your Profile: {user.username}</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link"><Link className="link" to="/logout">Logout</Link></Nav.Link>
                </Nav.Item>
            </Nav>
        : 
            <Nav className="flex-column">
                <Nav.Item>
                    <Nav.Link className="link"><Link className="link" to="/about">About</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link"><Link className="link" to="/socialtific">Method Maker</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link"><Link className="link" to="/">Newsfeed</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link"><Link className="link" to="/login">Login</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link"><Link className="link" to="/register">Register</Link></Nav.Link>
                </Nav.Item>
            </Nav>
        }

        </div>
    )
}

export default Header

