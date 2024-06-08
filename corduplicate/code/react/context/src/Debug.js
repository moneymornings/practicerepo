import logo from './logo.svg';
import './App.css';
import { useContext, useState } from 'react';
import Guard from './Guard';
import Forward from './Forward';
import Center from './Center';
import { createContext } from 'react';

// App -> Guard -> Pointguard, Shootingguard
const PlayerContext = createContext();


export const PlayerProvider = () => {
  const [team, setTeam] = useState('');

  return (
    <div>
      <PlayerContext.Provider team="Denver Nuggets">
        <Guard />
        <Forward />
        <Center />
      </PlayerContext.Provider>
      
    </div>
  );
}

export const usePlayer = () => {
    return useContext(PlayerContext)
}
