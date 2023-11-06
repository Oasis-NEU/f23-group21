import React from 'react';
import { useState } from 'react';
import { BiSolidUpArrow } from 'react-icons/bi'

export const SessionButtonUp = () => {
    return (
        <div>
            <button
            className="box-border h-[4rem] w-1/4
                  transition ease-in-out delay-50 bg-[#F1F1F1] hover:scale-105 hover:bg-darkgreen duration-100
                  drop-shadow-[0_0px_2px_black] 
                  text-center 
                  rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md
                  text-black hover:text-white
                  resize"> 
                    <div className="flex w-full justify-center">
                        <BiSolidUpArrow />
                    </div>
            </button>
        </div>
        
    );
};