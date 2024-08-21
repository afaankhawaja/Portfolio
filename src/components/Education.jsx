import React from 'react';
import '../assets/css/Timeline.css';

const Education = ()=>{
  const Educations=[
    {
        date: '2020 - 2024',
        title: 'Bachelor\'s Degree in Computer Science',
        location: 'Capital University of Science & Technology (CUST)',
        description: 'Relevant coursework: Data Structures, Web Development, Database Management.'
      },
  ]
    return(
        <>
      <div className="timeline-container">
      <h2 className="timeline-header">Education</h2>
      <div className="timeline">
        {Educations.map((item, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="timeline-content">
              <div className="timeline-date">{item.date}</div>
              <h3 className="timeline-title font-bold">{item.title}</h3>
              {item.location && <h4 className="timeline-location">{item.location}</h4>}
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </>
    )
}
export default Education;