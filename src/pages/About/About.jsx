import React from 'react';
import { Target, Eye, Heart, Award, Shield, Users } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <div className="container">
                    <h1>About SACH</h1>
                    <p>Rooted in Liberia, Globally Minded.</p>
                </div>
            </header>

            <section className="about-intro container py-3xl">
                <div className="intro-grid">
                    <div className="intro-text">
                        <span className="section-subtitle">Since 2025</span>
                        <h2 className="section-title text-left">Our Story</h2>
                        <p className="lead-text">
                            Founded in 2025, SACH Trucking and Logistics LLC was established to address the critical need for reliable,
                            professional, and safe transportation solutions in Liberia and the wider West African region.
                        </p>
                        <p>
                            We are a "one-stop" transportation partner, offering seamless supply chain solutions for businesses
                            and premium mobility options for individuals and organizations.
                        </p>
                    </div>
                    <div className="intro-stats">
                        <div className="stat-card glass-card hover-lift">
                            <span className="stat-number">2025</span>
                            <span className="stat-label">Founded</span>
                        </div>
                        <div className="stat-card glass-card hover-lift">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Safe Deliveries</span>
                        </div>
                        <div className="stat-card glass-card hover-lift">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Support</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mission-vision py-3xl bg-secondary-subtle">
                <div className="container">
                    <div className="mv-grid">
                        <div className="mv-card glass-card">
                            <div className="mv-icon-wrapper"><Target size={32} /></div>
                            <h3>Our Mission</h3>
                            <p>
                                To deliver safe, dependable, and timely logistics and transportation solutions that enable
                                our clients to grow their businesses and travel with confidence.
                            </p>
                        </div>
                        <div className="mv-card glass-card">
                            <div className="mv-icon-wrapper"><Eye size={32} /></div>
                            <h3>Our Vision</h3>
                            <p>
                                To become the leading integrated logistics and car rental provider in Liberia and West Africa,
                                recognized for reliability, safety, and innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values container py-3xl">
                <div className="text-center mb-16">
                    <span className="section-subtitle">What Drives Us</span>
                    <h2 className="section-title">Our Core Values</h2>
                </div>
                <div className="values-grid">
                    <div className="value-item glass-card hover-lift">
                        <div className="value-icon"><Shield size={32} /></div>
                        <h4>Integrity</h4>
                        <p>We operate transparently and ethically in all engagements.</p>
                    </div>
                    <div className="value-item glass-card hover-lift">
                        <div className="value-icon"><Award size={32} /></div>
                        <h4>Reliability</h4>
                        <p>Clients count on us for punctual delivery and dependable vehicles.</p>
                    </div>
                    <div className="value-item glass-card hover-lift">
                        <div className="value-icon"><Heart size={32} /></div>
                        <h4>Customer Focus</h4>
                        <p>Our services are tailored to meet unique client needs.</p>
                    </div>
                    <div className="value-item glass-card hover-lift">
                        <div className="value-icon"><Users size={32} /></div>
                        <h4>Safety</h4>
                        <p>We prioritize the safety of cargo, passengers, and the public.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
