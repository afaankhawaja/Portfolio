// import React from 'react'

// const CareerGoals = () => {
//   return (
//     <div>
//         <section id="career-goals" className="p-10 ">
//   <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Career Goals</h2>
  
//   <div className="relative">
//     <div className="absolute left-0 top-0 h-full w-1 bg-blue-600"></div>
    
//     <div className="pl-8">
//       <p className="mb-4 text-lg text-blue-100">
//         " My ultimate goal is to become a proficient full-stack developer who can tackle complex challenges and contribute to impactful projects. I aim to constantly improve my skills in both front-end and back-end development.
//       </p>

//       <p className="mb-4 text-lg text-blue-100">
//         In the short term, I am focused on mastering the Reactjs, particularly honing my skills in React and Next.js, and building responsive, user-friendly web applications.
//       </p>

//       <p className="mb-4 text-lg text-blue-100">
//         I also aspire to collaborate with like-minded professionals in a dynamic environment where I can contribute to meaningful projects and continue to grow as a developer. "
//       </p>
      
//     </div>
//   </div>
// </section>

//     </div>
//   )
// }

// export default CareerGoals

import React, { useState } from 'react';

const CareerGoals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="my-8 relative">
      <h2 className="sm:text-left sm:pl-10 text-3xl font-bold text-center mb-8 text-blue-400">Career Goals</h2>
      
      <div className="relative pl-10 ">
        <div className="absolute sm:left-6 left-0 top-0 h-full w-1 bg-blue-400"></div>
        
        <p className=" mb-4 text-lg text-blue-100">
          "My ultimate goal is to become a proficient full-stack developer who can tackle complex challenges and contribute to impactful projects..."
        </p>

        <button 
          onClick={toggleModal}
          className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          Read More
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="sm:w-1/2 bg-gray-800 p-8 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto transform translate-x-28">
            <h3 className=" text-2xl font-bold text-blue-400 mb-4">Career Goals</h3>
            <p className="mb-4 text-lg text-blue-100">
              "My ultimate goal is to become a proficient full-stack developer who can tackle complex challenges and contribute to impactful projects. I aim to constantly improve my skills in both front-end and back-end development.
            </p>
            <p className="mb-4 text-lg text-blue-100">
              In the short term, I am focused on mastering Reactjs, particularly honing my skills in React and Next.js, and building responsive, user-friendly web applications.
            </p>
            <p className="mb-4 text-lg text-blue-100">
              I also aspire to collaborate with like-minded professionals in a dynamic environment where I can contribute to meaningful projects and continue to grow as a developer."
            </p>
            <button 
              onClick={toggleModal}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerGoals;