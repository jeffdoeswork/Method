import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => {
    let [notes, setNotes] = useState([])
    let [tutorial, setTutorial] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(()=> {
        getNotes();
        getTuts();
    }, [])


    let getTuts = async() => {
        let response2 = await fetch('http://127.0.0.1:8000/api/tutorials/', {
                method:'GET',})

                let data2 = await response2.json()
                setTutorial(data2)
    }

    let makemovie = async (e )=> {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/tutorials/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'title':e.target.title.value, 
                'description':e.target.description.value
            })
            
        })
        e.target.reset();
        getTuts();
    }



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

            {/* <Form onSubmit={() => { getNotes(); makemovie();}}> */}
            <Form onSubmit={makemovie} > 

            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Movie title</Form.Label>
                <Form.Control type="text" id="title"  name="title" placeholder="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Movie description</Form.Label>
                <Form.Control type="text" id="description" name="description" placeholder="description" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

            </Form>

            <ul>
                {notes.map(note => (
                    <li key={note.id} >{note.body}</li>
                ))}
            </ul>
                {tutorial.map(tut => (
                    <div key={tut.id} >
                       <h3> {tut.title}  </h3> 
                        <h4> {tut.description}  </h4>
                    </div>
                ))}
                {  }

        </div>
    )
}

export default HomePage
