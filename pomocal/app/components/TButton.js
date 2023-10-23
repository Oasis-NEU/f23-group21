import React from "react";
{
  /* bg-[#F1F1F1] hover:bg-[#ff865b] */
}

export const TButton = () => {
  return (
    <div className="h-1/5 w-full flex justify-center pt-2.5">
      <button
        className="
                    box-border h-1/2 w-5/12 
                    transition transition ease-in-out delay-50 bg-[#F1F1F1] hover:scale-105 hover:bg-[#ff865b] duration-100
                    drop-shadow-xl
                    text-center 
                    rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md
                    text-black hover:text-white
                    border-2 border-[#ff865b] hover:border-gray-500"
      >
        <h1
          className="
                            text-2xl
                            font-inter
                            font-bold"
        >
          <center>Start/Stop</center>
        </h1>
      </button>
    </div>
  );
};

export const SkipButton = () => {
  return (
    <div className="h-1/5 w-full flex justify-center pt-2.5">
      <button
        className="
                    box-border h-1/2 w-5/12 
                    transition transition ease-in-out delay-50 bg-[#F1F1F1] hover:scale-105 hover:bg-[#ff865b] duration-100
                    drop-shadow-xl
                    text-center 
                    rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md
                    text-black hover:text-white
                    border-2 border-[#ff865b] hover:border-gray-500"
      >
        <h1
          className="
                            text-2xl
                            font-inter
                            font-bold"
        >
          <center>Skip</center>
        </h1>
      </button>
    </div>
  );
};
