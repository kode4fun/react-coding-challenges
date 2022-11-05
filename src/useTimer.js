import { useRef, useState } from "react";


// Create a custom hook called useTimer that provides the following API
// const TOTAL_TIME = 5;
// const [ isRunning, start, stop, seconds ] = useTimer(TOTAL_TIME);
// 	• Show two buttons on the screen start & stop.
// 	• One button to start the timer. When the timer is running then show remaining seconds on the screen.
// Another button to stop the timer. When the timer stops/reaches to 0 then it resets to total time and shows “No Timer Running” on the screen.

function useTimer(startTime) {

    const [count, setCount] = useState(startTime);
    const timerRef = useRef(0);
    const [isRunning, setIsRunning] = useState(false);

    const start = () => {
        if(isRunning){
            // timer already running.. so clear existing
            clearInterval(timerRef.current);
            setCount(startTime);
        }
        timerRef.current = setInterval(()=> {
            setCount((prevCount) => {
                if(prevCount === 0){
                    clearInterval(timerRef.current);
                    setIsRunning(false);
                }
                else {
                    setIsRunning(true);
                    return prevCount - 1;
                }
            })
        },1000);
    }

    const stop = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
    }

    return [isRunning, start, stop, count];
}


export default useTimer;