
import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import './Header.scss';

const Header = (props) => (
    <header>
        <Logo />
        <div className="wrapper">
            <h1 className="title">Front End Web Development</h1>
            <Nav scrollTo={props.scrollTo} />
        </div>
    </header>
)

export default Header;