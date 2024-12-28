import React from 'react';
import './styles/App.css';
import Header from '../vite-project/src/components/Header';
import Footer from '../vite-project/src/components/Footer';
import Home from '../vite-project/src/components/Home';
import Classes from '../vite-project/src/components/Classes';
import Projects from '../vite-project/src/components/Projects';
import Resume from '../vite-project/src/components/Resume';

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
