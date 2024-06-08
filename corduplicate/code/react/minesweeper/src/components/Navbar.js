import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'

export default function Navbar() {
  return (
    <div id="navbar">
        <div><NavLink to= "/minesweeper">Minesweeper</NavLink></div>
        <div><NavLink to= "/">Home</NavLink></div>  
        <div><NavLink to= "/jokes">Jokes</NavLink></div> 
    </div>
  )
}
