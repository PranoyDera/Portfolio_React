import React from 'react'
import AboutImg from '../../assets/About_Img.jpg'
import {IoArrowForward} from 'react-icons/io5';

function About() {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl
    mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
    <div>
        <h2 className='ml-48 text-2xl md:text-4xl font-bold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
            <img className='mr-20 md:h-80' src={AboutImg} alt='About Image'/>

            <ul>
                <div className='flex gap-3 py-4'>
                 <IoArrowForward size={30} className='mt-1' />

                 <span className='w-96'>
                    <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                    <p className="text-sm md:text-md leading-tight">
                       Have Expertise in Frontend Technologies like HTML,CSS,TailWindCSS,Bootstrap,JavaScript and React.
                       Build Some Small frontend based projects using html,css,JavaScript and ReactJS.
                    </p>
                 </span>
                </div>
                <div className='flex gap-3 py-4'>
                 <IoArrowForward size={30} className='mt-1' />

                 <span className='w-96'>
                    <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Problem Solving Skill</h1>
                    <p className="text-sm md:text-md leading-tight">
                       Have advanced problem solving and DSA skill in C.
                       Decent expertise in JAVA,Python and C++.
                    </p>
                 </span>
                </div>
            </ul>
        </div>
    </div>  
    </div>
  )
}

export default About
