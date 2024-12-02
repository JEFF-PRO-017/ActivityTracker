import React from 'react';

const HeroSection = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1 className="hero-title animate">Gérez Votre Temps avec Intelligence</h1>
                <p className="hero-description animate">
                    Activity Tracker simplifie le suivi de votre productivité en vous offrant des outils automatisés et des analyses claires.
                </p>
                <div className="hero-buttons">
                    <button className="cta-button primary animate">Commencer Maintenant</button>
                    <button className="cta-button secondary animate">En savoir plus</button>
                </div>
            </div>
            {/* <div className="hero-image p-2">
                <img src="img/path-to-your-image.png" alt="Illustration" />
            </div> */}
        </section>
    );
};

export default HeroSection;
