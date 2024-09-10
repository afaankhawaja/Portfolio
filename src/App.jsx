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
    <div className="md:mx-2 md:my-2 grid grid-cols-12 grid-rows-12 gap-y-5">
        <div className="row-span-9 row-start-1 col-span-3 md:border-4 border-gray-400 rounded md:mr-1"><Sidebar className="h-full"/></div>
        <div className="row-span-9 col-span-9 bg-gray-800 md:border-2 border-gray-400 rounded">

    <div className='w-full no-repeat object-cover h-full'>
        <div className='my-64 md:mx-24 mx-20'>
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

