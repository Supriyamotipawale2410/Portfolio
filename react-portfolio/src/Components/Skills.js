import React from "react";
import './Style.css';

const Skills = () => {
  const skills = ["Java",".Net","MySQL","C++","HTML", "CSS", "JavaScript", "ReactJS","Spring Boot","REST API","Eclipse","VS Code","Spring Tool Suite","Visual Studio"];
  return (
    <section id="skills" className="skills">
      <h2>Technologies & Tools</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
