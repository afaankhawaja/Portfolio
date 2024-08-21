import React from 'react'
import Introduction from './Introduction'
import About from './About'
import {BrowserRouter, Routes, Route ,Link} from 'react-router-dom'

const Content = () => {
  return (
    <>
    <BrowserRouter>
    <div className='w-full no-repeat object-cover h-full'>
        <div className='my-64 mx-24'>
        <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="/home" element={<Introduction />} />

      <Route path="/about" element={<About />} />
    </Routes>
        </div>
    </div>
    </BrowserRouter>
    </>
  )
}

export default Content