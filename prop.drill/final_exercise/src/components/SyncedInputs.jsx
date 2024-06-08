import React, {useState} from 'react';



function SyncedInputs () {
 
    const [input, setInput] = useState('');


  function Clear(){

    setInput('') 
  };


  return (
    
    <div>
    <form >
      <label> Input 1: </label>
      <input
        type ="text"
        name  ="input1"
        value = {input}
        onChange= {(e)=> {
          setInput(e.target.value)
        }}
      />

      <label> Input 2: </label>
      <input
        type ="text"
        name  ="input2"
        value = {input}
        onChange= {(e)=> {
          setInput(e.target.value)
        }}
      />  

      <button onClick={Clear}>Clear</button>
    </form>

        

      
    </div>
  )
}

export default SyncedInputs