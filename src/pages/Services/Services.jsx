import React from 'react';
import { Truck, Car, Package, Shield, Globe, MapPin, Search, ChevronRight } from 'lucide-react';
import './Services.css';

// Helper component for user icon
const User = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const Services = () => {
    return (
        <div className="services-page">
            <header className="services-header premium-header">
                <div className="container">
                    <span className="header-subtitle">What We Do</span>
                    <h1>Our Services</h1>
                    <p>Comprehensive transportation and mobility solutions for Liberia and beyond.</p>
                </div>
            </header>

            <section className="service-division logistics container py-3xl">
                <div className="division-content">
                    <div className="division-info">
                        <span className="badge">Logistics Division</span>
                        <h2 className="division-title">Logistics & Supply Chain Solutions</h2>
                        <p className="lead-text">
                            We provide end-to-end freight and logistics services designed to keep supply chains moving efficiently.
                        </p>
                        <ul className="service-list">
                            <li className="glass-card hover-lift">
                                <div className="icon-box"><Truck className="list-icon" /></div>
                                <div>
                                    <h4>Trucking & Freight Transportation</h4>
                                    <p>Long-distance and local hauling for containerized cargo, bulk goods, and construction materials.</p>
                                </div>
                            </li>
                            <li className="glass-card hover-lift">
                                <div className="icon-box"><Package className="list-icon" /></div>
                                <div>
                                    <h4>Warehousing & Distribution</h4>
                                    <p>Secure storage facilities and efficient distribution support for inventory management.</p>
                                </div>
                            </li>
                            <li className="glass-card hover-lift">
                                <div className="icon-box"><Globe className="list-icon" /></div>
                                <div>
                                    <h4>Customs Clearance Support</h4>
                                    <p>Assistance with documentation and regulatory compliance for smooth cross-border movement.</p>
                                </div>
                            </li>
                        </ul>
                        <div className="cta-wrapper mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h4 className="font-bold text-lg mb-2 text-primary">Ready to move your cargo?</h4>
                            <p className="cta-description text-sm text-gray-600">Get a competitive quote for your shipment today.</p>
                            <button className="btn btn-primary btn-xl w-full md:w-auto uppercase tracking-wider shadow-lg hover:shadow-xl transition-all font-bold">Request Logistics Quote</button>
                        </div>
                    </div>
                    <div className="division-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Logistics" className="division-img" />
                        <div className="dots-decoration"></div>
                    </div>
                </div>
            </section>

            <section className="service-division car-rental bg-light py-3xl">
                <div className="container">
                    <div className="division-content reverse">
                        <div className="division-info">
                            <span className="badge">Rental Division</span>
                            <h2 className="division-title">Car Rental Services</h2>
                            <p className="lead-text">
                                Premium mobility solutions tailored for comfort, safety, and the rugged demands of Liberian roads.
                            </p>
                            <div className="vehicle-categories">
                                <div className="v-cat">
                                    <Car size={32} />
                                    <span>Standard SUVs</span>
                                </div>
                                <div className="v-cat">
                                    <Truck size={32} />
                                    <span>Premium 4x4s</span>
                                </div>
                                <div className="v-cat">
                                    <Package size={32} />
                                    <span>Buses & Vans</span>
                                </div>
                            </div>
                            <ul className="service-list">
                                <li className="glass-card hover-lift">
                                    <div className="icon-box"><Shield className="list-icon" /></div>
                                    <div>
                                        <h4>Corporate Fleet Leasing</h4>
                                        <p>Long-term rental solutions for NGOs, Government Agencies, and Corporate businesses.</p>
                                    </div>
                                </li>
                                <li className="glass-card hover-lift">
                                    <div className="icon-box"><User size={24} className="list-icon" /></div>
                                    <div>
                                        <h4>Chauffeur & Driver Services</h4>
                                        <p>Professional, vetted, and experienced drivers who know the local terrain.</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="cta-wrapper mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <h4 className="font-bold text-lg mb-2 text-primary">Need a vehicle?</h4>
                                <p className="cta-description text-sm text-gray-600">Choose from our diverse fleet for daily or long-term rental.</p>
                                <button className="btn btn-secondary btn-xl w-full shadow-lg hover:shadow-xl transition-all font-bold">Book a Vehicle Now</button>
                            </div>
                        </div>
                        <div className="division-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Car Rental" className="division-img" />
                            <div className="dots-decoration"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
