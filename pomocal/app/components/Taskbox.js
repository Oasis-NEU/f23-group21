import React from 'react';
import { useState } from 'react';
import MyModal from "./taskmodal";


export const Addtask = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      }


      const closeModal = () => {
        setIsModalOpen(false);
      }

    return (
        <div>
<button onClick={openModal} 
        className="box-border h-[4rem] w-full
                  transition ease-in-out delay-50 bg-[#F1F1F1] hover:scale-105 hover:bg-darkgreen duration-100
                  drop-shadow-[0_1px_3px_lightgrey] 
                  text-center 
                  rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md
                  text-black hover:text-white">
            add task</button>
            <MyModal isOpen={isModalOpen} closeModal={closeModal} />
            </div>
    )
}

export const Tasktemp = () => {
    return (
<button className="box-border h-[4rem] w-full
                  transition ease-in-out delay-50 bg-[#F1F1F1] hover:scale-105 hover:bg-darkgreen duration-100
                  drop-shadow-[0_1px_3px_lightgrey] 
                  text-center 
                  rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md
                  text-black hover:text-white
                  resize">
            Task template </button>
    )
}
