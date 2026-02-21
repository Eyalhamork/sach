import React from 'react';
import { Truck, Car, Plus, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-wrapper">
            {/* Sidebar */}
            <DashboardSidebar />

            {/* Main Content */}
            <main className="dashboard-main">
                <header className="dashboard-topbar">
                    <h1 className="page-title">Overview</h1>
                    <div className="topbar-actions">
                        <button className="btn btn-sm btn-outline">Help & Support</button>
                    </div>
                </header>

                <div className="dashboard-content">
                    {/* Stats Row */}
                    <div className="stats-grid">
                        <div className="stat-card premium-card">
                            <div className="stat-icon bg-blue-light"><Package className="text-blue" size={24} /></div>
                            <div className="stat-details">
                                <span className="stat-value">12</span>
                                <span className="stat-label">Active Shipments</span>
                            </div>
                        </div>
                        <div className="stat-card premium-card">
                            <div className="stat-icon bg-orange-light"><Car className="text-orange" size={24} /></div>
                            <div className="stat-details">
                                <span className="stat-value">5</span>
                                <span className="stat-label">Completed Rentals</span>
                            </div>
                        </div>
                        <div className="stat-card premium-card">
                            <div className="stat-icon bg-gold-light"><Truck className="text-gold" size={24} /></div>
                            <div className="stat-details">
                                <span className="stat-value">2</span>
                                <span className="stat-label">Pending Quotes</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <h2 className="section-title">Quick Actions</h2>
                    <div className="actions-grid">
                        <Link to="/quote/logistics" className="action-card premium-hover">
                            <div className="card-bg-icon"><Truck /></div>
                            <div className="action-content">
                                <div className="icon-wrapper"><Truck size={32} /></div>
                                <h3>Request Logistics Quote</h3>
                                <p>Freight, Haulage & Distribution</p>
                                <span className="btn-text">Start Request &rarr;</span>
                            </div>
                        </Link>

                        <Link to="/book/rental" className="action-card premium-hover">
                            <div className="card-bg-icon"><Car /></div>
                            <div className="action-content">
                                <div className="icon-wrapper"><Car size={32} /></div>
                                <h3>Book a Vehicle</h3>
                                <p>SUVs, 4x4s & Corporate Fleet</p>
                                <span className="btn-text">Book Now &rarr;</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
