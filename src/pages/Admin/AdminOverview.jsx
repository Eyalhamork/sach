import React from 'react';
import { DollarSign, Truck, Calendar as CalendarIcon, FileText, ArrowUp, ArrowDown } from 'lucide-react';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import '../Dashboard/Dashboard.css';

const AdminOverview = () => {
    return (
        <div className="dashboard-wrapper">
            <AdminSidebar />

            <main className="dashboard-main bg-slate-50">
                <header className="dashboard-topbar">
                    <div>
                        <h1 className="page-title">System Overview</h1>
                        <p className="page-subtitle">Real-time performance and operational metrics</p>
                    </div>
                    <div className="topbar-actions flex flex-item">
                        <span className="text-sm-gray">Last updated: Just now</span>
                        <button className="btn btn-outline" style={{ color: '#0F172A', borderColor: '#e2e8f0' }}>
                            Generate Report
                        </button>
                    </div>
                </header>

                <div className="dashboard-content">
                    {/* Key Metrics Setup */}
                    <div className="stats-grid-4">
                        {/* Revenue */}
                        <div className="stat-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div className="stat-icon" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
                                    <DollarSign size={24} />
                                </div>
                                <span className="status-badge status-completed">
                                    <ArrowUp size={14} /> 18%
                                </span>
                            </div>
                            <div className="stat-details">
                                <span className="stat-value">$42,500</span>
                                <span className="stat-label">Monthly Revenue</span>
                            </div>
                        </div>

                        {/* Active Freight */}
                        <div className="stat-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div className="stat-icon bg-blue-light text-blue">
                                    <Truck size={24} />
                                </div>
                                <span className="status-badge status-active">12 in Transit</span>
                            </div>
                            <div className="stat-details">
                                <span className="stat-value">48</span>
                                <span className="stat-label">Active Shipments</span>
                            </div>
                        </div>

                        {/* Rented Vehicles */}
                        <div className="stat-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div className="stat-icon bg-orange-light text-orange">
                                    <CalendarIcon size={24} />
                                </div>
                                <span className="status-badge" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>85% Utilization</span>
                            </div>
                            <div className="stat-details">
                                <span className="stat-value">24</span>
                                <span className="stat-label">Active Rentals</span>
                            </div>
                        </div>

                        {/* Pending Quotes */}
                        <div className="stat-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div className="stat-icon bg-gold-light text-gold">
                                    <FileText size={24} />
                                </div>
                                <span className="status-badge status-pending" style={{ color: '#ef4444', backgroundColor: '#fef2f2' }}>
                                    <ArrowDown size={14} /> Needs Action
                                </span>
                            </div>
                            <div className="stat-details">
                                <span className="stat-value">15</span>
                                <span className="stat-label">Pending Quotes</span>
                            </div>
                        </div>
                    </div>

                    {/* Dual Tables for Admin */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Table 1: Recent Quote Requests */}
                        <div className="data-table-container mb-0 flex flex-col">
                            <div className="data-table-header">
                                <h2>Recent Quote Requests</h2>
                                <button style={{ color: '#2563eb', fontWeight: 600 }}>Review All &rarr;</button>
                            </div>
                            <div style={{ overflowX: 'auto', flex: 1 }}>
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Client</th>
                                            <th>Type</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { name: 'Liberia Min Co.', type: 'Haulage', date: '2h ago', status: 'Pending' },
                                            { name: 'Acme Corp', type: 'Freight', date: '5h ago', status: 'Pending' },
                                            { name: 'Global Tech', type: 'Distribution', date: '1d ago', status: 'Completed' },
                                        ].map((quote, idx) => (
                                            <tr key={idx} style={{ cursor: 'pointer' }}>
                                                <td className="text-dark-bold">{quote.name}</td>
                                                <td>{quote.type}</td>
                                                <td className="text-sm-gray">{quote.date}</td>
                                                <td>
                                                    <span className={`status-badge ${quote.status === 'Pending' ? 'status-pending' : 'status-completed'}`}>
                                                        {quote.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table 2: Recent Bookings */}
                        <div className="data-table-container mb-0 flex flex-col">
                            <div className="data-table-header">
                                <h2>Today's Rentals to Dispatch</h2>
                                <button style={{ color: '#ca8a04', fontWeight: 600 }}>Manage Fleet &rarr;</button>
                            </div>
                            <div style={{ overflowX: 'auto', flex: 1 }}>
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Vehicle</th>
                                            <th>Client</th>
                                            <th>Period</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { v: 'Toyota Hilux 2024', c: 'NGO World', p: '2 Days', s: 'Awaiting Pickup' },
                                            { v: 'Range Rover HSE', c: 'VIP Client', p: '1 Week', s: 'Dispatching' },
                                            { v: 'Hyundai H1', c: 'Tourism Grp', p: '3 Days', s: 'Awaiting Pickup' },
                                        ].map((rent, idx) => (
                                            <tr key={idx} style={{ cursor: 'pointer' }}>
                                                <td className="text-dark-bold">{rent.v}</td>
                                                <td>{rent.c}</td>
                                                <td className="text-sm-gray">{rent.p}</td>
                                                <td>
                                                    <span className={`status-badge ${rent.s === 'Dispatching' ? 'status-active' : 'status-pending'}`}>
                                                        {rent.s}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminOverview;
