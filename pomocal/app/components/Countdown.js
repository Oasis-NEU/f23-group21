import { useState, useEffect } from 'react';


//creates the countdown, and mechanisms to change the current countdown status
export function useCountdown() {
    const[secondsLeft, setSecondsLeft] = useState(1500);
    const [isPaused, setIsPaused] = useState(true); //isPaused is the current state, setIsPaused is the state we want to change into
    
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

    function skip(seconds) {
        setSecondsLeft(seconds);
        setIsPaused(true);
    }
    
    function togglepause(){
        setIsPaused((prevIspaused) => !prevIspaused);
    }

    const minutes = Math.floor(secondsLeft / 60); //floor value to the nearest minute
    const seconds = secondsLeft % 60 //calculate the leftover current second

    return { minutes, seconds, start, pause, resume, skip, togglepause };
}