// App.js
import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS here

// SmoothScroll Component
const SmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        console.warn(`Target element ${targetId} not found.`);
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => anchor.addEventListener('click', handleSmoothScroll));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return null; // This component doesn't render anything, just handles scrolling.
};

// Pagination Component
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const classPages = ['Page 1', 'Page 2', 'Page 3']; // Example pages
  const totalPages = classPages.length;

  const updatePage = () => {
    // You could add any additional side effects for page updates here
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      updatePage();
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      updatePage();
    }
  };

  return (
    <div className="pagination-container">
      <div className="pages-wrapper" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
        {classPages.map((pageContent, index) => (
          <div key={index} className="class-page">
            {pageContent}
          </div>
        ))}
      </div>

      <button className="left-button" onClick={prevPage} disabled={currentPage === 0}>
        Previous
      </button>
      <button className="right-button" onClick={nextPage} disabled={currentPage === totalPages - 1}>
        Next
      </button>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="App">
      <SmoothScroll />
      <Pagination />
    </div>
  );
};

export default App;
