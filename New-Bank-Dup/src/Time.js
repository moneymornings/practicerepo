import { useState, useEffect } from "react";

function App() {
    //Created a variable for Time, and Updated Time 
  const [time, setTime] = useState(new Date());//initializes use state with the current date and time using the Date object

  useEffect(() => {// setting up a timer for updating the clock.
    function refreshClock() { //created a function to refreshClock which updates the time state variable with the current date and time
      setTime(new Date());
    }
    const timerID = setInterval(refreshClock, 1000);//sets timer using the setInterval function, calls the refresh clock function every 1 second to update the clock 
    return function cleanup() { // The cleanup function clears the interval timer and stops it from 
    };
  }, [setTime]);// The  will re-run the effect (re-create the interval timer) only if the dependencies listed here (setTime) change.

  return <span>Time : {time.toLocaleTimeString()}</span>;//It renders a <span> element containing the text "Time :" followed by the current time formatted using the toLocaleTimeString method on the time state variable.
}

export default App;