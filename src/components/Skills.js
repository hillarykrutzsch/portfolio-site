import React from 'react';
import "./Skills.scss";

class Skills extends React.Component {
    render(){
        return (
            <div className="skills wrapper" ref={this.props.thisRef}>
                <h1>Skills</h1>
                <div className="skills-columns">
                    <div className="skills-column">
                            <ul>
                                <li>Javascript ES6 / JQuery</li>
                                <li>ReactJS / VueJS</li>
                                <li>SASS / LESS</li>
                                <li>CSS Grid / Flexbox</li>
                                <li>PHP / Laravel</li>
                                <li>Webpack / Gulp / Grunt</li>
                                <li>Git</li>
                                <li>Redux</li>
                                <li>JSON APIs</li>
                            </ul>
                    </div>
                    <div className="skills-column">
                            <ul>
                                <li>Analytics Tracking, SEO</li>
                                <li>mobile / responsive</li>
                                <li>Flash/Actionscript 3</li>
                                <li>Wordpress, Joomla, Shopify</li>
                                <li>Photoshop / Sketch / Invision</li>
                                <li>DVD Authoring, Video Compression</li>
                                <li>Experienced with Agile/JIRA, Basecamp, Assembla</li>
                                <li>Professional attitude</li> 
                                <li>Agency and start-up experience</li>
                            </ul>
                        </div>        
                </div>
            </div>
        );
    }
    
}

export default Skills;