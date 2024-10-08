import React from 'react'
import mysvg from '../assets/images/mysvg.svg'
import {motion} from 'framer-motion'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Introduction = () => {
    const [text]=useTypewriter({
        words:['A Web Developer','A React Developer', 'An Aspiring Next.js Developer','An Aspiring full stack developer'],
        loop: true,
    })
  return (
    <div><img
    src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png' 
      alt="Profile"
      className="lg:hidden scale-150 mb-20 rounded-full border-2 border-white object-cover -mt-28"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    />
    <div className='-mx-4 lg:grid lg:grid-cols-3 lg:grid-rows-9'>
      <div className='lg:col-span-2 lg:row-span-8'>
    <div className='text-3xl text-blue-400 font-bold font-mono my-14'>Welcome to my portfolio,</div>
    <div className='text-2xl text-blue-200 font-mono mb-4'>Hi , I am </div> 
    <span className='font-mono text-yellow-500 text-3xl hover:text-4xl'> Afaan </span><span className='font-mono text-blue-200 text-3xl'>Ahmad</span>
    <div className='sm:text-xl sm:my-4 mt-4 text-2xl text-white font-mono'><span className='bold text-yellow-200 font-bold underline underline-offset-8 hover:underline-offset-4'> {text}</span><Cursor cursorColor='blue' cursorStyle='|'/></div>
   </div> 
   <div className='col-span-1 row-span-8'>
<img className='lg:mt-20 mt-10 lg:scale-150 scale-110 sm:-ml-6' src={mysvg} alt=''></img>
   </div>
   </div>
   </div>
  )
}

export default Introduction