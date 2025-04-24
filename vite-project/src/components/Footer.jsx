/* Author: Logan Stoltz */

import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <ul className="externallinks">
                <li><a href="https://github.com/LoganStoltz" target="_blank" aria-label="GitHub"><i class="bi bi-github"></i></a></li>
                <li><a href="https://linkedin.com/in/logan-stoltz" target="_blank" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a></li>
            </ul>
            <h5>Logan Stoltz ©2025</h5>
        </footer>
    );
}

export default Footer;
