import React from "react";
import { useCountdown } from './Countdown';
import { useState, useEffect } from 'react';
import { TButton } from "./TButton";
import { SkipButton } from "./TButton";
import { Addtask } from "./Taskbox"
import { createClient } from '@supabase/supabase-js';
import { deleteAllRows } from '../page'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);




export const Timerbox = () => {
  const { minutes, seconds, start, pause, resume, skip, togglepause } = useCountdown();
  const [taskNames, setTaskNames] = useState([]);

   useEffect(() => {
    const fetchLatestTaskNames = async () => {
      try {
        const { data, error } = await supabase
          .from('task-inputs') 
          .select('taskName', 'timeadded')
          .order('timeadded', { ascending: false }) 

        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          const latestTaskNames = data.map((entry) => entry.taskName);
          setTaskNames(latestTaskNames);
        }
      } catch (error) {
        console.error('Error fetching latest taskNames:', error.message);
      }
    };

    // Call the function to fetch the latest taskNames when the component mounts
    fetchLatestTaskNames();
  }, [taskNames]); // Re-fetch when taskNames changes

  const handleDeleteAll = async () => {
    await deleteAllRows('task-inputs');
    // Re-fetch task names after deletion
    fetchLatestTaskNames();
  };

  const Tasktemp = () => {
    return (
      <div className="space-y-[2.5vh]">
        {taskNames.map((taskName, index) => (
          <button
            key={index}
            className="box-border h-[4rem] w-full transition ease-in-out delay-50 bg-[#F1F1F1]  duration-100 drop-shadow-[0_1px_3px_lightgrey] text-center rounded-[2vw] text-black resize "
          >
            {taskName || "task template"}
          </button>
        ))}
      </div>
    );
  };



  
  return (
    <div
      className="
            box-border w-full h-screen"
    >
      <div className="flex-row h-1/3">
        <div
          className="box-border h-4/6 w-full flex justify-center"
        >
          <div
            className="
                    box-border h-full w-5/6 
                    bg-darkgreen
                    text-center 
                    rounded-[3vw]
                    text-white"
          >
            <div className="flex box-border h-full items-center justify-center">
              <h1
                className="text-[7vw] font-inter font-bold"
              >
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
              </h1>
            </div>
          </div>
        </div>

        <div className="box-border h-2/6 w-full flex justify-center">
          <div className="flex h-full w-5/6 justify-center">
            <TButton toggleCountdown={ togglepause } />
            <SkipButton NextButton ={ skip } />
          </div>
        </div>
      </div>

      <div className="box-border h-full w-full flex justify-center pt-5">
        <div className="flex-row h-full w-5/6 space-y-[2.5vh]">
          <Addtask/>
          <Tasktemp/>
        </div>
      </div>
    </div>
  );
};

{
  /* export default Timerbox; */
}
