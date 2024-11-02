import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>My Portfolio</h1>
            <nav className="nav-left">
                <ul className="navlinks">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#classes">Classes</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </nav>
            <div className="nav-right">
                <ul className="externallinks">
                    <li><a href="#" aria-label="External Link"><i className="icon-link"></i></a></li>
                    {/* Add more external links as needed */}
                </ul>
            </div>
        </header>
    );
}

export default Header;
