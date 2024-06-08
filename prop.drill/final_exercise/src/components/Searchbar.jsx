import React from 'react'
import { useState } from 'react';



function Searchbar({query,onChange}) {//query and update whats being typed 
        const [searchInput,setSearchInput] = useState('');
      
    


  return (
    <div>
    <label> Search Bar: </label>
    <input
    type="search"
    placeholder="Search Here"
    //  value ={searchInput}
    // onChange ={e=> setSearchInput(e.target.value)}
   
    />
  </div>
  )
}

export default Searchbar