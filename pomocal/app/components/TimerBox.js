import React from "react";
import { useCountdown } from './Countdown';
import { useState, useEffect } from 'react';
import { TButton } from "./TButton";
import { SkipButton } from "./TButton";
import { Addtask } from "./Taskbox"
import { Tasktemp } from "./Taskbox"

{/* const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60); //formats the current count to the nearest second
  const remainingSeconds = seconds % 60; 
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
return formattedTime; 
};*/}

export const Timerbox = () => {
  const { minutes, seconds, start, pause, resume, skip, togglepause } = useCountdown();

 

  return (
    <div
      className="
            box-border w-full h-screen"
    >
      <div className="flex-row h-1/3">
        <div
          className="box-border h-4/6 w-full flex justify-center"
        >
          <div
            className="
                    box-border h-full w-5/6 
                    bg-darkgreen
                    text-center 
                    rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg
                    text-white"
          >
            <div className="flex box-border h-full items-center justify-center">
              <h1
                className="text-9xl font-inter font-bold"
              >
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
              </h1>
            </div>
          </div>
        </div>

        <div className="box-border h-2/6 w-full flex justify-center">
          <div className="flex h-full w-5/6 justify-center">
            <TButton toggleCountdown={ togglepause } />
            <SkipButton skipCountdown ={ skip } />
          </div>
        </div>
      </div>

      <div className="box-border h-full w-full flex justify-center pt-5">
        <div className="flex-row h-full w-5/6">
          <Addtask/>
          <div className="pt-5">
          <Tasktemp/>
          </div>

          <div className="pt-5">
          <Tasktemp/>
          </div>

          <div className="pt-5">
          <Tasktemp/>
          </div>

          <div className="pt-5">
          <Tasktemp/>
          </div>

          <div className="pt-5">
          <Tasktemp/>
          </div>

          <div className="pt-5">
          <Tasktemp/>
          </div>
          

        </div>
      </div>
    </div>
  );
};

{
  /* export default Timerbox; */
}
