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
          <p>Je me suis exercer pendant toute la durée de la formation sur ces 3 languages.</p>
        </div>
        <div className="skills_details">
          <img src='https://icongr.am/devicon/react-original.svg?size=70&color=currentColor' alt="icon" />
          <p>React a été au coeur de la formation, je suis donc particulièrement à l'aise avec.</p>
        </div>
        <div className="skills_details">
          <img src='https://icongr.am/devicon/express-original-wordmark.svg?size=70&color=currentColor' alt="icon" />
          <p>Utilisation d'express en fin de formation notamment lors du projet client pour la gestion de routes.</p>
        </div>
        <div className="skills_details">
          <img src='https://icongr.am/devicon/nodejs-original.svg?size=70&color=currentColor' alt="icon" />
          <p>Utilisation de Node tout au longs de la formation notamment son gestionnaire de paquets.</p>
        </div>
        <div className="skills_details">
          <img src='https://icongr.am/devicon/mysql-original-wordmark.svg?size=70&color=currentColor' alt="icon" />
          <p>Utilisation de MySQL lors de projet pour la mise en place de base de données.</p>
        </div>
        <div className="skills_details">
          <img src='https://icongr.am/devicon/git-original.svg?size=70&color=currentColor' alt="icon" />
          <p>Utilisation de Git pendant les 5 mois de formation pour gérer notre code lors de différents projets collaboratifs ou exercices.</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;