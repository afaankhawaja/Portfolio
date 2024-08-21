import React from 'react'

const Skills = () => {
  return (
    <div>
        <section id="skills" className="pl-10">
  <h2 className="text-3xl font-bold mb-6 text-blue-400 text-center">Skills & Strengths</h2>
  
  <div className="space-y-4">
    {/* React */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-lg font-medium text-gray-300">React</span>
        <span className="text-sm font-light text-gray-300">85%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
      </div>
    </div>

    {/* Redux Toolkit */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-lg font-medium text-gray-300">Redux Toolkit</span>
        <span className="text-sm font-light text-gray-300">80%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
      </div>
    </div>

    {/* MongoDB */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-lg font-medium text-gray-300">JavaScript</span>
        <span className="text-sm font-light text-gray-300">80%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '80%' }}></div>
      </div>
    </div>

    {/* Tailwind CSS */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-lg font-medium text-gray-300">Tailwind CSS</span>
        <span className="text-sm font-light text-gray-300">80%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '80%' }}></div>
      </div>
    </div>

    {/* Communication Skills */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-lg font-medium text-gray-300">Communication Skills</span>
        <span className="text-sm font-light text-gray-300">80%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div className="bg-red-600 h-2 rounded-full" style={{ width: '80%' }}></div>
      </div>
    </div>

    {/* Adaptability */}
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-lg font-medium text-gray-300">Adaptibility</span>
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