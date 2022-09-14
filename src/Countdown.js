import { useEffect, useRef, useState } from "react";


// page loads with count-10 and count keeps decreasing by 1 for every second. 
// when count is 0, timer stops 
// Button click will add another 10 to count and timer resumes if already stopped
// Button click will remove the timer
function CountDown(props) {
    const [countdown, setCountdown] = useState(props.countStart);
    const intervalRef = useRef(0); // change in value -> no rerender

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCountdown(prevCount => {
                if (prevCount === 0) {
                    clearInterval(intervalRef.current);
                }
                else {
                    return prevCount - 1;
                }
            });
        }, 1000);

        return () => {
            clearInterval(intervalRef.current)
        }
    }, []);

    // not working when count is 0
    const handleAdd10 = () => {
        setCountdown(prevCount => prevCount + 10);
    }

    const handleRemoveTimer = () => {
        clearInterval(intervalRef.current);
    }

    return (
        <div>
            <p>{countdown}</p>
            <button className="btn btn-primary" onClick={handleAdd10}>Add 10</button>
            <button className="btn btn-secondary" onClick={handleRemoveTimer}>Remove Timer</button>
        </div>
    );
}

export default CountDown;

// read more: https://www.codementor.io/@damianpereira/how-to-use-clearinterval-inside-react-s-useeffect-and-why-it-is-important-1si7mztjlk