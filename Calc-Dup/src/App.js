import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Operation from './Operation';

function App() {
  return (
  <>
    <div className="cal-screen"></div>
    <div className="board-row">
      <button className="square">C</button>
      <button className="square">+/-</button>
      <button className="square">%</button>
      <button className="square">/</button>
    </div>
    <div className="board-row">
      <button className="square">7</button>
      <button className="square">8</button>
      <button className="square">9</button>
      <button className="square"><Operation/></button>
    </div>
    <div className="board-row">
      <button className="square">4</button>
      <button className="square">5</button>
      <button className="square">6</button>
      <button className="square">-</button>
    </div>
    <div className="board-row">
      <button className="square">1</button>
      <button className="square">2</button>
      <button className="square">3</button>
      <button className="square">+</button>
    </div>
    <div className="board-row">
      <button className="square">0</button>
      <button className="square">.</button>
      <button className="square">=</button>
      
    </div>


  </>
  );
}
  

export default App;
