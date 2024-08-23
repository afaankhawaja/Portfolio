import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <motion.div 
      className="w-full h-full bg-gray-800 border-1 md:bg-gray-800 text-white flex flex-col items-center py-40" 
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <motion.img
      src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png' 
        alt="Profile"
        className="hidden md:block w-46 h-40 md:-mt-8 md:mb-4 rounded-full border-4 border-white object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <h1 className="mt-4 md:mt-6 md:mb-2 md:text-3xl text-xl hidden md:block font-semibold text-center text-blue-400">Afaan Ahmad</h1>
      <div className="mt-8 hidden md:block md:space-x-8 md:flex md:mb-4">
        <a href="https://www.instagram.com/afaankhawaja4011/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="sm:text-xl lg:text-2xl  hover:text-pink-500 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/afaan-ahmad-9b855623a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="sm:text-xl lg:text-2xl hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://github.com/afaankhawaja" target="_blank" rel="noopener noreferrer">
          <FaGithub className="sm:text-xl lg:text-2xl hover:text-gray-500 transition duration-300" />
        </a>
        <a href="https://www.youtube.com/channel/UCCuSLrAYft2Vp2r52MT5ZnA" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="sm:text-xl lg:text-2xl hover:text-red-500 transition duration-300" />
        </a>
      </div>

      <motion.ul className="mt-36 md:mt-16 space-y-16 md:space-y-12 w-full px-4 text-center">
        {['Home', 'About', 'Contact', 'Resume', 'Portfolio'].map((item, index) => (
          <motion.li
            key={index}
            className="w-full font-bold"
            whileHover={{ scale: 1.05, color: '#38bdf8' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <NavLink
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `flex justify-center items-center text-sm md:text-xl px-4 py-2 relative ${
                  isActive ? 'text-blue-400' : 'text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 top-0 h-full md:w-2 ml-2 bg-blue-500"></span>
                  )}
                  {item}
                </>
              )}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Sidebar;
