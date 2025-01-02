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
                    <h3>More About Me</h3>
                    <h5>Collaborative Team Player</h5>
                    <p>In my projects, I’ve always enjoyed working as part of a team. Whether it was creating data structure visualizers or designing game systems in Unity, I’ve contributed to everything from brainstorming and problem-solving to implementation. I aim to help the team meet both technical and user-focused goals, and I value building strong working relationships, learning from others, and integrating feedback along the way.</p>
                    <h5>Adaptable with a Growth Mindset</h5>
                    <p>Throughout my academic and professional journey, I’ve faced a range of challenges that pushed me to be adaptable. Whether it was building an e-commerce platform with modern front-end tools or experimenting with Unity for game development, I’ve enjoyed learning and growing through new experiences. Staying curious and open to growth helps me keep pace with the fast-moving world of tech.</p>
                    <h5>Deep Passion for Code and Problem Solving</h5>
                    <p>I’ve always had a deep passion for coding and solving complex problems. One project I’m particularly proud of is a data structure visualizer where I created educational content and animations to make learning easier and more engaging. I love diving into the details, figuring out the best approach, and crafting solutions that are efficient and scalable.</p>
                    <h5>Emphasis on Clean, User-Centric Design</h5>
                    <p>Design is something I really care about. I strive to create projects that are not only functional but also intuitive and enjoyable to use. Whether it’s a web app or an interactive tool, I’m always focused on making sure the design is clean and enhances the overall user experience. I believe that a great solution should look good and work even better.</p>
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
