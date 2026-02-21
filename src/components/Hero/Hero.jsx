import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>

            <div className="hero-content container">
                <div className="hero-text-wrapper">
                    <span className="hero-label fade-in">Premium Logistics & Car Rental</span>
                    <h1 className="hero-title fade-in fade-in-delay-1">
                        Moving Your Business, <br />
                        <span className="highlight">Driving Your Journey</span>
                    </h1>
                    <p className="hero-subtitle fade-in fade-in-delay-2">
                        Liberia's premier integrated logistics solution. Experience reliable freight transport and luxury car rental services tailored for professionals.
                    </p>
                    <div className="hero-btns fade-in fade-in-delay-3">
                        <Link to="/login" className="btn btn-secondary btn-xl hover-lift animate-pulse-gold">
                            Book / Get Quote <ArrowRight size={20} style={{ marginLeft: '12px' }} />
                        </Link>
                        <Link to="/services" className="btn btn-outline btn-xl hover-lift">
                            Explore Services
                        </Link>
                    </div>

                </div>
            </div>

            <div className="scroll-indicator fade-in fade-in-delay-3">
                <span>Scroll to discover</span>
                <ChevronDown size={24} className="bounce" />
            </div>
        </section>
    );
};

export default Hero;
