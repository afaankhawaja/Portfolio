// import React,{useEffect,useState} from 'react'
// import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
// import emailjs from '@emailjs/browser';
// import toast, { Toaster } from 'react-hot-toast';

// const Contact = () => {

//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     emailjs.init("AaBg2X0mra2ZgaKrD");
//   }, []);
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const templateParams = {
//       email: email,
//       subject: subject,
//       message: message,
//     };
//     emailjs.send('service_jk76a1d', 'template_zq0zfbl', templateParams)
//       .then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         // Reset form or show success message
//         setEmail('');
//         setSubject('');
//         setMessage('');
//       }, (error) => {
//         console.log('FAILED...', error);
//         // Show error message

//       });
      
      
//   };
//   const notify = () => toast.success('form submitted.Sucessfully!');

//   return (
//     <div>
//         <section class="-mt-52 w-full h-full rounded-lg dark:bg-gray-900">
//   <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//       <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-400 dark:text-white">Contact Us</h2>
//       <p class="mb-6 lg:mb-16 font-mono text-center text-white dark:text-gray-400 sm:text sm:text-xl">Got a technical issue? Want to Hire me for a project? Need details about my services? Let's talk.</p>
//       <form action="#" class="space-y-4">
//           <div>
//               <label for="email" class="block mb-2 text-sm font-bold text-gray-300 dark:text-gray-300">Your email</label>
//               <input value={email}
//               onChange={(e) => setEmail(e.target.value)} type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
//           </div>
//           <div>
//               <label for="subject" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Subject</label>
//               <input value={subject}
//               onChange={(e) => setSubject(e.target.value)} type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
//           </div>
//           <div class="sm:col-span-2">
//               <label for="message" class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-400">Your message</label>
//               <textarea value={message}
//               onChange={(e) => setMessage(e.target.value)} id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
//           </div>
//           <button onSubmit={handleSubmit && notify} type="submit" class="bg-blue-400 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
//       </form>
//   </div>
// </section>
// <div className="mt-8 ml-64 -mb-24 flex space-x-10">
//         <a href="https://wa.me/923058668903?text=Hello,%20I%20am%20interested%20in%20your%20portfolio" target="_blank" rel="noopener noreferrer">
//           <FaWhatsapp className="  text-5xl text-blue-400 hover:text-green-500 transition ease-in-out duration-300" />
//         </a>
//         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//           <FaInstagram className=" text-5xl text-blue-400 hover:text-pink-500 transition duration-300" />
//         </a>
//         </div>
//         <Toaster/>
//     </div>
//   )
// }

// export default Contact
import React, { useEffect, useState } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    emailjs.init("AaBg2X0mra2ZgaKrD");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email: email,
      subject: subject,
      message: message,
    };

    emailjs.send('service_jk76a1d', 'template_zq0zfbl', templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // Reset form and show success message
        setEmail('');
        setSubject('');
        setMessage('');
        toast.success('Form submitted successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        toast.error('Failed to submit form. Please try again.');
      });
  };

  return (
    <div>
      <section className="-mt-52 w-full h-full rounded-lg dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-400 dark:text-white">Contact Us</h2>
          <p className="mb-6 lg:mb-16 font-mono text-center text-white dark:text-gray-400 sm:text sm:text-lg">Got a technical issue? Need details about my services? Let's talk.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-300 dark:text-gray-300">Your email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300">Subject</label>
              <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-400">Your message</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="bg-blue-400 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-full hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </form>
        </div>
      </section>
      <div className="sm:ml-16 mt-8 lg:ml-64 -mb-24 flex space-x-10">
        <a href="https://wa.me/923058668903?text=Hello,%20I%20am%20interested%20in%20your%20portfolio" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-5xl text-blue-400 hover:text-green-500 transition ease-in-out duration-300" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-5xl text-blue-400 hover:text-pink-500 transition duration-300" />
        </a>
      </div>
      <Toaster />
    </div>
  )
}

export default Contact