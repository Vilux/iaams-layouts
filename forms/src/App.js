import React from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const formStyle = {
  margin: '50px',
  textAlign: 'center',
  display: 'flex', 
  justifyContent: 'center'
  };

const textStyle = {

}

const inputStyle = {
  width: '100%',
  height: '30px',
  marginBottom: '20px',
}

const FlexForm = () => {
  return (
    <div style={formStyle}>
      <Form>
        <Form.Group as={Row} controlId="name">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col>
            <Form.Control style={inputStyle}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row}  controlId="email">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col>
            <Form.Control style={inputStyle}/>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default FlexForm