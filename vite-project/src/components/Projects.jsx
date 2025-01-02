/* Author: Logan Stoltz */

import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <section id="projects">
            {/* Content for Projects section */}
            <div className="section-header-projects">
                <h2>Projects</h2>
            </div>

            <div className="projects-container">
                {/* Project 1 */}
                <div className="project-box">
                    <div className="project-details">
                        <h3>Stack Data Structure Visualizer</h3>
                        <h4>Website Created with CSS, HTML, and JavaScript</h4>
                        <p>
                            I worked with a team to develop an online data structure visualizer aimed at helping students understand key concepts like Stacks, Doubly Linked Lists, Binary Search Trees, and Max-Heaps. My contribution focused on building the Stack page, where I created an interactive control panel allowing users to push, pop, peek, and clear elements in a stack, with real-time visual updates and an adjustable animation speed. I also implemented educational sections that showcased stack implementations in Python, C, and Java, along with a detailed breakdown of time complexities and common use cases. This project was shaped by feedback from our professors at Eastern Washington University, who guided us toward addressing the areas students struggle with the most.
                        </p>
                    </div>

                    <div className='project-buttons-section'>
                        <a href="https://github.com/Evebarr20/data-structure-visualizer" target="_blank" rel="noopener noreferrer">
                            <div className="project-button">
                                View on GitHub
                            </div>
                        </a>
                        <a href="https://datastructurevisualizer.netlify.app/stack" target="_blank" rel="noopener noreferrer">
                            <div className="project-button">
                                View Project
                            </div>
                        </a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project-box">
                    <div className="project-details">
                        <h3>Orbellion (Card Game)</h3>
                        <h4>Digital Card Game Made in Unity</h4>
                        <p>
                            I worked with a team to develop a digital version of Orbellion, a student-made card game created by Nathan Marsee, using Unity. My main contributions were designing the gameboard and implementing key early features like the health and card systems, which enabled the game to track player health, manage card draws, and move cards between zones to perform various operations. Although the project wasn’t fully completed due to time constraints, we successfully established the foundation, allowing two players to draw cards and use energy to damage each other’s Hellions. This project provided me with valuable experience in game development and system design, even in its unfinished state.
                        </p>
                    </div>
                    <div className='project-buttons-section'>
                        <a href="https://github.com/NathanMarsee/Orbellion-Digital-Game" target="_blank" rel="noopener noreferrer">
                            <div className="project-button">
                                View on GitHub
                            </div>
                        </a>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="project-box">
                    <div className="project-details">
                        <h3>This Portfolio</h3>
                        <h4>Website Created with CSS, HTML, and JavaScript</h4>
                        <p>
                            My portfolio showcases my web development and design skills through a selection of projects, including e-commerce platforms, game development, and data visualizations. Built with HTML, CSS, and JavaScript, the site is responsive and user-friendly, featuring smooth navigation and modern design elements. It highlights my technical abilities, academic coursework, and expertise in various technologies like React, C++, and JavaScript. This portfolio reflects both my professional skills and design sensibilities.
                        </p>
                    </div>
                    <div className='project-buttons-section'>
                        <a href="https://github.com/LoganStoltz/My-Portfolio" target="_blank" rel="noopener noreferrer">
                            <div className="project-button">
                                View on GitHub
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
