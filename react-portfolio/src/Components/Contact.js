import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Style.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p><FontAwesomeIcon icon={faEnvelope} /> Email: supriyamotipawale2019@gmail.com</p>
      <p><FontAwesomeIcon icon={faPhoneAlt} /> Phone: 9175445646</p>
      <p>
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn: 
        <a href="https://www.linkedin.com/in/supriyamotipawale/" target="_blank" rel="noopener noreferrer"> supriyamotipawale </a>
      </p>
      <p>
        <FontAwesomeIcon icon={faGithub} /> GitHub: 
        <a href="https://github.com/Supriyamotipawale2410" target="_blank" rel="noopener noreferrer"> Supriyamotipawale2410 </a>
      </p>
      <button>
        <a href="Supriya Motipawale.pdf" download>Download CV</a>
      </button>
    </section>
  );
};

export default Contact;
