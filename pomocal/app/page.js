"use client"
import Sidebar from './components/Sidebar';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


export async function deleteAllRows(tableName) {
  try {
    console.log('Deleting all rows from:', tableName);

    const { data, error } = await supabase
      .from('task-inputs')
      .delete()
      .neq('id', 0)

    console.log('API Response:', data, error);

    if (error) {
      throw error;
    }

    console.log(`All rows in '${tableName}' table deleted successfully.`);
  } catch (error) {
    console.error('Error deleting all rows:', error.message);
  }
}

export default function Home() {

    

  const GoogleCalendar = () => (
    <div>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=daoho2004%40gmail.com&ctz=America%2FNew_York"
        style={{ width: '50vw', height: '80vh', scrolling: 'no' }}
        className="
                          filter -hue-rotate-180
                          border
                          border-white
                          border-[15px]
                          
                          rounded-[0.5vw]
                          saturate-50 mt-14"
      />
    </div>
  );

  
  const LofiEmbed = () => {
    return (
      <div className="flex h-screen w-[66vw] items-center justify-center">
        <iframe className="w-full h-auto max-w-[50vw] max-h-[80vh] aspect-video rounded-[1vw]"  src="https://www.youtube.com/embed/jfKfPfyJRdk?si=0pEUtANlSgeAW7g9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
      </div>
    )
  }

 const [Board, setBoard] = useState(true);

  const StudyMusic = () => {
    return (
      <button 
      onClick={() => setBoard(false)}
            className="inline-flex px-[2vw] py-[1vw]
            transition ease-in-out delay-50 bg-[#f1f1f1] 
            hover:scale-105 hover:shadow-[0px_7px_0px_0px_#071104] duration-100
            hover:text-white hover:bg-[#555843]
            shadow-[0px_10px_0px_0px_#c1c1c1]
            active:shadow-[0px_0px_0px_0px_#c1c1c1]
            active:translate-y-2
            text-center 
            rounded-[1vw]
            text-black text-[1vw] font-bold text-inter
            resize">
              Study Music
            </button>
    )
  }
  const DeleteAll = () => {
    return (
      <a 
      onClick={() => { 
        deleteAllRows('task-inputs')}}
        href='/'
            className="inline-flex px-[2vw] py-[1vw]
            transition ease-in-out delay-50 bg-[#f1f1f1] 
            hover:scale-105 hover:shadow-[0px_7px_0px_0px_#071104] duration-100
            hover:text-white hover:bg-[#555843]
            shadow-[0px_10px_0px_0px_#c1c1c1]
            active:shadow-[0px_0px_0px_0px_#c1c1c1]
            active:translate-y-2
            text-center 
            rounded-[1vw]
            text-black text-[1vw] font-bold text-inter
            resize">
              Delete Tasks
            </a>
    )
  }

  const GoogleButton = () => {
    return (
      <button 
      onClick={() => setBoard(true)}
            className="inline-flex px-[2vw] py-[1vw]
            transition ease-in-out delay-50 bg-[#f1f1f1] 
            hover:scale-105 hover:shadow-[0px_7px_0px_0px_#071104] duration-100
            hover:text-white hover:bg-[#555843]
            shadow-[0px_10px_0px_0px_#c1c1c1]
            active:shadow-[0px_0px_0px_0px_#c1c1c1]
            active:translate-y-2
            text-center 
            rounded-[1vw]
            text-black text-[1vw] font-bold text-inter
            resize">
              Google Calendar
            </button>
    )
  }

  const LoginButton = () => {
    return (
      <Link href="/login"
        className="inline-flex px-[2vw] py-[1vw]
          transition ease-in-out delay-50 bg-[#f1f1f1] 
          hover:scale-105 hover:shadow-[0px_7px_0px_0px_#071104] duration-100
          hover:text-white hover:bg-[#555843]
          shadow-[0px_10px_0px_0px_#c1c1c1]
          active:shadow-[0px_0px_0px_0px_#c1c1c1]
          active:translate-y-2
          text-center 
          rounded-[1vw]
          text-black text-[1vw] font-bold text-inter
          resize">
          Login
      </Link>
    );
  };


  const TopBar = () => {
    return (
        <div className="flex h-[5vw] w-[67vw] items-center">
            <div className="pl-[1vw]">
            <LoginButton/>
            </div>
            <div className="inline-flex ml-auto pr-[9vw] space-x-[2vw] translate-y-[1vh]">
            <GoogleButton/> <StudyMusic/> <DeleteAll/>
            </div>
            
        </div>
    )
}

  return (
    <div className="flex-col">
      <div className="absolute float-top ">
        <TopBar />
      </div>
      <Sidebar/>
      <main>
        <div className="flex-row h-full w-full justify-center items-center">
          <center>
            <div className="flex h-screen justify-center items-center">
            {Board ? <GoogleCalendar /> : <LofiEmbed />}
            </div>
          </center>      
        </div>
      </main>
    </div>  
  )
}
