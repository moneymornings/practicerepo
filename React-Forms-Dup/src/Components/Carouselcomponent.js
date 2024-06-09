import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Carouselcomponent() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img src="https://images.unsplash.com/photo-1714579325129-f3aa2b42699f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" />
        <Carousel.Caption>
          <h3>This is a test</h3>
          <p>Testing 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://source.unsplash.com/400x400"  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://source.unsplash.com/105x105" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 

</>
  );
}

export default Carouselcomponent