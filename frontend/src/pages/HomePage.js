import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => {
    let {user} = useContext(AuthContext)

    return (
        <div>
            { user ? 
            <div>
            Lets Build an awesome community!
            </div>
            :
            <h3>You should login</h3>
            }

        </div>
    )
}

export default HomePage
