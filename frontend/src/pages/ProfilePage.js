import React, {useState, useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AuthContext from '../context/AuthContext'
import { useNavigate, useParams } from 'react-router-dom'

const ProfilePage = () => {
    const {id} = useParams();
    let {user} = useContext(AuthContext)

    return (
    <div>
        { user.user_id == id ?
            <div>This is your ProfilePage {user.username} ID: {user.user_id} </div>

            :

            <div>Not your ProfilePage {user.username} ID: {user.user_id} </div>
        }


    </div>
    )
}

export default ProfilePage