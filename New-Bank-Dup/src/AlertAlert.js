import React, { useEffect, useState } from "react";
const AlertAlert = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const showPopupHandler = () => setShowPopUp(true);
  useEffect(() => {
     const timer = setTimeout(() => {
     setShowPopUp(false);
   }, 5000);
  return () => clearTimeout(timer);
  }, [showPopUp]);
  let popup = null;
  if(showPopUp) {
    popup = <AlertAlert />;
   }
return (
      <>
       {popup}
       <button onClick={showPopupHandler}>Show Pop-up</button>
      </>
  )
}
export default AlertAlert