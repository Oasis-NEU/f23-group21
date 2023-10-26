import React from "react";
import { useState, useEffect } from 'react';
import { useCountdown } from './Countdown';
{
  /* bg-[#F1F1F1] hover:bg-[#ff865b] */
}

export const TButton = ({ toggleCountdown }) => {
  return (
    <div className="h-full w-full flex justify-center pt-5">
      <button onClick={() => toggleCountdown(1500)}
        className="
                    box-border h-full w-5/6
                    transition ease-in-out delay-50 bg-[#F1F1F1] hover:scale-105 hover:bg-darkgreen duration-100
                    hover:drop-shadow-[0_8px_0px_#071104] 
                    drop-shadow-[0_1px_3px_lightgrey] 
                    text-center 
                    rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md
                    hover:text-white"
                    >
        <h1
          className="text-4xl
                      font-inter
                      font-bold"> 
                      <center>
                        Start
                      </center>
        </h1>
      </button>
    </div>
  );
};

export const SkipButton = ({ NextButton }) => {
  return (
    <div className="h-full w-full flex justify-center pt-5">
      <button onClick={() => NextButton ()}
        className="
                  box-border h-full w-5/6
                  transition ease-in-out delay-50 bg-[#F1F1F1] hover:scale-105 hover:bg-darkgreen duration-100
                  hover:drop-shadow-[0_8px_0px_#071104] 
                  drop-shadow-[0_1px_3px_lightgrey] 
                  text-center 
                  rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md
                  text-black hover:text-white"
      >
        <h1
          className="
                            text-4xl
                            font-inter
                            font-bold"
        >
          <center>Next</center>
        </h1>
      </button>
    </div>
  );
};
