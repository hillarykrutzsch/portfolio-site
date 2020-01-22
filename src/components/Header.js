
import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import './Header.scss';

const Header = () => (
    <header>
        <div className="wrapper">
            <Logo />
            <Nav />
        </div>
    </header>
)

export default Header;