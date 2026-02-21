import React from 'react';
import { Car, Calendar, MapPin, MoreVertical } from 'lucide-react';
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';
import './Dashboard.css';

const MyRentals = () => {
    const rentals = [
        { id: 'RN-2026-X82', vehicle: 'Toyota Land Cruiser', type: 'SUV', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80', dates: 'Feb 20 - Feb 23, 2026', status: 'Upcoming', total: '$450', days: 3 },
        { id: 'RN-2026-A12', vehicle: 'Hyundai H1', type: 'Van', image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=400&q=80', dates: 'Jan 15 - Jan 18, 2026', status: 'Completed', total: '$420', days: 3 },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'status-badge status-active';
            case 'Upcoming': return 'status-badge status-upcoming';
            case 'Completed': return 'status-badge status-completed';
            default: return 'status-badge bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="dashboard-wrapper">
            <DashboardSidebar />
            <main className="dashboard-main bg-slate-50">
                <header className="dashboard-topbar backdrop-blur-sm bg-white/90 sticky top-0 z-10">
                    <div>
                        <h1 className="page-title">Car Rentals</h1>
                        <p className="page-subtitle">Manage your fleet reservations</p>
                    </div>
                    <button className="btn btn-primary">
                        + Book Vehicle
                    </button>
                </header>

                <div className="dashboard-content">
                    {/* Stats Summary */}
                    <div className="stats-grid">
                        <div className="stat-card premium-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <span className="text-sm-gray font-medium">Total Bookings</span>
                            <div className="flex items-end justify-between w-full mt-2">
                                <h3 className="text-3xl font-bold text-gray-800">8</h3>
                                <span className="text-gray-400 text-xs text-right">Lifetime</span>
                            </div>
                        </div>
                        <div className="stat-card premium-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <span className="text-sm-gray font-medium">Upcoming Trips</span>
                            <div className="flex items-end justify-between w-full mt-2">
                                <h3 className="text-3xl font-bold text-orange-600">1</h3>
                                <span className="text-orange-500 text-xs font-bold bg-orange-50 px-2 py-1 rounded-full">Next: Feb 20</span>
                            </div>
                        </div>
                        <div className="stat-card premium-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <span className="text-sm-gray font-medium">Reward Points</span>
                            <div className="flex items-end justify-between w-full mt-2">
                                <h3 className="text-3xl font-bold text-secondary">450</h3>
                                <span className="text-secondary text-xs font-bold bg-secondary/10 px-2 py-1 rounded-full">Silver Member</span>
                            </div>
                        </div>
                    </div>

                    <div className="data-table-container">
                        <div className="data-table-header">
                            <h2>Recent Bookings</h2>
                            <button className="text-sm text-primary font-bold hover:text-secondary transition-colors">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Vehicle</th>
                                        <th>Dates</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rentals.map((rental) => (
                                        <tr key={rental.id}>
                                            <td>
                                                <span className="text-dark-bold">{rental.id}</span>
                                            </td>
                                            <td>
                                                <div className="flex-item gap-3">
                                                    <div className="w-12 h-8 rounded bg-gray-200 bg-cover bg-center shadow-sm" style={{ backgroundImage: `url(${rental.image})` }}></div>
                                                    <div>
                                                        <div className="text-dark-bold">{rental.vehicle}</div>
                                                        <div className="text-xs text-gray-500">{rental.type}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex-item gap-2 text-sm text-gray-600">
                                                    <Calendar size={14} className="text-gray-400" />
                                                    <span>{rental.dates}</span>
                                                    <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded ml-1">{rental.days}d</span>
                                                </div>
                                            </td>
                                            <td className="font-bold text-gray-700">{rental.total}</td>
                                            <td>
                                                <span className={getStatusColor(rental.status)}>
                                                    {rental.status}
                                                </span>
                                            </td>
                                            <td className="text-right">
                                                <button className="btn-icon-ghost">
                                                    <MoreVertical size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyRentals;
