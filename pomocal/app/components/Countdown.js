import { useState, useEffect } from 'react';

//creates the countdown, and mechanisms to change the current countdown status
export function useCountdown() {
    const[secondsLeft, setSecondsLeft] = useState(1500);
    const [isPaused, setIsPaused] = useState(true); //isPaused is the current state, setIsPaused is the state we want to change into
    const [count, setCount] = useState(3); // Use state to track the count, setcount is function that changes count


    useEffect(() => {
        if (secondsLeft <= 0 || isPaused) return;

        const timeout = setTimeout(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000)

        return () => clearTimeout(timeout);
    }, [secondsLeft, isPaused]);

    function start(seconds) {
        setSecondsLeft(seconds);
    }

    function pause() {
        setIsPaused(true);
    }

    function resume() {
        setIsPaused(false);
    }

    function skip() {
        console.log('Current count:', count);
        if (count % 2 == 1) {
        setSecondsLeft(300); 
        setIsPaused(true);
        setCount(count + 1); //updates count by 1 to alternate between the 25 and 5 mins
        }
        else {
            setSecondsLeft(1500); 
            setIsPaused(true);
            setCount(count + 1);
        }
    }
    
    function togglepause(){
        setIsPaused((prevIspaused) => !prevIspaused);
    }

    const minutes = Math.floor(secondsLeft / 60); //floor value to the nearest minute
    const seconds = secondsLeft % 60 //calculate the leftover current second

    return { minutes, seconds, start, pause, resume, skip, togglepause };
}

