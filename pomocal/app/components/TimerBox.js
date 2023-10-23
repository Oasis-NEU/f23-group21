import React from 'react';



const Timerbox = () => {
    return (
            <div className="
                flex h-full justify-center">
                <div className="
                    box-border h-1/4 w-5/6 
                    bg-[#ff865b]
                    drop-shadow-xl
                    text-center 
                    rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg
                    text-white">
                    <div className="flex box-border h-full items-center justify-center">
                        <h1 className="
                            text-9xl
                            font-inter
                            font-bold">24:56</h1> 
                    </div>
                </div>
            </div>
    )
}

export default Timerbox;