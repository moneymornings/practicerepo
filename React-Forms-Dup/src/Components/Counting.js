import React, {useState, useEffect} from 'react'// add your hook
//building a counter function component

function Counting ()  { //create function
  const [count, setCount] = useState(0);//initializes use state to start at 0// must provide a default value in useState





function Increase(){ //create function for our Increase button 
  setCount(count + 1)//updates the  count increment - sets count to whatever you manipulate with count
}

function Decrease(){//create function for our Decrease button 
  setCount(count - 1)//updates the count in decrement
}


 //adding Use Effect - will log in console every time count is run 
 useEffect(() => {
  //the code we will run 
  console.log('The count is:', count);

  //optional return function - Whenever something in the dependency array changes, the UseEffect hook will
                              //destroy itself and it will run this clean up function before doing so, 
                              // then its gong to be recreated with a new value.
                              //this is how useEffect is able to log the new value everytime
                              //its being updated, because its being destroyed then cleaning up 
                              //after itself, then rerunning with the new value
  return() => {
    console.log("I am being cleaned up!");
  }

 }, [count]);//the dependency array - this is used to tell UseEffect what it should listen to & what variables it 
        //it shouhld react, meaning you need to add your variable into this array for it to run
        //in this case it is count


    
  return ( //count below is creating the the current state of the count 
    <> 
    <h1>Functional Based Component - Counter</h1>
    <p> Count: {count}</p> 
    <button onClick = {Increase} >Increase </button>
    <button onClick ={Decrease} > Decrease</button>
    </>
  )
}

export default Counting //export default + name of function 