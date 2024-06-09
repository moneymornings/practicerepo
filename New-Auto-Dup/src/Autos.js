import React, { useContext } from 'react'
import { useState } from 'react'
import { AutoContext } from './App'
//import child components - SUV/SEDAN/TRUCK

function Autos() {
const vehicle = useContext(AutoContext);
const [make, setMake]= useState('Mercedes');
const [model, setModel] =useState('G Wagon');
const [year, setYear] = useState(2024);
const [mileage, setMileage] = useState(12000);
const [mpg, setMpg] = useState(13);




  return (
    <div>
    
    <h3> Available Vehicles</h3>
        <p>Vehicles : {vehicle}</p>
        <p> Make: {make}</p>
        <p> Model: {model}</p>
        <p>Year: {year}</p>
        <p> Mileage: {mileage}</p>
        <p> MPG: {mpg} </p>

    
    
    </div>
  )
}

export default Autos