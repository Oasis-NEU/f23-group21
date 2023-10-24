import React from "react";
import { TButton } from "./TButton";
import { SkipButton } from "./TButton";

export const Timerbox = () => {
  return (
    <div
      className="
            box-border w-full h-screen"
    >
      <div className="flex-row h-1/3 border">
        <div
          className="box-border h-4/6 w-full flex justify-center
        border"
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

        <div className="box border h-2/6 w-full flex justify-center">
          <div className="flex h-full w-5/6 justify-center">
            <TButton />
            <SkipButton />
          </div>
        </div>
      </div>

      <div className="box-border h-2/3 w-full flex justify-center pt-5">
        <div className="flex-row h-full w-5/6 border ">
          <div className="box-border h-1/6 w-full border">placeholder</div>
        </div>
      </div>
    </div>
  );
};

{
  /* export default Timerbox; */
}
