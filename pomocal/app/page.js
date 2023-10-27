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
            <h1>Pomocalendar Project</h1>
            <p>The pomodoro technique is a time management method involving working on tasks for 25 minutes followed by 5 minutes of break </p> 
            <div className="pt-10">
              <iframe src="https://calendar.google.com/calendar/embed?src=15e4039ca6256b3d89ab6763acca421e69275afa324f25dafdbd2567ac5cb97c%40group.calendar.google.com&ctz=America%2FNew_York" 
              style={{background:"#E8CEB5"}} width="1000" height="800" 
              className="hover:drop-shadow-[0_1px_5px_#071104] "></iframe> 
            </div>
          </center>      
        </div>
      </main>
    </div>  
  )
}
