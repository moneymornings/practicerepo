import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AutoContext } from './App';
import Truck from './Truck';


function CarCards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><Truck/></ListGroup.Item>
        <ListGroup.Item>Model</ListGroup.Item>
        <ListGroup.Item>Year</ListGroup.Item>
        <ListGroup.Item>Mileage</ListGroup.Item>
        <ListGroup.Item>MPG</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      </Card.Body>
    </Card>
  );


  

}

    

export default CarCards