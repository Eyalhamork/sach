import React from 'react';
import { Package, MapPin, Calendar, ArrowRight, MoreVertical } from 'lucide-react';
import DashboardSidebar from '../../components/DashboardSidebar/DashboardSidebar';
import './Dashboard.css';

const MyShipments = () => {
    const shipments = [
        { id: 'SH-2026-001', origin: 'Monrovia, LR', destination: 'Ganta, LR', status: 'In Transit', date: 'Feb 18, 2026', type: 'Cargo' },
        { id: 'SH-2026-002', origin: 'Freeport, LR', destination: 'Buchanan, LR', status: 'Pending', date: 'Feb 19, 2026', type: 'Freight' },
        { id: 'SH-2026-003', origin: 'Zwedru, LR', destination: 'Harper, LR', status: 'Delivered', date: 'Feb 10, 2026', type: 'Parcel' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'In Transit': return 'status-badge status-intransit';
            case 'Pending': return 'status-badge status-pending';
            case 'Delivered': return 'status-badge status-delivered';
            default: return 'status-badge bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="dashboard-wrapper">
            <DashboardSidebar />
            <main className="dashboard-main bg-slate-50">
                <header className="dashboard-topbar backdrop-blur-sm bg-white/90 sticky top-0 z-10">
                    <div>
                        <h1 className="page-title">My Shipments</h1>
                        <p className="page-subtitle">Track and manage your diverse logistics portfolio</p>
                    </div>
                    <button className="btn btn-primary">
                        + New Shipment
                    </button>
                </header>

                <div className="dashboard-content">
                    {/* Stats Summary */}
                    <div className="stats-grid">
                        <div className="stat-card premium-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <span className="text-sm-gray font-medium">Total Shipments</span>
                            <div className="flex items-end justify-between w-full mt-2">
                                <h3 className="text-3xl font-bold text-gray-800">24</h3>
                                <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">+12%</span>
                            </div>
                        </div>
                        <div className="stat-card premium-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <span className="text-sm-gray font-medium">In Transit</span>
                            <div className="flex items-end justify-between w-full mt-2">
                                <h3 className="text-3xl font-bold text-blue-600">3</h3>
                                <span className="text-blue-500 text-xs font-bold bg-blue-50 px-2 py-1 rounded-full">Active</span>
                            </div>
                        </div>
                        <div className="stat-card premium-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <span className="text-sm-gray font-medium">Delivered (This Month)</span>
                            <div className="flex items-end justify-between w-full mt-2">
                                <h3 className="text-3xl font-bold text-gray-800">18</h3>
                                <span className="text-gray-400 text-xs">Updated 2m ago</span>
                            </div>
                        </div>
                    </div>

                    <div className="data-table-container">
                        <div className="data-table-header">
                            <h2>Active Shipments</h2>
                            <button className="text-sm text-primary font-bold hover:text-secondary transition-colors">View All History</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Tracking ID</th>
                                        <th>Type</th>
                                        <th>Route</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shipments.map((shipment) => (
                                        <tr key={shipment.id}>
                                            <td>
                                                <span className="text-dark-bold">{shipment.id}</span>
                                            </td>
                                            <td>
                                                <div className="flex-item">
                                                    <div className="p-1.5 bg-gray-100 rounded text-gray-500"><Package size={14} /></div>
                                                    <span className="text-sm font-medium text-gray-600">{shipment.type}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                                    <div className="flex flex-col">
                                                        <span className="text-dark-bold">{shipment.origin.split(',')[0]}</span>
                                                        <span className="text-xs text-gray-400">{shipment.origin.split(',')[1]}</span>
                                                    </div>
                                                    <div className="h-px w-8 bg-gray-300 relative">
                                                        <div className="absolute -right-1 -top-1 text-gray-400"><ArrowRight size={10} /></div>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-dark-bold">{shipment.destination.split(',')[0]}</span>
                                                        <span className="text-xs text-gray-400">{shipment.destination.split(',')[1]}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-sm font-medium text-gray-500">{shipment.date}</td>
                                            <td>
                                                <span className={getStatusColor(shipment.status)}>
                                                    {shipment.status}
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

export default MyShipments;
