import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Guard from './Guard';
import Forward from './Forward';
import Center from './Center';
import { createContext } from 'react';


// App -> Guard -> Pointguard, Shootingguard
export const PlayerContext = createContext();


function App() {
  const [team, setTeam] = useState('Denver Nuggets');
  const [logo, setLogo] = useState('../assets/nuggets.webp')

  return (
    <div>
      <img src='logo'></img>
      <PlayerContext.Provider value={ {team:team, logo:logo } }>
        {/* Guard, Forward, and Center should all be able to access the value team */}
        <Guard />
        <Forward />
        <Center />
      </PlayerContext.Provider>
      
    </div>
  );
}

export default App;
