import React, { useContext } from 'react'
import { WordContext } from './Wordbank'

function Guess() {
    // Bringing in the context values from the parent component
    // which is Wordbank
    const hangmanLetter = useContext(WordContext)

  return (
    <div>
        <p>
        First letter: { hangmanLetter }
        </p>
    </div>
  )
}

export default Guess