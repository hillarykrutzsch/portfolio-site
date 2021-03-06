import React from 'react';
import './ProjectGrid.scss';

class ProjectGrid extends React.Component{
    render(){
        const projects = this.props.projects.map((project)=>(
            <div className="project-grid-item" key={project.projectID} onClick={()=> {this.props.openProject(project.projectID)}}>
                <img src={project.projectThumbnail} alt={project.projectGridDescription} />
                <div className="project-grid-item-content">
                    <h5>{project.projectName}</h5>
                    <p>{project.projectGridDescription}</p>
                </div>
                
            </div>
        ));
        return (
            <main ref={this.props.thisRef}>
                <h1>Projects</h1>
                <div className="project-grid">
                    {projects}
                </div>
            </main>
        );
    }
}

export default ProjectGrid;