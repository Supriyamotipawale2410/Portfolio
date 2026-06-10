import React from 'react';
import './Style.css';


const Projects = () => {
  const projects = [
    {
      title: 'EliteGymBook',
      year: '2024',
      description:
        'Developed a comprehensive web application for gym services to streamline operations for gym managers, members, and trainers.',
      technologies: 'Java Spring Boot, HTML, CSS, ReactJS, MySQL',
    },
    {
      title: 'Online Bus Booking',
      year: '2024',
      description:
        "Developed an online bus booking system for centralized seat reservations.",
      technologies: 'ASP.NET, HTML, CSS, Microsoft SQL Server',
    },
    {
        title: 'Restaurant Website',
        year: '2023',
        description:
          "Developed a responsive restaurant website with a homepage and filter page.",
        technologies: 'HTML, CSS',
      },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.year}</p>
          <p>{project.description}</p>
          <p><strong>Tech Used:</strong> {project.technologies}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
