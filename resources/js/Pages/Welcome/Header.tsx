import { User } from '@/types';
import { Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

interface HeaderProps {
    auth: User | null; // auth peut être null si l'utilisateur n'est pas connecté
}

const Header: React.FC<HeaderProps> = ({ auth }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="navbar">
                <div className="logo">🚀 Activity Tracker</div>
                <div className="nav-container">
                    <ul className="nav-links">
                        <li><a href="#hero">Accueil</a></li>
                        <li><a href="#features">Avantages</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="auth-buttons">
                        {auth ? (
                            <Link href="/dashboard" className="button">
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link href="/login" className="button">
                                    Login
                                </Link>
                                <Link href="/register" className="button">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
