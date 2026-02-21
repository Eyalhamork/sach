import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <header className="contact-header">
                <div className="container">
                    <span className="contact-subtitle">We Are Ready</span>
                    <h1>Get In Touch</h1>
                    <p>We're ready to move your business forward. Contact us for a custom quote.</p>
                </div>
            </header>

            <section className="contact-container container py-3xl">
                <div className="contact-grid">
                    <div className="contact-info-panel">
                        <h2>Contact Information</h2>
                        <p>Our team is available 24/7 for logistics tracking and roadside assistance.</p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <MapPin className="detail-icon" size={24} />
                                <div>
                                    <h4>Office Address</h4>
                                    <p>9th Street Sinkor, District #9, Monrovia, Liberia</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <Phone className="detail-icon" size={24} />
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+231-77323-3129</p>
                                    <p>+231-8896-75587</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <Mail className="detail-icon" size={24} />
                                <div>
                                    <h4>Email Support</h4>
                                    <p>sachtruckingandlogisticsllc@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-panel">
                        <form className="contact-form">
                            <h3 className="form-title">Send a Message</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="form-input" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Service Requested</label>
                                <select className="form-select">
                                    <option>Logistics & Freight</option>
                                    <option>Car Rental (Short-term)</option>
                                    <option>Car Rental (Corporate)</option>
                                    <option>Airport Transfer</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="Tell us about your requirements..." className="form-textarea"></textarea>
                            </div>
                            <button type="submit" className="btn btn-secondary btn-full">
                                Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
