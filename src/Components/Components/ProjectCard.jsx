import React from 'react'


function ProjectCard({title,main,img}) {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
      <img className='p-4' src={img} alt=''/>
      <h3 className='px-4 text-xl font-bold leading-normal'>
      {title}  
      </h3>
      <p className='px-4 text-sm md:text-md leading-tight py-2'>{main}</p>
      <div className="mt-2 p-2 flex gap-2 md:gap-4">
       </div>  
    </div>
  )
}

export default ProjectCard
