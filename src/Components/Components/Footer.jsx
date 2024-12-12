import React from 'react'
import { FaGithub, FaPhone } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

function Footer() {
  return (
    <div id='Footer'
    className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel Free to reach out</h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className='flex gap-1 items-center'>
            <MdOutlineEmail size={20}/>
            pranoydera@gmail.com
        </li>
        <li className='flex gap-1 items-center'>
            <FaGithub />
            github.com/PranoyDera
        </li>
        <li className='flex gap-1 items-center'>
            <FaPhone />
            8240514868
        </li>
      </ul>
    </div>
  )
}
export default Footer
