import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

// {/* const { avatar, email, first_name, last_name, id } = item; */}
function Person(props) {
  // console.log(props.personProp);
  
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {props.personProp.map((item) => (
        <Col key={item.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.avatar} />
            <Card.Body>
              <Card.Title>{item.first_name + " " + item.last_name}</Card.Title>
              <Card.Text>{item.email}</Card.Text>
              <Button
                variant="danger"
                onClick={() => {
                  props.deletePersonProp(item.id);
                }}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
      {/* <Card {...props} /> */}
    </Row>
  );
}

export default Person;
