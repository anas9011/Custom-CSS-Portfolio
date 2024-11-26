import React from 'react'
import '../app/styles/skills.css';

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-grid'>

<div data-aos="fade-up" className='skills-left'>
  <h2 className='skills-heading'>Technologies I work with</h2>
  <p className='skills-text'>
    I have solid foundation in web development, specializing  in HTML, CSS, and Javascript. My experience extends to using frameworks like react and Next.js to create dynamic and user-friendly applications. I am also proficient in technologies  to enhance my skill set and contribute effectively to project. 
  </p>
</div>
  <div className='skills-right'>
<div className='skills-icons-grid'>
  <div className='skills-space'>
 <h2 data-aos="fade-up">Html</h2>
 <h2 data-aos="fade-up">Css</h2>
 <h2 data-aos="fade-up">Typescript</h2>
 </div>
  <div className='skills-space'>
    <h2 data-aos="fade-up">Next.js</h2>
    <h2 data-aos="fade-up">Tailwind</h2>
    
  </div>
</div>
  </div>
      </div>
    </div>
  );
};

export default Skills;
