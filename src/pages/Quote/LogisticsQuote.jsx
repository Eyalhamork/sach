import React, { useState } from 'react';
import { Truck, MapPin, Package, Calendar, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './LogisticsQuote.css';

const LogisticsQuote = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        pickupLocation: '',
        deliveryLocation: '',
        cargoType: '',
        weight: '',
        date: '',
        notes: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setStep(4); // Success step
        setTimeout(() => {
            navigate('/dashboard');
        }, 3000);
    };

    return (
        <div className="quote-container">
            <header className="quote-header">
                <Link to="/dashboard" className="back-link">
                    <ArrowLeft size={20} /> Back to Dashboard
                </Link>
                <div className="header-title">
                    <Truck className="text-primary" size={24} />
                    <h1>Request Logistics Quote</h1>
                </div>
            </header>

            <div className="quote-content">
                {/* Progress Bar */}
                <div className="progress-bar-container">
                    <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
                        <div className="step-number">1</div>
                        <span>Route</span>
                    </div>
                    <div className="progress-line"></div>
                    <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
                        <div className="step-number">2</div>
                        <span>Cargo</span>
                    </div>
                    <div className="progress-line"></div>
                    <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
                        <div className="step-number">3</div>
                        <span>Review</span>
                    </div>
                </div>

                <div className="form-card">
                    {step === 1 && (
                        <div className="form-step fade-in">
                            <h2>Route Details</h2>
                            <div className="form-group">
                                <label>Pickup Location</label>
                                <div className="input-with-icon">
                                    <MapPin size={18} />
                                    <input
                                        type="text"
                                        name="pickupLocation"
                                        placeholder="Enter pickup city or address"
                                        value={formData.pickupLocation}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Delivery Location</label>
                                <div className="input-with-icon">
                                    <MapPin size={18} />
                                    <input
                                        type="text"
                                        name="deliveryLocation"
                                        placeholder="Enter delivery city or address"
                                        value={formData.deliveryLocation}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Preferred Date</label>
                                <div className="input-with-icon">
                                    <Calendar size={18} />
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <button className="btn btn-primary btn-full mt-6" onClick={handleNext}>Next Step</button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="form-step fade-in">
                            <h2>Cargo Details</h2>
                            <div className="form-group">
                                <label>Cargo Type</label>
                                <div className="input-with-icon">
                                    <Package size={18} />
                                    <select name="cargoType" value={formData.cargoType} onChange={handleInputChange}>
                                        <option value="">Select Cargo Type</option>
                                        <option value="general">General Merchandise</option>
                                        <option value="perishable">Perishable Goods</option>
                                        <option value="machinery">Heavy Machinery</option>
                                        <option value="hazardous">Hazardous Materials</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Estimated Weight (kg)</label>
                                <input
                                    type="number"
                                    name="weight"
                                    placeholder="e.g. 500"
                                    value={formData.weight}
                                    onChange={handleInputChange}
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label>Additional Notes</label>
                                <textarea
                                    name="notes"
                                    placeholder="Any special handling instructions?"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="form-textarea"
                                ></textarea>
                            </div>
                            <div className="btn-group">
                                <button className="btn btn-outline" onClick={handleBack}>Back</button>
                                <button className="btn btn-primary" onClick={handleNext}>Next Step</button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="form-step fade-in">
                            <h2>Review & Submit</h2>
                            <div className="review-summary">
                                <div className="review-item">
                                    <span className="label">Pickup</span>
                                    <span className="value">{formData.pickupLocation || 'Not specified'}</span>
                                </div>
                                <div className="review-item">
                                    <span className="label">Delivery</span>
                                    <span className="value">{formData.deliveryLocation || 'Not specified'}</span>
                                </div>
                                <div className="review-item">
                                    <span className="label">Date</span>
                                    <span className="value">{formData.date || 'Not specified'}</span>
                                </div>
                                <div className="review-item">
                                    <span className="label">Cargo</span>
                                    <span className="value">{formData.cargoType || 'Not specified'} - {formData.weight}kg</span>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button className="btn btn-outline" onClick={handleBack}>Back</button>
                                <button className="btn btn-primary" onClick={handleSubmit}>Submit Request</button>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="success-step fade-in text-center">
                            <div className="success-icon">
                                <CheckCircle size={64} className="text-secondary" />
                            </div>
                            <h2>Request Submitted!</h2>
                            <p>Your quote request has been sent successfully. <br /> Redirecting to dashboard...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LogisticsQuote;
