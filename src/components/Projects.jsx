import React from 'react'; 
import Slider from './Slider';
import './Projects.scss';

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h2 className="projects__heading">Наши работы</h2>
            <div className="slider"><Slider /></div>
        </div>
    )
}

export default Projects;