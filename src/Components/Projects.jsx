import React from 'react';

class Projects extends React.Component {
  state = {
    projects: []
  }

  getProjects = () => {
    fetch("http://localhost:8000/projects")
      .then(res => res.json())
      .then(res => this.setState({ projects: res }))
  }
  componentDidMount() {
    this.getProjects()
  }
  render() {
    return (
      <div>
        {this.state.projects.map(project =>
          <div className="project_block">
            <p>{project.name}</p>
            <p>{project.date}</p>
            <div className="img_block">
              <a href={project.link}><img src={project.image} alt="project" /></a>    
            </div>
            <p>{project.description}</p>      
          </div>
        )}
      </div>
    )
  }
}

export default Projects;