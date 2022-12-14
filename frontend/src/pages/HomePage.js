import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    let [notes, setNotes] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(()=> {
        getNotes()
    }, [])


    let getNotes = async() =>{
        try {
        let response = await fetch('http://127.0.0.1:8000/api/notes/', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        
            if(response.status === 200){
                setNotes(data)
            } else {
                logoutUser()
                navigate('/login')
                logoutUser()
            }
        } catch {
            logoutUser()
            navigate('/login')
            logoutUser()
        }
    }

    return (
        <div>
            <p>You are logged to the home page!</p>
            <ul>
                {notes.map(note => (
                    <li key={note.id} >{note.body}</li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage
