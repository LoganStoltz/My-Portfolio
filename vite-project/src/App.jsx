import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'; 
import Classes from './components/Classes';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
    return (
        <div class="App">
            <Header />
            <main>
                <Home />
                <Classes />
                <Projects />
                <Resume />
            </main>
            <Footer />
        </div>
    );
}

export default App;
