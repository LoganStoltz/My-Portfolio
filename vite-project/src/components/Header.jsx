/* Author: Logan Stoltz */

import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <ul className="navlinks">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#classes">Classes</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
/*<div className="nav-right">
                <ul className="externallinks">
                    <li><a href="https://github.com/LoganStoltz" target="_blank" aria-label="GitHub"><i class="bi bi-github"></i></a></li>
                    <li><a href="https://linkedin.com/in/logan-stoltz" target="_blank" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a></li>
                </ul>
            </div>*/