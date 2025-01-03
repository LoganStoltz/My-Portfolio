/* Author: Logan Stoltz */

import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
    return (
        <section id="resume">
            {/* Resume Section Content */}
            <div class="section-header-resume">
                <h2>Resume</h2>
            </div>

            <div class="resume-details-box">
                <div class="resume-details">
                    <h3>About me</h3>
                    <p>I am a dedicated Computer Science student at Eastern Washington University, set to complete my Bachelor in Computer Science in the Fall of 2024, with a minor in Cyber Security. My academic journey has provided me with a strong foundation in both fields, with a particular focus on network security, cryptographic algorithms, and ethical hacking techniques. A highlight of my studies is the Data Structure Visualization project, an interactive website that I developed alongside my peers. This project, available on my GitHub profile, showcases my skills in both front-end and back-end development, utilizing HTML, CSS, JavaScript, and Firebase to create a functional and educational tool.</p>
                    <p>Beyond academics, my experience as a Shift Supervisor at Papa Murphy’s has honed my leadership, communication, and problem-solving abilities. Overseeing daily operations and managing a team has taught me the value of teamwork and adaptability in dynamic environments. On a personal note, I recently got married and am thrilled to be expecting my first child. Balancing my passion for technology with a love for the outdoors, I am eager to begin an internship and apply my skills in real-world scenarios as I embark on my career in the tech industry.</p>
                </div>
            </div>

            <div className="resume-file">
                {/* Embed PDF Viewer */}
                <iframe 
                    src={'/src/assets/Logan_Stoltz_Resume.pdf'} 
                    width="100%" 
                    height="600px" 
                    style={{ border: "none" }} 
                    title="Resume PDF Viewer"
                />
            </div>
        </section>
    );
}

export default Resume;
