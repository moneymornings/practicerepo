import  React, { useState }  from 'react';

function Operation({value}){

    // function Multiplication({value}) {
      const [calculation, setCalculation] = useState('*');
     
  
      function handleClick() {
          setCalculation(eval(1 * 2))
      }
      
  
    return (
      <>
          <button 
          className='square'
          onClick={handleClick}
          >
          {calculation}
          </button> 


          
      </>
      
    )
  }




    

    



export default Operation;