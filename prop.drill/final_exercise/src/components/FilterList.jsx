import React, {useState}from 'react'
import { foods, filterItems } from "../data.js";
import Searchbar from './Searchbar.jsx';

function FilterList() {

const [query, setQuery] = useState


const restults

function handleChange(e)

setQurry

  return (
    <div>
    <Searchbar query={query} onChange={handleChange}/>
    <List items={results}

    </div>
  )
}

export default FilterList
