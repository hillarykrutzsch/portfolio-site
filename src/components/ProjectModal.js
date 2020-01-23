import React from 'react';
import './ProjectModal.scss';
import { Scrollbars } from 'react-custom-scrollbars';

class ProjectModal extends React.Component{

    renderThumb = ({ style, ...props }) => {
        const thumbStyle = {backgroundColor: 'white'};
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}/>
        );
    }

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
                    <Scrollbars renderThumbVertical={this.renderThumb}>
                        <div className="images-container">
                            {projectImages}
                        </div>
                    </Scrollbars>
                </div>
            </div>
        );
    }
}
 
export default ProjectModal;