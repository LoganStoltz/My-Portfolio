import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <section id="resume">
            <h2 className="section-header-resume">Resume</h2>
            <div className="resume-file">
                <iframe src="/path/to/resume.pdf" title="Resume" />
            </div>
            <div className="resume-details-box">
                {/* Resume details */}
            </div>
        </section>
    );
}

export default Resume;
