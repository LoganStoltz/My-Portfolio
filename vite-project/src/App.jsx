/* Author: Logan Stoltz */

import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About'; 
import Classes from './components/Classes';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM fully loaded and parsed');
      });
      
      
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
      
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
      
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.warn(`Target element ${targetId} not found.`);
            }
        });
      });

      
    return (
        <div className="App">
            <Home />
            <Header />
            <main>
                <About />
                <Classes />
                <Projects />
                <Resume />
            </main>
            <Footer />
        </div>
    );
}

export default App;
