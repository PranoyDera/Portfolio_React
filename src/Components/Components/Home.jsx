import React from 'react'
import image from '../../assets/Passport_Img.jpeg'
import TextChange from '../../TextChange'

function Home() {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
      <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'><TextChange/></h1>
      <p className="text-sm md:text-2xl tracking-tight">A passionate frontend developer with a keen eye for detail and user experience, 
        dedicated to crafting visually appealing and highly functional websites using the latest technologies like HTML, CSS, JavaScript, 
        and popular frameworks like React.
        </p>
        <a href="#Footer">
  <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4
      hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
    Contact Me
  </button>
</a>

      </div>
      <div><img className='w-2/3 ml-30' src={image} alt="" /></div>
    </div>
  )
}

export default Home
