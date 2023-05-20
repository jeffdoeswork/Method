import React, { useState, useEffect, useContext} from 'react'
import "./DataArtifact.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormControl, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import AuthContext from '../../../context/AuthContext';

const CreateArtifact = () => {
  const [value, setValue] = useState('');
  const url = process.env.REACT_APP_URL
  // let {user} = useContext(AuthContext)

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>

      <Row className="d-flex justify-content-center">
        <Col xs={12} sm={8} md={7} xl={6}>
          <Container className="data_artifact">
            <Row>
              Make a new Data Artifact
            </Row>
            <Row>
              <Form>
                <FormControl as="textarea" rows="3" value={value} onChange={handleChange} />
              </Form>
            </Row>
            <Row>
              <Button variant="primary" type="submit">
                  Make Data
              </Button>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default CreateArtifact