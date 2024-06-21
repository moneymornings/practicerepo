import React from 'react'
import Card from 'react-bootstrap/Card';
import Developers from '../Images/developers.png';
import FlashCards from '../Images/flashcards.png';
import Navbarcomponent from './Navbarcomponent';



function Donate() {
  return (
    <>
        <Navbarcomponent />
    <div className='h1'>
    <h1> Shop With Us </h1>
    <hr></hr>
    </div>

    
      <div className='cards'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" img src={Developers} />
      <Card.Body>
        <Card.Title>Donate to the Developers</Card.Title>
        <Card.Text>
        If you enjoyed playing Tech Refresher help us continue educating new and aspiring developers.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://buy.stripe.com/test_eVabKY8bC1Pi9iwdQU">Dontate</Card.Link>
      </Card.Body>
    </Card>


    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" img src={FlashCards} />
      <Card.Body>
        <Card.Title>Tech Refresher Flash Cards</Card.Title>
        <Card.Text>
        If you enjoyed playing Tech Refresher, you'll love our physical flash cards! Stay up to date and refreshed with your tech skills every day with our Tech Refresher Flash Cards.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://buy.stripe.com/test_fZe2ao9fGctW2U8bIL">Buy</Card.Link>
      </Card.Body>
    </Card>


    </div>


    
    
    </> 
  )
}

export default Donate