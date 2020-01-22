import React from 'react';
import './ProjectModal.scss';

class ProjectModal extends React.Component{
    render(){
        let currProject = this.props.currentProject[0];
        let projectImages = currProject.images.map((image) => (
            <img src={image} alt={image} key={image} />
        ));
        return (
            <div className="project-modal">
                <div className="btn-close" onClick={this.props.closeProject}>X</div>
                <div className="modal-bg" onClick={this.props.closeProject}></div>
                <div className="modal-content">
                    <div className="project-description">
                        <h1>{currProject.projectName}</h1>
                        <div>
                            {currProject.projectDetailDescription}
                        </div>
                    </div>
                    <div className="images-container">
                        {projectImages}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ProjectModal;