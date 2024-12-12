import React from 'react'
import ProjectCard from './ProjectCard'
import ProBlogImg from '../../assets/ProBlog_Img.jpg'
import Event_Management_Img from '../../assets/Event_Management_Img.jpg'
import Currency_Converter_Img from '../../assets/Currency_Converter_Img.jpg'

function Projects() {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold '>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <ProjectCard title="Text Editor Website" main="A text editor website to manupulate texts for free" img={ProBlogImg}/>
            <ProjectCard title="Event Management Website" main="A Event Management Website for searching events on a particular time.
            build with react" img={Event_Management_Img}/>
             <ProjectCard title="Currency Converter" main="Currency Converter Website using currency API and Javascript" img={Currency_Converter_Img}/>
        </div>
    </div>
  )
}

export default Projects
