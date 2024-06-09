import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AutoContext } from './App'

function Sedan() {
    const car = useContext(AutoContext);
    const [doors, setDoors] = useState(4);
    const [cylinders, setCylinders] = useState(4);
    const [color, setColor] = useState(blue);
    const [transmission, setTransmission] = useState(Automatic);
    const [previousOwners, setPreviousOwners] = useState(New)


  return (
    <>
    <div>
    <h3>Sedans</h3>
    <p>Vehicle: {car}</p>
    <p> Doors: {doors}</p>
    <p>Cylinders: {cylinders}</p>
    <p>Color: {color} </p>
    <p>Transmission: {transmission}</p>
    <p>New or Used: {previousOwners}</p>
    
    
    </div>

    </>
  )
}

export default Sedan