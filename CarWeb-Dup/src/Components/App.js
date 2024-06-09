import {useState} from 'react';

import CarCards from './CarCards';
import Navbarcomponent from './Navbarcomponent'
import Truck from './Truck';
import SUV from './SUV';
import Sedan from './Sedan';
import { createContext } from 'react'; //creates context
import * as React from "react";




          
  
// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }



 




export const AutoContext = createContext()
export const TruckContext = createContext()


function App() {
  const [auto, setAuto] = useState('BMW')


  

  

  return (
   <>
   <div>
   {/* <AutoContext.Provider value = {"Mileage"}>
   <Truck/>
    <Sedan/>
    <SUV/>
  </AutoContext.Provider>  */}
  

  <Navbarcomponent/>
    </div>
   {/* <CarCards /> */}
   
   

     {/* <TruckContext.Provider value ={"PickUp "}>
    </TruckContext.Provider>  */}

    {/* {/<SUVContext.Provider value ={""}>
      
    </SUVContext.Provider> */}

   </>
  );
}

export default App;

