import React from 'react'
import App from './App';
import { useState, createContext, useContext } from 'react'
import AutoContext from './App';





function Truck() {
    const Automobiles = useContext(AutoContext); //brings in the context from the app component to truck 
    const [make, setMake] = useState('Toyota');
    const [model, setModel] =useState('Camry');
    const [year, setYear] = useState(2024);
    const [mileage, setMileage] =useState('23,000');
    






  return (
    
    <div>
    <h3>Trucks</h3>
    <p> Truck:  {Automobiles}</p>
    <p>Make: {make}</p>
    <p>Model: {model}</p>
    <p>Mileage: {mileage}</p>
    
    
    
    </div>
  )
}

export default Truck