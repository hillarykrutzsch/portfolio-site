
import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import './Header.scss';

const Header = (props) => (
    <header>
        <div className="wrapper">
            <Logo />
            <Nav scrollTo={props.scrollTo} />
        </div>
    </header>
)

export default Header;