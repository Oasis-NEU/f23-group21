import React from 'react';
import { useState } from 'react';
import { BiSolidUpArrow } from 'react-icons/bi'
import { BiSolidDownArrow } from 'react-icons/bi'


export function useCurrentCount() {
    const [currentCount, setCurrentCount] = useState(1);

    function add1() {
        setCurrentCount(prevCount => prevCount  + 1);
    }

    function sub1() {
        if (currentCount > 1) {
            setCurrentCount(prevCount => prevCount - 1);
        }
    }

    return { currentCount, add1, sub1 };
    
}

export const SessionButtonUp = ({ add1 }) => {
    const handleClick = () => {
        add1();
    };
    
    return (
            <button 
            className="box-border h-[4rem] w-1/5
            transition ease-in-out delay-50 bg-[#f1f1f1] 
            hover:scale-105 hover:shadow-[0px_7px_0px_0px_#c1c1c1] duration-100
            shadow-[0px_10px_0px_0px_#c1c1c1]
            active:shadow-[0px_0px_0px_0px_#c1c1c1]
            active:translate-y-2
            text-center 
            rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md
            text-black
            resize"
                  onClick={handleClick}> 
                    <div className="flex w-full justify-center px-6">
                        <BiSolidUpArrow />
                    </div>
            </button>
     
        
    );
};


export const SessionButtonDown = ({ sub1 }) => {
    const handleClick = () => {
        sub1();
    };

    return (
            <button
            className="box-border h-[4rem] w-1/5
                  transition ease-in-out delay-50 bg-[#f1f1f1] 
                  hover:scale-105 hover:shadow-[0px_7px_0px_0px_#c1c1c1] duration-100
                  shadow-[0px_10px_0px_0px_#c1c1c1]
                  active:shadow-[0px_0px_0px_0px_#c1c1c1]
                  active:translate-y-2
                  text-center 
                  rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md
                  text-black
                  resize"
                  onClick={handleClick}> 
                    <div className="flex justify-center px-6">
                        <BiSolidDownArrow />
                    </div>
            </button>
    );
};



export const SessionText = () => {
    const { currentCount, add1, sub1 } = useCurrentCount();

    return (
     
        <div>
            <div className='pb-3 pt-5 text-xl font-inter font-bold '>
                Estimated Completion Time
            </div>
            <div className="space-x-4">
             {/* <label className="pb-4" > {currentCount}    </label> <br />
            <input type="text" placeholder={`${currentCount} Session`} name="task name" className="mt-2 border-2 border-solid rounded-lg border-black/25 px-4 py-2 w-1/3" /> */}
            <div className="text-xl inline-block p-6 rounded-[10px] bg-[#F1F1F1]">{currentCount}</div>
            <SessionButtonUp add1={add1} /> <SessionButtonDown sub1={sub1} />
            </div>
        </div>
    );
};


