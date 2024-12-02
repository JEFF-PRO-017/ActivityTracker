import React from 'react';

const features = [
    {
        title: 'Suivi précis',
        description: 'Analysez combien de temps vous passez sur chaque application.',
        icon: '⏱️',
    },
    {
        title: 'Automatisation',
        description: 'Suivi entièrement automatisé, sans effort manuel.',
        icon: '🤖',
    },
    {
        title: 'Rapports clairs',
        description: 'Générez des rapports PDF détaillés en un clic.',
        icon: '📊',
    },
    {
        title: 'Multiplateforme',
        description: 'Fonctionne sur Windows, macOS et Linux.',
        icon: '💻',
    },
];

const FeaturesSection = () => {
    return (
        <section id="features" className="features">
            <h2>Pourquoi Choisir Activity Tracker ?</h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <div className="icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
