import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Nav from 'react-bootstrap/Nav';
import { useMediaQuery } from 'react-responsive';
import { Button } from 'react-bootstrap';
import { BiMenu } from 'react-icons/bi';
import './Header.css';

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    const isSmallScreen = useMediaQuery({ query: '(max-width: 576px)' })  

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <div className={isSmallScreen ? "navbar-mobile" : "navbar-fixed"}>

        {isSmallScreen ?
            <div>
                <Button className="menu-button" onClick={handleNavCollapse}><BiMenu /></Button>
                {!isNavCollapsed && (
                    user ? 
                    <Nav className="flex-column">
                        <Nav.Item>
                            <Nav.Link className="link"><Link className="link" to="/about">About</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="link"><Link className="link" to="/method-maker">Method Maker</Link></Nav.Link>
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
                            <Nav.Link className="link"><Link className="link" to="/method-maker">Method Maker</Link></Nav.Link>
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
                )}
            </div>
        :
            user ? 
                <Nav className="flex-column">
                    <Nav.Item>
                        <Nav.Link className="link"><Link className="link" to="/about">About</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="link"><Link className="link" to="/method-maker">Method Maker</Link></Nav.Link>
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
                        <Nav.Link className="link"><Link className="link" to="/method-maker">Method Maker</Link></Nav.Link>
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
