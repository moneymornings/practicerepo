import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HowtoPlay from './Components/HowtoPlay';
import Home from './Components/Home';
import Donate from './Components/Donate';
import Game from './Components/Game';
import RegisterPage from './Components/RegisterPage';
import LogIn from './Components/LogIn';

function App() {
 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="home" element={<Home />} />
          <Route path="studyguide" element={<HowtoPlay />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="flashcards" element={<Game />} />
          <Route path="shop" element={<Donate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

