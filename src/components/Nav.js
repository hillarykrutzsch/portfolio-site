
import React from 'react';

const Nav = (props) => (
    <nav>
        <ul>
            <li><button onClick={()=>props.scrollTo('projects')}>projects</button></li>
            <li><button onClick={()=>props.scrollTo('skills')}>skills</button></li>
            <li><button onClick={()=>props.scrollTo('contact')}>contact</button></li>
        </ul>
    </nav>
)

export default Nav;