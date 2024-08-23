import React from 'react';
import { FaLink } from 'react-icons/fa';

const ProjectCard = ({ title, imageUrl, projectUrl }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="relative group">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute  inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            <FaLink className="text-white text-4xl" />
          </a>
        </div>
      </div>
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: 'To Do List',
      imageUrl: 'https://cdn.pixabay.com/photo/2021/09/20/08/55/checklist-6640235_1280.png',
      projectUrl: 'https://to-do-app-nine-topaz.vercel.app/',
    },
    {
      title: 'Redux store',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/04/12/10/57/store-5033746_1280.png',
      projectUrl: 'https://redux-store-alpha.vercel.app/',
    },
    ,
    {
      title: 'Resume',
      imageUrl: 'https://cdn.pixabay.com/photo/2021/02/02/12/22/cv-5973796_1280.png',
      projectUrl: 'https://resume-7cew.vercel.app/',
    },
    ,
    {
      title: 'Project 4',
      imageUrl: 'https://via.placeholder.com/400',
      projectUrl: 'https://www.example.com/project2',
    },
    // Add more projects here
  ];

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 -mx-4 text-center">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
        />
      ))}
    </div>
  );
};

export default Portfolio;
