import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Activity Tracker. Tous droits réservés.</p>
            <ul className="social-links">
                <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        🐦 Twitter
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        📘 Facebook
                    </a>
                </li>
                <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        🐙 GitHub
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
