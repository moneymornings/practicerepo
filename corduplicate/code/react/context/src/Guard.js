import React from 'react'
import { useState, useContext, createContext } from 'react';
import { PlayerContext } from './App';
import Pointguard from './Pointguard';



function Guard() {
    const playerteam = useContext(PlayerContext);
    const [height, setHeight] = useState(72);
    const [handles, setHandles] = useState(70);
    const [assists, setAssists] = useState(80);
    const [dunk, setDunk] = useState(78)
    

    return (
        <div>
                <h3>Create a Player</h3>
                <p>Team: {playerteam}</p>
                <p>Height: {height}</p>
                <p>Handles: {handles}</p>
                <p>Assists: {assists}</p>
                <p>Dunk: {dunk}</p>

                <Pointguard />
        </div>
    )
}

export default Guard