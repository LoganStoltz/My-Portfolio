import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <nav className="nav-left">
                <ul className="navlinks">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#classes">Classes</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </nav>
            <nav className="nav-middle">
                <h1>My Portfolio</h1>
            </nav>
            <div className="nav-middle">
                <ul className="externallinks">
                    <li><a href="#" aria-label="External Link"><i className="icon-link"></i></a></li>
                    <li><a href="#" aria-label="External Link"><i className="icon-link"></i></a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
