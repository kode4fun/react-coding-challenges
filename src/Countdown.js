import React, { useEffect, useState } from "react";


// page loads with count-10 and count keeps increasing by 10 for every second. 
// Button click will add another 10 to count
function CountDown(props) {
   const [countdown, setCountdown] = useState(props.countStart);
   
   useEffect(()=> {
    const interval = setInterval(() => {
        setCountdown(countdown + 10);
    }, 1000)
    return () => {
        clearInterval(interval)
    }
   },[countdown]);

   const handleAdd10 = () => {
    setCountdown(countdown+ 10);
   }
   
   return (
    <div>
        <p>{countdown}</p>
        <button className="btn btn-primary"  onClick={handleAdd10}>Add 10</button>
    </div>
   );
}

export default CountDown;

// read more: https://www.codementor.io/@damianpereira/how-to-use-clearinterval-inside-react-s-useeffect-and-why-it-is-important-1si7mztjlk