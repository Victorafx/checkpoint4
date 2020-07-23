import React from 'react';

const Skills = () => {
  return (
    <div>
      <h2>Compétences</h2>
      <div className="skills_block" id="competences" >
        <div className="skills_details">
          <img src='https://icongr.am/devicon/html5-original.svg?size=70&color=currentColor' alt="icon" />
          <img src='https://icongr.am/devicon/css3-original.svg?size=70&color=currentColor' alt="icon" />
          <img src='https://icongr.am/devicon/javascript-original.svg?size=70&color=currentColor' alt="icon" />
        </div>
        <div className="skills_details">
          <img src='https://icongr.am/devicon/react-original.svg?size=70&color=currentColor' alt="icon" />
        </div>
        <div className="skills_details">
          <img src='https://icongr.am/devicon/express-original-wordmark.svg?size=70&color=currentColor' alt="icon" />
        </div>
        <div className="skills_details">
          <img src='https://icongr.am/devicon/nodejs-original.svg?size=70&color=currentColor' alt="icon" />
        </div>
        <div className="skills_details">
          <img src='https://icongr.am/devicon/mysql-original-wordmark.svg?size=70&color=currentColor' alt="icon" />
        </div>
        <div className="skills_details">
          <img src='https://icongr.am/devicon/git-original.svg?size=70&color=currentColor' alt="icon" />
        </div>
      </div>
    </div>
  )
}

export default Skills;