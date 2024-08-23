import React from 'react'

const Skills = () => {
  return (
    <div>
        <section id="skills" className="w-full">
  <h2 className="text-2xl md:text-3xl md:text-center -mx-14 font-bold mb-6 text-blue-400">Skills <span >& </span>Strengths</h2>
  
  <div className="flex flex-col w-36 space-y-6 -ml-6 md:w-full md:ml-0" >
    {/* React */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">React</span>
        <span className="text-sm font-light text-gray-300">85%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
      </div>
    </div>

    {/* Redux Toolkit */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">Redux Toolkit</span>
        <span className="text-sm font-light text-gray-300">80%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
      </div>
    </div>

    {/* MongoDB */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">JavaScript</span>
        <span className="text-sm font-light text-gray-300">80%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '80%' }}></div>
      </div>
    </div>

    {/* Tailwind CSS */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">Tailwind CSS</span>
        <span className="text-sm font-light text-gray-300">80%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '80%' }}></div>
      </div>
    </div>

    {/* Communication Skills */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">Communication</span>
        <span className="text-sm font-light text-gray-300">80%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div className="bg-red-600 h-2 rounded-full" style={{ width: '80%' }}></div>
      </div>
    </div>

    {/* Adaptability */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">Adaptibility</span>
        <span className="text-sm font-light text-gray-300">85%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Skills