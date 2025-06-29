/* Author: Logan Stoltz */

import React from 'react';
import Starfield from '../components/Starfield'; // Adjust path as needed
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home">
      <Starfield />
      <div className="text-container-info">
        <p>Welcome! My name is <span>Logan Stoltz</span></p>
        <p>and I'm a Software Developer.</p>
      </div>
      <div className="view-more">
        <a href="#about"><button>View More</button></a>
      </div>
    </section>
  );
}

export default Home;




/*
            <div class="text-container-contact">
                <h3>Contact Information</h3>
                <p>Email: <a href="mailto:loganstoltz1234@gmail.com" target="_blank">loganstoltz1234@gmail.com</a></p>
                <p>Phone: <a href="tel:+1234567890">(775) 276-0061</a></p>
            </div>

            <p>I am a dedicated Computer Science student at Eastern Washington University, set to complete my Bachelor in Computer Science in the Fall of 2024, with a minor in Cyber Security. My academic journey has provided me with a strong foundation in both fields, with a particular focus on network security, cryptographic algorithms, and ethical hacking techniques. A highlight of my studies is the Data Structure Visualization project, an interactive website that I developed alongside my peers. This project, available on my GitHub profile, showcases my skills in both front-end and back-end development, utilizing HTML, CSS, JavaScript, and Firebase to create a functional and educational tool.</p>
            <p>Beyond academics, my experience as a Shift Supervisor at Papa Murphy’s has honed my leadership, communication, and problem-solving abilities. Overseeing daily operations and managing a team has taught me the value of teamwork and adaptability in dynamic environments. On a personal note, I recently got married and am thrilled to be expecting my first child. Balancing my passion for technology with a love for the outdoors, I am eager to begin an internship and apply my skills in real-world scenarios as I embark on my career in the tech industry.</p>
            
*/ 