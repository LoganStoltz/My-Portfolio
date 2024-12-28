import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <section id="home">
            <div className="text-container-info">
                <h3>Welcome to My Portfolio</h3>
                <p>Here you can find my work and projects.</p>
            </div>
            <div className="text-container-contact">
                <h3>Contact Me</h3>
                <p>Email: example@example.com</p>
            </div>
        </section>
    );
}

export default Home;
