import useTimer from "./useTimer";

// uses Custom hook : useTimer
function CountDown2() {
    
    const TOTAL_TIME = 5;
    const [ isRunning, start, stop, seconds ] = useTimer(TOTAL_TIME);
    
    return (
        <div>
            {isRunning ? (
                <p>{seconds}</p>
            ) : <p>No Timer Running</p>
            }
            <button className="btn btn-primary" onClick={start}>Start</button>
            <button className="btn btn-secondary" onClick={stop}>Stop</button>
        </div>
    );
}


export default CountDown2;