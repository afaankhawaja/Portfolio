import React from 'react'
import Skills from './Skills'
import CareerGoals from './CareerGoals'

const About = () => {
  return (
    <div>
      <div className='text-3xl font-bold text-blue-400 -mt-52 -ml-8 py-2 text-center'>About Me</div>
      <div className='text-white mt-6 pl-10 mb-2'>"I am a React Developer with a focus on delivering high-quality, scalable web applications. My journey began with a Bachelor’s degree in Computer Science, where I developed a strong interest in web development, particularly in the MERN stack."</div>
      <CareerGoals/>
    <Skills/>
    
    </div>
  )
}

export default About