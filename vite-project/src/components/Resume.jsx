/* Author: Logan Stoltz */

import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
    return (
        <section id="resume">
            {/* Resume Section Content */}
            <h2 class="section-header-others">Resume</h2>

            <div className="resume-file">
                {/* Embed PDF Viewer */}
                <iframe 
                    src={'/src/assets/Logan_Stoltz_Resume.pdf'} 
                    width="1000px" 
                    style={{ border: "none" }} 
                    title="Resume PDF Viewer"
                />
            </div>
        </section>
    );
}

export default Resume;
