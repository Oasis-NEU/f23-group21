import React from "react";
import { TButton } from "./TButton";
import { SkipButton } from "./TButton";

export const Timerbox = () => {
  return (
    <div
      className="
            box-border w-full h-screen flex-row"
    >
      <div className="h-1/4 w-full flex justify-center">
        <div
          className="
                    box-border h-full w-5/6 
                    bg-[#ff865b]
                    drop-shadow-xl
                    text-center 
                    rounded-tl-lg rounded-bl-lg rounded-tr-lg rounded-br-lg
                    text-white"
        >
          <div className="flex box-border h-full items-center justify-center">
            <h1
              className="
                            text-9xl
                            font-inter
                            font-bold"
            >
              24:56
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-col h-full w-full">
        <TButton />
        <SkipButton />
      </div>
    </div>
  );
};

{
  /* export default Timerbox; */
}
