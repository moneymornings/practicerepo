import React, {useState} from 'react'

function BirthdayCounter() {
  const [count, setCount] = useState(0);

  function Increase(){
    setCount(count, +1)

  }





  return (
    <div>
    <h3> Attendees </h3>
    <p> Count: {count}</p> 


    
    
    </div>
  )
}

export default BirthdayCounter