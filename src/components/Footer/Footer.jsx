import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-top container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src="/logo-white.png" alt="SACH Logistics" className="logo-image" />
                            <span className="brand-text">SACH <br />Logistics </span>

                        </Link>

                        <p className="footer-desc">
                            Moving Your Business, Driving Your Journey. Liberia's premier integrated logistics and car rental provider.
                            Delivering excellence in every mile.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Our Services</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services/logistics">Logistics & Freight</Link></li>
                            <li><Link to="/services/rental">Car Rental</Link></li>
                            <li><Link to="/services/corporate">Corporate Fleets</Link></li>
                            <li><Link to="/services/moving">Moving Services</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-title">Contact Us</h4>
                        <ul className="contact-list">
                            <li className="contact-item">
                                <MapPin size={18} className="contact-icon" />
                                <span>9th Street Sinkor, Monrovia, Liberia</span>
                            </li>
                            <li className="contact-item">
                                <Phone size={18} className="contact-icon" />
                                <span>+231-77323-3129</span>
                            </li>
                            <li className="contact-item">
                                <Mail size={18} className="contact-icon" />
                                <span>info@sachliberia.com</span>
                            </li>
                        </ul>
                        <Link to="/contact" className="btn btn-outline btn-sm mt-4">
                            Contact Support <ArrowRight size={14} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p>&copy; {currentYear} SACH Trucking and Logistics LLC. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
