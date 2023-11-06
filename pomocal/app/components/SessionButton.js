import React from 'react';
import { useState } from 'react';
import { BiSolidUpArrow } from 'react-icons/bi'
import { BiSolidDownArrow } from 'react-icons/bi'

export const SessionButtonUp = () => {
    return (
        <div>
            <button
            className="box-border h-[4rem] w-full
                  transition ease-in-out delay-50 bg-[#F1F1F1] hover:scale-105 hover:bg-darkgreen duration-100
                  border
                  border-black/25
                  text-center 
                  rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md
                  text-black hover:text-white
                  resize"> 
                    <div className="flex w-full justify-center px-6">
                        <BiSolidUpArrow />
                    </div>
            </button>
        </div>
        
    );
};


export const SessionButtonDown = () => {
    return (
        <div>
            <button
            className="box-border h-[4rem] w-full
                  transition ease-in-out delay-50 bg-[#F1F1F1] hover:scale-105 hover:bg-darkgreen duration-100
                  border
                  border-black/25
                  text-center 
                  rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md
                  text-black hover:text-white
                  resize"> 
                    <div className="flex w-full justify-center px-6">
                        <BiSolidDownArrow />
                    </div>
            </button>
        </div>
        
    );
};

export const SessionText = () => {
    return (
        <div>
            <label className="pb-4" >Estimated Sessions</label> <br />
            <input type="text" placeholder="1 Session" name="task name" className="mt-2 border-2 border-solid rounded-lg border-black/25 px-4 py-2 w-full" />
        </div>
    );
};
