import React from 'react'
import {FaCss3, FaHtml5, FaJs, FaReact} from 'react-icons/fa';

function Expertise() {
  return (
    <div id="Expertise" className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Expertise</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color='#E34F26' size={50}/>
        </span>
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color='blue' size={50}/>
        </span>
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color='yellow' size={50}/>
        </span>
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color='#52B2CF' size={50}/>
        </span>
        </div>
      </div>
    </div>
  )
}

export 
default Expertise
