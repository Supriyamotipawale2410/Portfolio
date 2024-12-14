
import React from 'react';
import './Style.css';


const Certifications = () => {
  const certifications = [
    {
        title: 'PGDAC',
        issuedBy: ' IET CDAC ACTS ATC',
        skills: 'Java, ASP.NET, C++, DS in Java, Advanced java, Frontend technologies',
      },
    {
      title: "Rest API's in ASP.NET and C#",
      issuedBy: 'Udemy',
      skills: 'C#, ASP.NET',
    },
    {
      title: 'Frontend development',
      issuedBy: 'Guvi Certifications',
      skills: 'HTML, CSS',
    },

    {
      title: 'Diploma in Electrical Design',
      issuedBy: 'BECIL',
      skills: 'AutoCAD, AutoCAD Electrical, Revit MEP',
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      {certifications.map((cert, index) => (
        <div key={index} className="certification">
          <h3>{cert.title}</h3>
          <p>Issued by: {cert.issuedBy}</p>
          {cert.skills && <p>Skills: {cert.skills}</p>}
        </div>
      ))}
    </section>
  );
};

export default Certifications;
