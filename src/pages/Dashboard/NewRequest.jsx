import React from 'react';
import { Truck, Car, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';
import './Dashboard.css';

const NewRequest = () => {
    return (
        <div className="dashboard-wrapper">
            <DashboardSidebar />
            <main className="dashboard-main request-container">
                <div className="request-bg-element"></div>

                <header className="request-page-header">
                    <h1>Start New Request</h1>
                    <p>Choose a service category to begin. We're here to help move your business forward.</p>
                </header>

                <div className="request-cards">
                    <Link to="/quote/logistics" className="request-card logistics">
                        <div className="icon-large">
                            <Truck size={40} />
                        </div>

                        <h3>Logistics Quote</h3>
                        <p>Request a comprehensive quote for freight, haulage, or distribution services tailored to your cargo needs.</p>

                        <div className="btn-text">
                            Start Request <MoveRight className="action-arrow ml-2" size={20} />
                        </div>
                    </Link>

                    <Link to="/book/rental" className="request-card rental">
                        <div className="icon-large">
                            <Car size={40} />
                        </div>

                        <h3>Book a Vehicle</h3>
                        <p>Browse our premium fleet of SUVs, 4x4s, and trucks. Instant booking for personal or corporate use.</p>

                        <div className="btn-text">
                            Book Now <MoveRight className="action-arrow ml-2" size={20} />
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default NewRequest;
