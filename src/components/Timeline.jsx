import React from 'react';
import '../assets/css/Timeline.css';

const Timeline = () => {
  const timelineData = [
    
    {
      date: 'July 2023 - September 2023',
      title: 'Intern',
      location: 'Codify Pvt Limited',
      description: 'Developed a solid foundation in front-end development by exploring and utilizing React documentation and Redux Toolkit.'
    },
    {
      date: 'Project (In Progress)',
      title: 'E-commerce Project',
      location: 'SelfWork',
      description: 'Developing a full-stack e-commerce application using Next.js and React.js.'
    },
    {
      date: '1-Aug-2024',
      title: 'To-Do List Application',
      location: 'SelfWork',
      description: 'Built a dynamic and responsive To-Do List application using React.js with features like sorting, Dates, Reminder etc.'
    },
    {
      date: '14-Aug-2024',
      title: 'Redux Store',
      location: 'SelfWork',
      description: 'Created a Redux Store project to manage state efficiently in React applications.'
    }
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-header">Experience</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="timeline-content">
              <div className="timeline-date">{item.date}</div>
              <h3 className="timeline-title font-bold">{item.title}</h3>
              {item.location && <h4 className="timeline-location">{item.location}</h4>}
              <p className="timeline-description ">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;