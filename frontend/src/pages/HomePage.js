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
    let [totalcount, setTotalCount] = useState([])
    let [deletemovieid, setDeleteMovieID] = useState([])

    let {authTokens, logoutUser, user} = useContext(AuthContext)
    const navigate = useNavigate();

    let getCount = async() => {
        let response2 = await fetch('http://127.0.0.1:8000/api/tutorials/total', {
                method:'GET',})
                let data2 = await response2.json()
                setTotalCount(data2)
    }

    useEffect(()=> {
        getNotes();
        getTuts();
        getCount();
    }, [])


    let getTuts = async() => {
        let response2 = await fetch('http://127.0.0.1:8000/api/tutorials/', {
                method:'GET',})

                let data2 = await response2.json()
                setTutorial(data2)
    }

    let deletemovie = async (tut)=> {
        // e.preventDefault()
        console.log(tut.id)
        let responsedel = await fetch('http://127.0.0.1:8000/api/tutorials/'+tut.id, { 
            method: 'DELETE' })
        getTuts();
        getCount();
    }

    const handleDeleteMovie = (e) => {
        setDeleteMovieID(e);
    }

    let makemovie = async (e)=> {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/tutorials/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'title':e.target.title.value, 
                'description':e.target.description.value,
                'user':user.user_id
            })
            
        })
        e.target.reset();
        getTuts();
        getCount();
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
            { user ? 
            <div>
            <p>You are logged to the home page!</p>

            <Container className="justify-content-md-center">
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <h1> { totalcount } </h1>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

            <Form onSubmit={makemovie} > 

            <Container>
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
            </Container>
            </Form>

         <Container>
            <ul>
                {notes.map(note => (
                    <li key={note.id} >{note.body}</li>
                ))}
            </ul>
                {tutorial.map(tut => (
                    <div key={tut.id} >
                       <h3> {tut.title}  </h3> 
                        <h4> {tut.description}  </h4>
                        <Button variant="danger" onClick={() => deletemovie(tut)}>Delete</Button>
                    </div>
                ))}
            </Container>
            </div>
            :
            <h3>You should login</h3>
            }

        </div>
    )
}

export default HomePage
