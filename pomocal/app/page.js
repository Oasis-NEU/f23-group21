"use client"
import Sidebar from './components/Sidebar';
import { useState, useEffect } from 'react';



export default function Home() {
  return (
    <div className="flex-col">
      <Sidebar/>
      <main>
        <div className="flex-row h-full w-full justify-center items-center">
          <center>
            <div className="flex justify-center items-center">
              <iframe src="https://calendar.google.com/calendar/embed?src=15e4039ca6256b3d89ab6763acca421e69275afa324f25dafdbd2567ac5cb97c%40group.calendar.google.com&ctz=America%2FNew_York" 
              style={{ background: "#E8CEB5", width: "50vw", height: "80vh"}}
              className="
                        filter -hue-rotate-180
                        border
                        border-white
                        border-[15px]
                        
                        rounded-md
                        saturate-50
                        mt-14"></iframe> 
            </div>
          </center>      
        </div>
      </main>
    </div>  
  )
}
