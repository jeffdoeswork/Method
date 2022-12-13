import React, {useContext}  from 'react'
import Register from '../context/Register'
import { useNavigate } from 'react-router-dom'


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
            <form onSubmit={registerUser}>
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="text" name="first_name" placeholder="Enter Firstname" />
                <input type="text" name="last_name" placeholder="Enter Lastname" />
                <input type="text" name="email" placeholder="Enter Email" />

                <input type="submit"/>
            </form>
        </div>
    )
}

export default RegisterPage
