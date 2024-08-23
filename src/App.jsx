import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Introduction from './components/Introduction'
import About from './components/About'
import Resume from './components/Resume'
import Sidebar from './components/Sidebar'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <>
    <BrowserRouter>
    <div className="mx-2 my-2 grid grid-cols-12 grid-rows-12 gap-y-5">
        <div className="row-span-9 row-start-1 col-span-3 border-4 border-gray-400 rounded mr-1"><Sidebar className="h-full"/></div>
        <div className="row-span-9 col-span-9 bg-gray-800 border-2 border-gray-400 rounded">

    <div className='w-full no-repeat object-cover h-full'>
        <div className='my-64 mx-24'>
        <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="/home" element={<Introduction />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="/resume" element={<Resume />} /> 
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
      </div>
    </div>
    </div>
   </div>
    </BrowserRouter>  
    </>
  )
}

export default App

{/* <div className="mx-2 my-2 grid grid-cols-12 grid-rows-12 gap-y-5">
        <div className="row-span-9 row-start-1 col-span-3 border-4 border-gray-400 rounded mr-1"><Sidebar className="h-full"/></div>
        <div className="row-span-9 col-span-9 bg-gray-800 border-2 border-gray-400 rounded">

    <div className='w-full no-repeat object-cover h-full'>
        <div className='my-64 mx-24'></div> */}