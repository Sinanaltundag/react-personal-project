import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';

function Person(props) {
  console.log(props.personProp);
  const {avatar, email, first_name, last_name }= props.personProp
  return (
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={avatar} />
  <Card.Body>
    <Card.Title>{first_name+" "+last_name}</Card.Title>
    <Card.Text>
      {email}
    </Card.Text>
  </Card.Body>
</Card>
</Col>
  )
}

export default Person