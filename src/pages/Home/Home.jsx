import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import { Truck, Car, Shield, Clock, MapPin, Award, Star, CheckCircle, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />

            <section className="services-overview container py-3xl">
                <div className="text-center mb-16">
                    <span className="section-subtitle">Our Expertise</span>
                    <h2 className="section-title">Premium Services</h2>
                    <p className="section-desc text-center mx-auto">
                        Tailored logistics and mobility solutions designed for excellence.
                    </p>
                </div>

                <div className="service-showcase">
                    {/* Logistics Section */}
                    <div className="showcase-row">
                        <div className="showcase-image">
                            <img src="/logistics.jpg" alt="Logistics & Freight" />
                            <div className="showcase-badge">
                                <div className="badge-icon-wrapper logistics">
                                    <Truck size={24} />
                                </div>
                                <div className="badge-content">
                                    <span className="badge-label">Fleet Capacity</span>
                                    <span className="badge-value">50+ Trucks</span>
                                </div>
                            </div>
                        </div>
                        <div className="showcase-content">
                            <div className="showcase-label">
                                <Truck size={24} />
                                <span>Logistics Division</span>
                            </div>
                            <h3 className="showcase-title">Global Freight & Supply Chain Solutions</h3>
                            <p className="showcase-desc">
                                From local haulage to complex cross-border logistics, we ensure your cargo arrives safely and on time. Our fleet handles everything from containerized goods to bulk construction materials.
                            </p>

                            <div className="showcase-features">
                                <div className="showcase-feature">
                                    <CheckCircle className="feature-check" size={20} />
                                    <span>Real-time cargo tracking & updates</span>
                                </div>
                                <div className="showcase-feature">
                                    <CheckCircle className="feature-check" size={20} />
                                    <span>Customs clearance & documentation support</span>
                                </div>
                                <div className="showcase-feature">
                                    <CheckCircle className="feature-check" size={20} />
                                    <span>Warehousing & distribution services</span>
                                </div>
                            </div>

                            <div style={{ marginTop: '2rem' }}>
                                <Link to="/services" className="btn btn-primary btn-xl shadow-lg hover:shadow-xl transition-all">
                                    Get Logistics Quote <ArrowRight style={{ marginLeft: '12px' }} size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Car Rental Section */}
                    <div className="showcase-row reverse">
                        <div className="showcase-image">
                            <img src="/car-rental.jpg" alt="Premium Car Rental" />
                            <div className="showcase-badge">
                                <div className="badge-icon-wrapper rental">
                                    <Star size={24} />
                                </div>
                                <div className="badge-content">
                                    <span className="badge-label">Customer Rating</span>
                                    <span className="badge-value">4.9/5.0 Stars</span>
                                </div>
                            </div>
                        </div>
                        <div className="showcase-content">
                            <div className="showcase-label">
                                <Car size={24} />
                                <span>Rental Division</span>
                            </div>
                            <h3 className="showcase-title">Premium Fleet & Chauffeur Services</h3>
                            <p className="showcase-desc">
                                Experience Liberia in comfort and style. Whether you need a rugged 4x4 for upcountry trips or a luxury SUV for city business, our well-maintained fleet is ready.
                            </p>

                            <div className="showcase-features">
                                <div className="showcase-feature">
                                    <CheckCircle className="feature-check" size={20} />
                                    <span>Professional, vetted chauffeurs</span>
                                </div>
                                <div className="showcase-feature">
                                    <CheckCircle className="feature-check" size={20} />
                                    <span>Airport transfers & VIP pickup</span>
                                </div>
                                <div className="showcase-feature">
                                    <CheckCircle className="feature-check" size={20} />
                                    <span>Short & long-term corporate leasing</span>
                                </div>
                            </div>

                            <div style={{ marginTop: '2rem' }}>
                                <Link to="/services" className="btn btn-secondary btn-xl shadow-lg hover:shadow-xl transition-all">
                                    Book a Vehicle <ArrowRight style={{ marginLeft: '12px' }} size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-choose-us py-3xl bg-pattern">
                <div className="container">
                    <div className="why-us-content">
                        <div className="why-us-text">
                            <span className="section-subtitle">Why Partner With SACH?</span>
                            <h2 className="section-title text-left">Excellence in Every Mile</h2>
                            <p className="section-desc text-left">
                                We don't just move goods and people; we move businesses forward. Our commitment to safety, reliability, and professionalism sets us apart in the Liberian market.
                            </p>

                            <div className="features-list">
                                <div className="feature-item glass-card">
                                    <div className="feature-icon-wrapper"><Shield size={28} /></div>
                                    <div>
                                        <h3>Safety First</h3>
                                        <p>Rigorous maintenance protocols and defensive driving trained professionals ensure your cargo and passengers arrive safely.</p>
                                    </div>
                                </div>
                                <div className="feature-item glass-card">
                                    <div className="feature-icon-wrapper"><MapPin size={28} /></div>
                                    <div>
                                        <h3>Local Expertise</h3>
                                        <p>Deep knowledge of Liberia's terrain and routes allows us to navigate challenges efficiently.</p>
                                    </div>
                                </div>
                                <div className="feature-item glass-card">
                                    <div className="feature-icon-wrapper"><Clock size={28} /></div>
                                    <div>
                                        <h3>Seamless Payments & Support</h3>
                                        <p>Easy booking with MTN MoMo/Card payments and 24/7 dedicated customer support.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="why-us-image">
                            <img src="/driver.jpg" alt="SACH Professional Driver" className="rounded-xl shadow-2xl" />
                            <div className="floating-card glass">
                                <Award size={32} className="text-secondary mb-2" />
                                <span className="font-bold text-lg">Top Rated</span>
                                <span className="text-sm text-gray-600">Logistics Provider</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials py-3xl">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="section-subtitle">Testimonials</span>
                        <h2 className="section-title">Trusted by Industry Leaders</h2>
                    </div>

                    <div className="testimonials-grid">
                        <div className="testimonial-card glass-card hover-lift">
                            <div className="stars">
                                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                            </div>
                            <p className="testimonial-text">"SACH Logistics transformed our supply chain reliability. Their drivers are professional and the fleet is top-notch."</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">JD</div>
                                <div>
                                    <h4>James Doe</h4>
                                    <span>Operations Director, Mining Corp</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card glass-card hover-lift">
                            <div className="stars">
                                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                            </div>
                            <p className="testimonial-text">"The car rental service is exceptional. Clean vehicles, punctual drivers, and seamless booking process. Highly recommended."</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">SM</div>
                                <div>
                                    <h4>Sarah M.</h4>
                                    <span>NGO Country Director</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card glass-card hover-lift">
                            <div className="stars">
                                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                                <Star size={16} fill="#D4AF37" color="#D4AF37" />
                            </div>
                            <p className="testimonial-text">"Reliability is key in our business, and SACH delivers every time. Their team goes above and beyond to ensure delivery."</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">MK</div>
                                <div>
                                    <h4>Michael K.</h4>
                                    <span>Logistics Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
