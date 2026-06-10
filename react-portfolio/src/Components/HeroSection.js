import React from 'react';
import './Style.css';


const Skills = () => {
  const skills = [
    { category: 'Java Programming', items: ['Core Java', 'J2EE', "OOP's"] },
    { category: 'Frameworks & Libraries', items: ['Spring Boot', 'Hibernate', 'Thymeleaf'] },
    { category: 'Database Management', items: ['MySQL', 'SQL', 'JDBC'] },
    { category: 'Development Tools', items: ['Eclipse', 'Postman', 'Maven'] },
    { category: 'Version Control', items: ['Git & GitHub'] },
    { category: 'Front-End Technologies', items: ['HTML5', 'CSS3', 'JavaScript'] },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill-category">
          <h3>{skill.category}</h3>
          <ul>
            {skill.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
