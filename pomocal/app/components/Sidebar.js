import React from 'react';
import Timerbox from './TimerBox';


const Sidebar = () => {
    return (
        <div className="
        float-right 
        box-border h-screen w-1/3 
        bg-white 
        text-center 
        rounded-tl-lg rounded-bl-lg 
        px-2.5 pt-5">
            <Timerbox/>
        </div>
    )
}

export default Sidebar;