import React, { useState } from 'react';
import { Car, Calendar, User, CreditCard, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './CarRentalBooking.css';

const CarRentalBooking = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [formData, setFormData] = useState({
        pickupDate: '',
        returnDate: '',
        driverOption: 'self',
        location: '',
        fullName: '',
        email: '',
        phone: ''
    });

    const vehicles = [
        { id: 1, name: 'Toyota Land Cruiser', type: 'SUV', price: 150, image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80' },
        { id: 2, name: 'Toyota Hilux', type: 'Pickup', price: 120, image: 'https://images.unsplash.com/photo-1551838423-647900b84c8a?auto=format&fit=crop&w=400&q=80' },
        { id: 3, name: 'Hyundai H1', type: 'Van', price: 140, image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=400&q=80' },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const selectVehicle = (vehicle) => {
        setSelectedVehicle(vehicle);
        setStep(2);
    };

    const handleNext = () => {
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(4);
        setTimeout(() => {
            navigate('/dashboard');
        }, 3000);
    };

    return (
        <div className="booking-container">
            <header className="booking-header">
                <Link to="/dashboard" className="back-link">
                    <ArrowLeft size={20} /> Back to Dashboard
                </Link>
                <div className="header-title">
                    <Car className="text-primary" size={24} />
                    <h1>Book a Vehicle</h1>
                </div>
            </header>

            <div className="booking-content">
                {/* Progress Bar */}
                <div className="progress-bar-container">
                    <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
                        <div className="step-number">1</div>
                        <span>Vehicle</span>
                    </div>
                    <div className="progress-line"></div>
                    <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
                        <div className="step-number">2</div>
                        <span>Details</span>
                    </div>
                    <div className="progress-line"></div>
                    <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
                        <div className="step-number">3</div>
                        <span>Confirm</span>
                    </div>
                </div>

                <div className="form-card">
                    {step === 1 && (
                        <div className="form-step fade-in">
                            <h2>Select a Vehicle</h2>
                            <div className="vehicle-grid">
                                {vehicles.map(vehicle => (
                                    <div key={vehicle.id} className="vehicle-card" onClick={() => selectVehicle(vehicle)}>
                                        <div className="vehicle-image" style={{ backgroundImage: `url(${vehicle.image})` }}></div>
                                        <div className="vehicle-info">
                                            <h3>{vehicle.name}</h3>
                                            <p className="vehicle-type">{vehicle.type}</p>
                                            <div className="vehicle-price">
                                                <span className="amount">${vehicle.price}</span>
                                                <span className="per-day">/ day</span>
                                            </div>
                                            <button className="btn btn-sm btn-outline btn-full mt-4">Select</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="form-step fade-in">
                            <h2>Rental Details</h2>
                            <div className="selected-vehicle-summary mb-6">
                                <span className="text-gray-500">Selected:</span>
                                <strong className="ml-2 text-primary">{selectedVehicle?.name}</strong>
                                <button className="ml-auto text-sm text-secondary underline" onClick={handleBack}>Change</button>
                            </div>

                            <div className="form-dates-grid">
                                <div className="form-group">
                                    <label>Pickup Date</label>
                                    <input
                                        type="date"
                                        name="pickupDate"
                                        value={formData.pickupDate}
                                        onChange={handleInputChange}
                                        className="form-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Return Date</label>
                                    <input
                                        type="date"
                                        name="returnDate"
                                        value={formData.returnDate}
                                        onChange={handleInputChange}
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Driver Option</label>
                                <div className="radio-group">
                                    <label className={`radio-card ${formData.driverOption === 'self' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="driverOption"
                                            value="self"
                                            checked={formData.driverOption === 'self'}
                                            onChange={handleInputChange}
                                        />
                                        <div className="radio-content">
                                            <User size={20} />
                                            <span>Self Drive</span>
                                        </div>
                                    </label>
                                    <label className={`radio-card ${formData.driverOption === 'chauffeur' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="driverOption"
                                            value="chauffeur"
                                            checked={formData.driverOption === 'chauffeur'}
                                            onChange={handleInputChange}
                                        />
                                        <div className="radio-content">
                                            <User size={20} />
                                            <span>With Chauffeur (+$50/day)</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Pickup Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Enter address or airport code"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    className="form-input"
                                />
                            </div>

                            <div className="btn-group">
                                <button className="btn btn-outline" onClick={handleBack}>Back</button>
                                <button className="btn btn-primary" onClick={handleNext}>Next Step</button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="form-step fade-in">
                            <h2>Review & Confirm</h2>
                            <div className="review-summary">
                                <div className="review-item">
                                    <span className="label">Vehicle</span>
                                    <span className="value">{selectedVehicle?.name}</span>
                                </div>
                                <div className="review-item">
                                    <span className="label">Dates</span>
                                    <span className="value">{formData.pickupDate} to {formData.returnDate}</span>
                                </div>
                                <div className="review-item">
                                    <span className="label">Driver</span>
                                    <span className="value capitalize">{formData.driverOption}</span>
                                </div>
                                <div className="review-item total">
                                    <span className="label">Estimated Total</span>
                                    <span className="value text-xl">${selectedVehicle?.price * 3 + (formData.driverOption === 'chauffeur' ? 150 : 0)}</span>
                                </div>
                            </div>
                            <div className="alert-box mb-6">
                                <p className="text-sm text-gray-600">
                                    By clicking confirm, you agree to our rental terms. Payment will be collected upon vehicle pickup.
                                </p>
                            </div>
                            <div className="btn-group">
                                <button className="btn btn-outline" onClick={handleBack}>Back</button>
                                <button className="btn btn-primary" onClick={handleSubmit}>Confirm Booking</button>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="success-step fade-in text-center">
                            <div className="success-icon">
                                <CheckCircle size={64} className="text-secondary" />
                            </div>
                            <h2>Booking Confirmed!</h2>
                            <p>Your vehicle has been reserved. Check your email for details. <br /> Redirecting to dashboard...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CarRentalBooking;
