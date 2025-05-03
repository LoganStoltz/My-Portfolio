/* Author: Logan Stoltz */

//import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about">
            <h2 className="section-header">About Me</h2>
            <div class="about-container">
                
                <div class="info">
                    <div className="icon">IMAGE</div>
                    <div className="about-me-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laudantium ab officiis. Cupiditate minus sit sunt incidunt aspernatur, deleniti dolore ex doloribus cum ipsum porro nesciunt modi saepe tempora quis.</div>
                </div>

                <div className="lang-tools-section">
                    <div className="lang-tool">Java</div>
                    <div className="lang-tool">CSS</div>
                    <div className="lang-tool">HTML</div>
                    <div className="lang-tool">JavaScript</div>
                    <div className="lang-tool">React</div>
                    <div className="lang-tool">SQL</div>
                    <div className="lang-tool">VSC</div>
                    <div className="lang-tool">GIT</div>
                    <div className="lang-tool">Firebase</div>
                    <div className="lang-tool">Python</div>
                    <div className="lang-tool">MySQL</div>
                </div>
            </div> 

        </section>
    );
}

export default About;