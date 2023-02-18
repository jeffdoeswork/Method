import React from 'react'
import "./DataArtifact.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormControl, Form } from 'react-bootstrap';

const CreateData = () => {
  return (
    <div>

      <Row className="d-flex justify-content-center">
        <Col xs={12} sm={8} md={7} xl={6}>
          <Container className="data_artifact">
            <Form>
              <FormControl as="textarea" rows="3" value={value} onChange={handleChange} />
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default CreateData