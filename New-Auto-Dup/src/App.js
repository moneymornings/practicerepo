import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import Autos from './Autos'
import Make from './Make'
import Model from './Model'
import Navbarcomponent from './Navbarcomponent'


export const AutoContext =createContext();

function App() {
  const [auto, setAuto] =useState('');



  return (
    <>
    <div>
      <Navbarcomponent/>
    </div>

    <div>
    <AutoContext.Provider value ={auto}>
    <Autos/>
    {/* <Make/>
    <Model/> */}
    </AutoContext.Provider> 
    </div>
    </>
  )
}

export default App

