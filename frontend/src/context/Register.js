import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'



const Register = () => {
    const navigate = useNavigate();

    let registerUser = async (e )=> {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/register/', {
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
        Hi
    </div>
  )
}

export default Register
