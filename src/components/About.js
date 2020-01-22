import React from 'react';
import "./About.scss";

const About = () => (
   <div className="about-me">
       <div className="wrapper">
            <img className="self-image" src="/images/self.jpg" />
            <div className="about-content">
                <h1>About Me</h1>
                <p>
                    <ul>
                        <li>Front End Developer in Los Angeles, CA</li>
                        <li>BA in Computer Science, UC Santa Barbara, 2004</li>
                        <li>Over 14 years of agency and start-up experience</li>
                        <li>🌈 Proud wife / mom of two</li>
                        <li>Foodie / amateur brewmaster</li>
                    </ul>
                </p>
                <h3 className="email">
                    <a href="mailto:hillary.krutzsch@gmail.com" target="_blank">hillary.krutzsch@gmail.com</a><br />
                    <a href="https://www.linkedin.com/in/hillarykrutzschfong/" target="_blank">LinkedIn</a><br />
                    <a href="https://github.com/hillarykrutzsch" target="_blank">Github</a><br />
                </h3>
            </div>
            
       </div>
   </div>
)

export default About;