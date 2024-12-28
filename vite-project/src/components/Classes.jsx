import React, { useState } from 'react';
import '../styles/Classes.css';

const Classes = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const classPages = React.Children.toArray(document.querySelectorAll('.class-page'));
    const totalPages = classPages.length;

    const updatePage = () => {
        classPages.forEach((page, index) => {
            page.style.transform = `translateX(-${currentPage * 100}%)`;
        });
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
            updatePage();
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
            updatePage();
        }
    };

    return (
        <section id="classes">
            <h2 className="section-header-classes">Classes</h2>
            <div className="classes-container">
                <button className="scroll-button left-button" onClick={prevPage} disabled={currentPage === 0}>
                    &lt;
                </button>
                <div className="class-page" style={{ transition: 'transform 0.5s ease-in-out' }}>
                    {/* Render your class boxes here */}
                </div>
                <button className="scroll-button right-button" onClick={nextPage} disabled={currentPage === totalPages - 1}>
                    &gt;
                </button>
            </div>
        </section>
    );
}

export default Classes;
