import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
                    <img src="/logo-white.png" alt="SACH Logo" className="logo-image" />
                    <div className="logo-text-container">
                        <span className="logo-text">SACH</span>
                        <span className="logo-subtext">Logistics</span>
                    </div>
                </Link>

                <div className="mobile-icon" onClick={toggleMenu}>
                    {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className={`nav-links ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className={`nav-links ${location.pathname === '/services' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className={`nav-links ${location.pathname === '/about' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={`nav-links ${location.pathname === '/contact' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                    <li className="nav-item nav-btn">
                        <Link to="/login" className="btn btn-secondary btn-sm" onClick={() => setIsOpen(false)}>
                            Get a Quote
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
